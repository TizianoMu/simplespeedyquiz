from django.shortcuts import render, redirect
from .models import Question
import random

def home(request):
    return render(request, 'quiz/homepage.html')  # Renderizza la homepage

def quiz_home(request):
    if 'score' not in request.session:
        request.session['score'] = 0
        request.session['answered_questions'] = []

    # Recupera tutte le domande e scegli una casualmente
    questions = Question.objects.exclude(id__in=request.session['answered_questions'])

    if not questions.exists():
        return redirect('quiz_summary')

    question = random.choice(questions)
    
    return render(request, 'quiz/home.html', {
        'question': question,
        'score': request.session['score'],
    })

def submit_answer(request):
    if request.method == 'POST':
        selected_answer = request.POST.get('answer')
        question_id = request.POST.get('question_id')
        question = Question.objects.get(id=question_id)

        is_correct = selected_answer == question.correct_answer

        # Aggiorna il punteggio
        if is_correct:
            request.session['score'] += 3000

        # Aggiungi la domanda alla lista di quelle già risposte
        request.session['answered_questions'].append(question.id)

        return redirect('quiz_home')

    return redirect('homepage')

def quiz_summary(request):
    score = request.session.get('score', 0)
    total_questions = len(request.session['answered_questions'])
    max_score = len(request.session['answered_questions']) * 3000

    # Resetta il punteggio e le domande per un nuovo quiz
    request.session.flush()

    return render(request, 'quiz/summary.html', {
        'score': score,
        'total_questions': total_questions,
        'max_score': max_score,
    })


# Reset quiz
def reset_quiz(request):
    request.session['answered_questions'] = []
    request.session['score'] = 0
    return redirect('quiz_home')
