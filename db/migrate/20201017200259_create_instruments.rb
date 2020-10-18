class CreateInstruments < ActiveRecord::Migration[6.0]
  def change
    create_table :instruments do |t|
      t.string :name
      t.string :kind
      t.integer :user_id
      t.integer :room_id

      t.timestamps
    end
  end
end
