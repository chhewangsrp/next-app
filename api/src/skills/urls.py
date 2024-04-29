from django.urls import path
from . import views

urlpatterns = [
    path("", views.Skills.as_view(), name="skill_list"),
]
