class Api::V1::CompaniesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
  end

end
