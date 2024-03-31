
from django.core import serializers
from django.shortcuts import render
from .models import Question
from django.contrib.auth.decorators import login_required

@login_required
def index(request):
    # Randomises the selected Q's for the quiz
    questions = Question.objects.order_by('?')[:4]
    questions_json = serializers.serialize('json', questions)
    return render(request, 'eduprod/index.html', {'questions_json': questions_json})
