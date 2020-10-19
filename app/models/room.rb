class Room < ApplicationRecord
  belongs_to :user
  has_many :parts
  has_many :instruments
end
