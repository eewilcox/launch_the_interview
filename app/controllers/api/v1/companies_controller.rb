class Api::V1::CompaniesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    companies = Company.all
    render json: companies
  end

  def create
  end

end
