class Room < ApplicationRecord
  belongs_to :user
  has_many :parts
  has_many :instruments

  after_create :create_part

  def create_part
    parts.create(name: 'Part 1')
  end
end
