Rails.application.routes.draw do
  devise_for :users

  resources :rooms do
    member do
      get 'musician'
      get 'mixer'
    end
  end

  get 'synth/index'
  root 'rooms#index'
end
