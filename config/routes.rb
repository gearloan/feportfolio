Rails.application.routes.draw do

  root 'static_pages#index'

  get 'static_pages/index'
  get 'static_pages/code'
  get 'static_pages/resume'
  get 'static_pages/gallery'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
