class CreateRooms < ActiveRecord::Migration[6.0]
  def change
    create_table :rooms do |t|
      t.string :name
      t.string :main_channel_level, default: '0'
      t.integer :tempo, default: 120
      t.integer :user_id

      t.timestamps
    end
  end
end
