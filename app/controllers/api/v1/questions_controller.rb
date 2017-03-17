class Api::V1::QuestionsController < ApplicationController
  def index
    questions = Question.all
    data = []

    questions.each do |question|
      answer = Answer.find_by(question: question)
      if answer
        data << {id: question.id, question: question.body, answer: answer.body}
      else
        data << {id: question.id, question: question.body, answer: ""}
      end
    end

    render json: data
  end
end
