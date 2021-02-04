from django.urls import path
from base_setup import views

urlpatterns = [
    path('login/', views.LoginView.as_view()),
    path('get_user/', views.SampleView.as_view()),
]
