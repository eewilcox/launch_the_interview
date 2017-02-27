class Question < ApplicationRecord
  belongs_to :category
  has_many :answers

  validates :question, presence: true
  validates :category, presence: true
end
