class Api::V1::CompaniesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    companies = Company.all
    render json: companies
  end

  def create
    data = JSON.parse(request.body.read)
    company = Company.new
    company.name = data["name"]
    company.url = data["url"]
    company.description = data["description"]
    company.note = data["notes"]
    if company.save!
      id = company.id
      if data["question"]
        ask = Ask.new
        ask.body = data["question"]
        ask.company_id = id
      end
      if data["technology"]
        tech = Technology.new
        tech.name = data["technology"]
        tech.company_id = id
      end
      render json: company
    end
  end

end
