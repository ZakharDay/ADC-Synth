class Instrument < ApplicationRecord
  belongs_to :user
  belongs_to :room

  has_many :settings
  has_many :parts, through: :settings

  after_create :create_part_if_none

  def create_part_if_none
    unless user.parts.where(room_id: room.id).any?
      user.parts.create(name: 'Part 1', room_id: room.id)
    end
  end
end
