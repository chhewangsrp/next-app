from django.db import models

# Create your models here.


class About(models.Model):
    bio = models.CharField(max_length=500)
    profile_picture = models.ImageField(upload_to="about")

    def __str__(self):
        return "About Me"
