class RoomsController < ApplicationController
  before_action :authenticate_user!

  before_action :set_room, only: [
    :show, :edit, :update, :destroy,
    :musician, :mixer,
    :create_part, :change_part,
    :create_instrument, :change_instrument,
    :create_effect, :change_effects
  ]

  before_action :musician_props, only: :musician
  before_action :mixer_props, only: :mixer

  # GET /rooms
  # GET /rooms.json
  def index
    @rooms = Room.all
  end

  # GET /rooms/1
  # GET /rooms/1.json
  def show
  end

  def musician
  end

  def mixer
  end

  def create_part
    last_part_instruments_settings = current_user.parts.where(room_id: @room.id).last.settings
    part = current_user.parts.create(name: 'New Part', room_id: @room.id)

    last_part_instruments_settings.each do |instrument_settings|
      part.settings.create(
        instrument_id: instrument_settings.instrument_id,
        synth: instrument_settings.synth,
        effects: instrument_settings.effects,
        sequence: instrument_settings.sequence,
        channel: instrument_settings.channel
      )
    end

    musician_props

    render json: @props
  end

  def change_part
    user_parts = current_user.parts.where(room_id: @room.id)

    user_parts.each do |part|
      if part.id == params[:part_id]
        part.update_attribute(:current, true)
      else
        part.update_attribute(:current, false)
      end
    end

    ActionCable.server.broadcast 'mixer_channel', mixer_props.to_json

    render json: {}
  end

  def create_instrument
    user_parts = current_user.parts.where(room_id: @room.id)
    instrument = current_user.instruments.create(name: "New #{params[:type]}", kind: params[:type], room_id: @room.id)

    user_parts.each do |part|
      part.settings.create(
        instrument_id: instrument.id,
        synth: {
          envelope: {
            attack: 0,
            decay: 0,
            sustain: 1,
            release: 0
          }
        },
        channel: {
          pan: 0,
          volume: 0,
          mute: false,
          solo: false
        }
      )
    end

    musician_props

    render json: @props
  end

  def change_instrument
    instrument = Instrument.find(params[:instrument_id])
    setting = Setting.where(instrument_id: instrument.id, part_id: params[:part_id]).first

    setting.update_attribute(:synth, params[:part_settings][:synth])
    ActionCable.server.broadcast 'mixer_channel', mixer_props.to_json

    render json: {}
  end

  def create_effect
    instrument = Instrument.find(params[:instrument_id])
    effect_json = {}

    if params[:effect_name] == 'autoFilter'
      new_effect = {
        name: 'autoFilter',
        frequency: 50,
        type: 'square',
        depth: 0.5,
        baseFrequency: 900,
        octaves: 3,
        filter: {
          type: 'lowpass',
          rolloff: -24,
          q: 5
        }
      }
    elsif params[:effect_name] == 'feedbackDelay'
      new_effect = {
        name: 'feedbackDelay',
        delayTime: '8n',
        maxDelay: 0
      }
    elsif params[:effect_name] == 'chorus'
      new_effect = {
        name: 'chorus',
        frequency: 0,
        delayTime: 0,
        depth: 0,
        type: 'sine',
        spread: 180
      }
    elsif params[:effect_name] == 'distortion'
      new_effect = {
        name: 'distortion',
        distortion: 0,
        oversample: '4x'
      }
    end

    instrument.settings.each do |setting|
      effects = setting.effects
      effects << new_effect
      setting.update_attribute(:effects, effects)
    end

    musician_props

    render json: @props
  end

  def change_effects
    instrument = Instrument.find(params[:instrument_id])
    setting = Setting.where(instrument_id: instrument.id, part_id: params[:part_id]).first

    setting.update_attribute(:effects, params[:part_settings][:effects])
    ActionCable.server.broadcast 'mixer_channel', mixer_props.to_json

    render json: {}
  end

  # GET /rooms/new
  def new
    @room = Room.new
  end

  # GET /rooms/1/edit
  def edit
  end

  # POST /rooms
  # POST /rooms.json
  def create
    @room = current_user.rooms.create(room_params)

    respond_to do |format|
      if @room.save
        format.html { redirect_to @room, notice: 'Room was successfully created.' }
        format.json { render :show, status: :created, location: @room }
      else
        format.html { render :new }
        format.json { render json: @room.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /rooms/1
  # PATCH/PUT /rooms/1.json
  def update
    respond_to do |format|
      if @room.update(room_params)
        format.html { redirect_to @room, notice: 'Room was successfully updated.' }
        format.json { render :show, status: :ok, location: @room }
      else
        format.html { render :edit }
        format.json { render json: @room.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /rooms/1
  # DELETE /rooms/1.json
  def destroy
    @room.destroy
    respond_to do |format|
      format.html { redirect_to rooms_url, notice: 'Room was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_room
      @room = Room.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def room_params
      params.require(:room).permit(:name, :user_id)
    end

    def musician_props
      instruments = @room.instruments.where(user_id: current_user.id)
      instruments_json = []

      instruments.each do |instrument|
        settings_json = []

        instrument.user.parts.where(room_id: @room.id, user_id: current_user.id).each do |part|
          setting = part.settings.where(instrument_id: instrument.id).first

          settings_json << {
            partId: part.id,
            current: part.current,
            synth: setting.synth,
            effects: setting.effects,
            sequence: setting.sequence,
            channel: setting.channel
          }
        end

        instrument_json = {
          id: instrument.id,
          kind: instrument.kind,
          name: instrument.name,
          effects: instrument.effects,
          parts: settings_json
        }

        instruments_json << instrument_json
      end

      @props = {
        view: 'musician',
        room: {
          id: @room.id
        },
        parts: current_user.parts.where(room_id: @room.id).collect { |p| { id: p.id, name: p.name, current: p.current } },
        instruments: instruments_json
      }
    end

    def mixer_props
      instruments = @room.instruments
      instruments_json = []

      instruments.each do |instrument|
        settings_json = []

        instrument.parts.where(room_id: @room.id).each do |part|
          setting = part.settings.where(instrument_id: instrument.id).first

          settings_json << {
            partId: part.id,
            current: part.current,
            synth: setting.synth,
            effects: setting.effects,
            sequence: setting.sequence,
            channel: setting.channel
          }
        end

        instrument_json = {
          id: instrument.id,
          kind: instrument.kind,
          name: instrument.name,
          effects: instrument.effects,
          parts: settings_json
        }

        instruments_json << instrument_json
      end

      @props = {
        view: 'mixer',
        room: {
          id: @room.id,
          tempo: @room.tempo,
          mainChannelLevel: @room.main_channel_level
        },
        instruments: instruments_json
      }
    end
end
