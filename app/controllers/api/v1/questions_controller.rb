class Api::V1::QuestionsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    questions = Question.all
    data = []

    questions.each do |question|
      answer = Answer.find_by(question: question)
        if answer
          data << {id: question.id, question: question.body, category: question.category_id, answer: answer.body}
        else
          data << {id: question.id, question: question.body, category: question.category_id, answer: ""}
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
