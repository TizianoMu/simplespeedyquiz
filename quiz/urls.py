from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='homepage'),  # Homepage
    path('quiz/', views.quiz_home, name='quiz_home'),  # Pagina del quiz
    path('submit/', views.submit_answer, name='submit_answer'),  # Invia la risposta dell'utente
    path('summary/', views.quiz_summary, name='quiz_summary'),  # Pagina di riepilogo
    path('reset/', views.reset_quiz, name='reset_quiz'),  # Pagina di riepilogo
]
