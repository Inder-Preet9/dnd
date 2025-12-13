from django.urls import path
from . import views
from django.contrib.auth import views as auth_views

urlpatterns=[
    path('', views.home),
    path('character/', views.character),
    path('vision/', views.vision),
    path('register/',views.register,name='register'),
    path('login/',auth_views.LoginView.as_view(template_name='logical.html'), name="login"),
    path('logout/',auth_views.LogoutView.as_view(), name='logout'),
    
    
]