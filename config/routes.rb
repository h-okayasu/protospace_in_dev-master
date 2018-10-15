Rails.application.routes.draw do
  devise_for :users
  root 'prototypes#index'

<<<<<<< HEAD
  resources :prototypes, only: [:index, :new, :create, :show, :edit, :update, :destroy]do
  resources :comments, only: [:create]
  end
=======
  resources :prototypes, only: [:index, :new, :create, :show, :edit, :update, :destroy]
>>>>>>> master
  resources :users, only: [:show, :edit, :update]
end
