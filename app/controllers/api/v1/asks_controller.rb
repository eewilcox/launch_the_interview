class Api::V1::AsksController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    data = JSON.parse(request.body.read)
    ask = Ask.new
    ask.body = data["question"]
    ask.company_id = data["id"]
    if ask.save!
      render json: ask
    end
  end

end
