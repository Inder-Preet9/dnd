from django.shortcuts import render
from django.http import HttpResponse
from django.shortcuts import redirect
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import login


def register(reqeust):
    if request.method=="POST":
        form = UserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect("home")
    else:
        form = UserCreationForm()
    return render(request, "register.html", {"form": form})
def home(request):
    return render(request, 'DungeonAndDragons/dashboard.html')

def character(request):
    return render(request, 'DungeonAndDragons/character.html')

def vision(request):
    return render (request, 'DungeonAndDragons/vision.html')

# Create your views here.