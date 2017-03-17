class Api::V1::QuestionsController < ApplicationController
  def index
    questions = Question.all
    answers = Answer.all
    # answers = Answer.find(user: current_user)
    data = {
      questions: questions,
      answers: answers
    }
    render json: data
  end
end
