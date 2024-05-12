from django.db import models

# Create your models here.


class About(models.Model):
    bio = models.TextField(default="")
    describe_me = models.JSONField(default=list)

    def __str__(self):
        return "About Me"
