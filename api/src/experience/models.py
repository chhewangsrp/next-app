from django.db import models


# Create your models here.
class Experience(models.Model):
    title = models.CharField(max_length=100)
    company = models.CharField(max_length=100)
    location = models.CharField(max_length=100, blank=True, null=True)
    start_date = models.DateField()
    end_date = models.DateField(blank=True, null=True)
    description = models.JSONField(default=list)

    def __str__(self):
        return self.title
