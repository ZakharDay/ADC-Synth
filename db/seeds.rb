@user_emails = [
  'musician1@test.com',
  'musician2@test.com',
  'musician3@test.com',
  'musician4@test.com',
  'mixer@test.com'
]

@sequence1 = [
  {
    step: 0,
    note: 'C',
    octave: 1
  },
  {
    step: 1,
    note: 'E',
    octave: 2
  },
  {
    step: 2,
    note: 'G',
    octave: 1
  },
  {
    step: 3,
    note: 'E',
    octave: 3
  }
]

@sequence2 = [
  {
    step: 0,
    note: 'C',
    octave: 3
  },
  {
    step: 1,
    note: 'E',
    octave: 1
  },
  {
    step: 2,
    note: 'G',
    octave: 2
  },
  {
    step: 3,
    note: 'E',
    octave: 1
  }
]

@sequence3 = [
  {
    step: 0,
    note: 'G',
    octave: 3
  },
  {
    step: 1,
    note: 'A',
    octave: 1
  },
  {
    step: 2,
    note: 'C',
    octave: 2
  },
  {
    step: 3,
    note: 'G',
    octave: 1
  }
]

@effect1 = {
  name: 'feedbackDelay',
  delayTime: '8n',
  maxDelay: 0
}

@effect2 = {
  name: 'chorus',
  frequency: 0,
  delayTime: 0,
  depth: 0,
  type: 'sine',
  spread: 180
}

@effect3 = {
  name: 'distortion',
  distortion: 0,
  oversample: '4x'
}

@channel = {
  pan: 0,
  volume: 0,
  mute: false,
  solo: false
}

def seed
  clean_db
  create_users
  create_room
  create_parts
  create_instrument
end

def clean_db
  Rake::Task['db:drop'].invoke
  Rake::Task['db:create'].invoke
  Rake::Task['db:migrate'].invoke
end

def create_users
  @user_emails.each do |email|
    password = 'testtest'
    User.create!(email: email, password: password, password_confirmation: password)
  end
end

def create_room
  User.first.rooms.create!(name: 'Room 1')
end

def create_parts
  room = Room.first
  musician1 = User.find(1)
  musician2 = User.find(2)
  musician3 = User.find(3)
  musician4 = User.find(4)

  musician1.parts.create!(name: 'Part 1', room_id: room.id)
  musician1.parts.create!(name: 'Part 2', room_id: room.id)
  musician1.parts.create!(name: 'Part 3', room_id: room.id)

  musician2.parts.create!(name: 'Part 1', room_id: room.id)
  musician2.parts.create!(name: 'Part 2', room_id: room.id)
  musician2.parts.create!(name: 'Part 3', room_id: room.id)
  musician2.parts.create!(name: 'Part 4', room_id: room.id)

  musician3.parts.create!(name: 'Part 1', room_id: room.id)
  musician3.parts.create!(name: 'Part 2', room_id: room.id)

  musician4.parts.create!(name: 'Part 1', room_id: room.id)
  musician4.parts.create!(name: 'Part 2', room_id: room.id)
  musician4.parts.create!(name: 'Part 3', room_id: room.id)
  musician4.parts.create!(name: 'Part 4', room_id: room.id)
  musician4.parts.create!(name: 'Part 5', room_id: room.id)
end

def create_instrument
  User.all.each do |user|
    unless user.email == 'mixer@test.com'
      room = Room.first

      if user.email == 'musician1@test.com'
        instrument1 = user.instruments.create!(name: "Synth 1 for User #{user.id}", kind: 'synth', effects: ['feedbackDelay', 'chorus'], room_id: room.id)
      elsif user.email == 'musician2@test.com'
        instrument1 = user.instruments.create!(name: "Synth 1 for User #{user.id}", kind: 'synth', room_id: room.id)
      elsif user.email == 'musician3@test.com'
        instrument1 = user.instruments.create!(name: "Synth 1 for User #{user.id}", kind: 'synth', effects: ['chorus', 'distortion'], room_id: room.id)
      else
        instrument1 = user.instruments.create!(name: "Synth 1 for User #{user.id}", kind: 'synth', room_id: room.id)
      end

      instrument1.user.parts.where(room_id: room.id).each do |part|
        if instrument1.effects.any?
          create_settings_for_instrument(part.id, instrument1.id, instrument1.effects)
        else
          create_settings_for_instrument(part.id, instrument1.id)
        end
      end

      instrument2 = user.instruments.create!(name: "Synth 2 for User #{user.id}", kind: 'synth', room_id: room.id)

      instrument2.user.parts.where(room_id: room.id).each do |part|
        create_settings_for_instrument(part.id, instrument2.id)
      end
    end
  end
end

def create_settings_for_instrument(part_id, instrument_id, effects = [])
  effectsSettings = []

  effects.each do |effect|
    if effect == 'feedbackDelay'
      effectsSettings << @effect1
    end

    if effect == 'chorus'
      effectsSettings << @effect2
    end

    if effect == 'distortion'
      effectsSettings << @effect3
    end
  end

  Setting.create!(
    part_id: part_id,
    instrument_id: instrument_id,
    synth: generate_synth_settings,
    effects: effectsSettings,
    sequence: [@sequence1, @sequence2, @sequence3].sample,
    channel: @channel
  )
end

def generate_synth_settings
  settings = {
    envelope: {
      attack: (Random.new().rand(1.9) - 1).abs,
      decay: (Random.new().rand(1.9) - 1).abs,
      sustain: (Random.new().rand(1.9) - 1).abs,
      release: (Random.new().rand(1.9) - 1).abs
    }
  }
end

seed
