from django.urls import path
from .views import About

urlpatterns = [
    path("", About.as_view(), name="about"),
]
