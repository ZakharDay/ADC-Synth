Rails.application.routes.draw do
  devise_for :users

  resources :rooms do
    member do
      get 'musician'
      get 'mixer'
      get 'create_part'
      post 'change_part'
      get 'create_instrument'
      get 'create_effect'
    end
  end

  get 'synth/index'
  root 'rooms#index'
end
