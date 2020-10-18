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
  delayTime: '8n',maxDelay: 2
}

@effect2 = {
  name: 'chorus',
  frequency: 1.5,
  delayTime: 3.5,
  depth: 0.7,
  type: 'sine',
  spread: 180
}

@effect3 = {
  name: 'distortion',
  distortion: 100,
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
  Room.first.parts.create!(name: 'Part 2')
  Room.first.parts.create!(name: 'Part 3')
end

def create_instrument
  User.all.each do |user|
    unless user.email == 'mixer@test.com'
      room = Room.first

      if user.email == 'musician1@test.com'
        instrument1 = user.instruments.create!(name: "Synth 1 for User #{user.id}", kind: 'synth', effects: ['feedbackDelay'], room_id: room.id)
      elsif user.email == 'musician2@test.com'
        instrument1 = user.instruments.create!(name: "Synth 1 for User #{user.id}", kind: 'synth', effects: ['chorus'], room_id: room.id)
      elsif user.email == 'musician3@test.com'
        instrument1 = user.instruments.create!(name: "Synth 1 for User #{user.id}", kind: 'synth', effects: ['distortion'], room_id: room.id)
      else
        instrument1 = user.instruments.create!(name: "Synth 1 for User #{user.id}", kind: 'synth', room_id: room.id)
      end

      room.parts.each do |part|
        if instrument1.effects.any?
          create_settings_for_instrument(part.id, instrument1.id, instrument1.effects[0])
        else
          create_settings_for_instrument(part.id, instrument1.id)
        end
      end

      instrument2 = user.instruments.create!(name: "Synth 2 for User #{user.id}", kind: 'synth', room_id: room.id)

      room.parts.each do |part|
        create_settings_for_instrument(part.id, instrument2.id)
      end
    end
  end
end

def create_settings_for_instrument(part_id, instrument_id, effect_name = '')
  effects = []

  if effect_name == 'feedbackDelay'
    effects = [@effect1]
  elsif effect_name == 'chorus'
    effects = [@effect2]
  elsif effect_name == 'distortion'
    effects = [@effect3]
  end

  Setting.create!(
    part_id: part_id,
    instrument_id: instrument_id,
    synth: generate_synth_settings,
    effects: effects,
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
