from django.db import models

class Question(models.Model):
    question_text = models.CharField(max_length=255,null=True)
    option_a = models.CharField(max_length=100,null=True)
    option_b = models.CharField(max_length=100,null=True)
    option_c = models.CharField(max_length=100,null=True)
    option_d = models.CharField(max_length=100,null=True)
    correct_answer = models.CharField(max_length=1, choices=[('A', 'A'), ('B', 'B'), ('C', 'C'), ('D', 'D')],null=True)

    def __str__(self):
        return self.question_text

class Table(models.Model):
    question_text = models.CharField(max_length=255,null=True)
    option_a = models.CharField(max_length=100,null=True)
    option_b = models.CharField(max_length=100,null=True)
    option_c = models.CharField(max_length=100,null=True)
    option_d = models.CharField(max_length=100,null=True)
    correct_answer = models.CharField(max_length=1, choices=[('A', 'A'), ('B', 'B'), ('C', 'C'), ('D', 'D')],null=True)
    value = models.IntegerField()  # Campo per la difficoltà

    def __str__(self):
        return self.question_text