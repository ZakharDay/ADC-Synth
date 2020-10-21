class CreateSettings < ActiveRecord::Migration[6.0]
  def change
    create_table :settings do |t|
      t.integer :instrument_id
      t.integer :part_id
      t.json :synth
      t.json :effects, default: []
      t.json :sequence, default: []
      t.json :channel

      t.timestamps
    end
  end
end
