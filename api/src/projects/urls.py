from django.urls import path
from . import views

urlpatterns = [
    path("", views.Project.as_view(), name="project_list"),
]
