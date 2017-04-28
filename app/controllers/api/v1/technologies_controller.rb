class Api::V1::TechnologiesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    data = JSON.parse(request.body.read)
    technology = Technology.new
    technology.name = data["name"]
    technology.company_id = data["id"]
    if technology.save!
      render json: technology
    end
  end

end
