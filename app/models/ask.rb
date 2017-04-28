class Ask < ApplicationRecord
  belongs_to :company

  validates :body, presence: true
  validates :body, uniqueness: true
  validates :company, presence: true
end
