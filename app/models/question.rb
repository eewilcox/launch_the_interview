class Question < ApplicationRecord
  belongs_to :category
  has_many :answers

  validates :body, presence: true
  validates :category, presence: true
end
