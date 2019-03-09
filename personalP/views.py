from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def home(request):
    return render(request,'personalP/home.htm')

def work(request):
    return render(request,'personalP/work.htm', {'work':'Work'})

def about(request):
    return render(request,'personalP/about.htm',{'about':'About'})

def resume(request):
    return render(request,'personalP/resume.htm',{'resume':'Resume'})