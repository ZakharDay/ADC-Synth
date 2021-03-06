class Part < ApplicationRecord
  belongs_to :room
  belongs_to :user

  has_many :settings
  has_many :instruments, through: :settings

  default_scope { order(created_at: :asc) }
end
