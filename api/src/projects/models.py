from django.db import models


# Create your models here.
class Project(models.Model):
    title = models.CharField(max_length=500)
    description = models.TextField()
    link = models.URLField()

    def __str__(self):
        return self.title
