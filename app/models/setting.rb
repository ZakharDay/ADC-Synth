class Setting < ApplicationRecord
  belongs_to :instrument
  belongs_to :part
end
