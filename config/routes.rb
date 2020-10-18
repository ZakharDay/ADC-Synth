Rails.application.routes.draw do
  devise_for :users
  resources :rooms

  get 'synth/index'
  root 'rooms#index'
end
