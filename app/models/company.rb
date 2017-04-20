class Company < ApplicationRecord
  has_many :asks
  has_many :interviewers
  has_many :technologies

  validates :name, presence: true
end
