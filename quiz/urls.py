from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='homepage'),  # Homepage
    path('quiz/', views.quiz_home, name='quiz_home'),  # Quiz page
    path('submit/', views.submit_answer, name='submit_answer'),  # Send user answer
    path('summary/', views.quiz_summary, name='quiz_summary'),  # Summary page
]
