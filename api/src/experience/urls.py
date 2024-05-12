from django.urls import path
from . import views

urlpatterns = [
    path("", views.Experience.as_view(), name="experience_list"),
]
