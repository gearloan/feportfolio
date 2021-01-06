Rails.application.routes.draw do

  root 'static_pages#gallery'

  get 'index', to: 'static_pages#index'
  get 'code', to: 'static_pages#code'
  get 'resume', to: 'static_pages#resume'
  get 'gallery', to:'static_pages#gallery'
  get 'personal', to: 'static_pages#personal'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
