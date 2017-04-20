Rails.application.routes.draw do
  root "home#index"

  resources :questions, only: [:index]
  resources :techquestions, only: [:index]
  resources :companies, only: [:index]

  namespace :api do
    namespace :v1 do
      resources :questions
      resources :companies
    end
  end

end
