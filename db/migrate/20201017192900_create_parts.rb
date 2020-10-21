class CreateParts < ActiveRecord::Migration[6.0]
  def change
    create_table :parts do |t|
      t.string :name
      t.integer :room_id
      t.integer :user_id
      t.boolean :current, default: false

      t.timestamps
    end
  end
end
