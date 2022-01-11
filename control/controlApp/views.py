from django.core.mail import EmailMessage
from django.shortcuts import render, redirect
from django.urls import reverse
from django.views import View
from django.views.generic import ListView

class Index(View):
    def get(self, request):
        return render(request, 'index.html')


class example(View):
    def get(self, request):
        return render(request, 'examples.html')

class drawingtest(View):
    def get(self, request):
        return render(request, 'drawingtest.html')

class output(View):
    def get(self, request):
        return render(request, 'output.html')