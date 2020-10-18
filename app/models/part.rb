class Part < ApplicationRecord
  belongs_to :room

  has_many :settings
  has_many :instruments, through: :settings
end
