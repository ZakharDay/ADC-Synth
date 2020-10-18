class Instrument < ApplicationRecord
  belongs_to :user
  belongs_to :room

  has_many :settings
  has_many :parts, through: :settings
end
