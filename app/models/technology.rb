class Technology < ApplicationRecord
  belongs_to :company

  validates :name, presence: true, uniqueness: true
  validates :company, presence: true
end
