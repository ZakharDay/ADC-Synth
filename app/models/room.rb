class Room < ApplicationRecord
  belongs_to :user
  has_many :parts
  has_many :instruments

  default_scope { order(created_at: :asc) }
end
