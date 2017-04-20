class Ask < ApplicationRecord
  belongs_to :company

  validates :body, presence: true
  validates :company, presence: true
end
