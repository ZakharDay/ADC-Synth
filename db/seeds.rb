@user_emails = [
  'musician1@test.com',
  'musician2@test.com',
  'musician3@test.com',
  'musician4@test.com',
  'mixer@test.com'
]

@sequence = [
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

      instrument1 = user.instruments.create!(name: "Synth 1 for User #{user.id}", kind: 'synth', room_id: room.id)

      room.parts.each do |part|
        create_settings_for_instrument(part.id, instrument1.id)
      end

      instrument2 = user.instruments.create!(name: "Synth 1 for User #{user.id}", kind: 'synth', room_id: room.id)

      room.parts.each do |part|
        create_settings_for_instrument(part.id, instrument2.id)
      end
    end
  end
end

def create_settings_for_instrument(part_id, instrument_id)
  Setting.create!(part_id: part_id, instrument_id: instrument_id, synth: {}, effects: [], sequence: @sequence, channel: @channel)
end

seed
