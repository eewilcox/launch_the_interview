Rails.application.routes.draw do
  root "home#index"

  resources :questions

  namespace :api do
    namespace :v1 do
      resources :questions
    end
  end
  
end
