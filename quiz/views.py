from django.shortcuts import render, redirect
from .models import Question
import random

def home(request):
    if 'score' in request.session:
        request.session['score'] = 0
    if 'answered_questions' in request.session:
        request.session['answered_questions'] = []
    if 'number_of_answered_questions' in request.session:
        request.session['number_of_answered_questions'] = 0
    return render(request, 'quiz/homepage.html')  # Homepage rendering

def quiz_home(request):
    if 'score' not in request.session:
        request.session['score'] = 0
        request.session['answered_questions'] = []
        request.session['number_of_answered_questions'] = 0

    # Retrieves all questions and chooses one randomly
    questions = Question.objects.exclude(id__in=request.session['answered_questions'])
    if not questions.exists() or request.session['number_of_answered_questions'] >= 5:
        return redirect('quiz_summary')

    question = random.choice(questions)
    
    return render(request, 'quiz/quiz.html', {
        'question': question,
        'score': request.session['score'],
    })

def submit_answer(request):
    if request.method == 'POST':
        selected_answer = request.POST.get('answer')
        question_id = request.POST.get('question_id')
        question = Question.objects.get(id=question_id)

        is_correct = selected_answer == question.correct_answer

        # Update the score
        if is_correct:
            request.session['score'] += 3000
        request.session['number_of_answered_questions'] += 1
        # Add question to excluded questions
        request.session['answered_questions'].append(question.id)

        return redirect('quiz_home')

    return redirect('homepage')

def quiz_summary(request):
    score = request.session.get('score', 0)
    total_questions = len(request.session['answered_questions'])
    max_score = len(request.session['answered_questions']) * 3000

    # Reset the score
    return render(request, 'quiz/summary.html', {
        'score': score,
        'total_questions': total_questions,
        'max_score': max_score,
    })