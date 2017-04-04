class Api::V1::QuestionsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    questions = Question.all
    answers = Answer.all
    data = []

    questions.each do |question|
      answers.each do |answer|
        if answer.question_id == question.id
          data << {id: question.id, question: question.body, answer: answer.body}
        else
          data << {id: question.id, question: question.body, answer: ""}
        end
      end
    end

    render json: data
  end

  def create
    data = JSON.parse(request.body.read)
    answer = Answer.new
    answer.question_id = data["questionId"]
    answer.body = data["answer"]
    if answer.save!
      render json: answer
    end
  end
end
