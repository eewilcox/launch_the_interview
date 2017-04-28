class Answer < ApplicationRecord
  belongs_to :question
  # belongs_to :user

  validates :body, presence: true
  validates :body, uniqueness: true
  validates :question, presence: true
  # validates :user, uniqueness: { scope: :question }
  # validates :user, presence: true
end
