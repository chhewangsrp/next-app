# Generated by Django 3.2.23 on 2024-04-28 21:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('experience', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='experience',
            name='description',
            field=models.JSONField(default=list),
        ),
    ]
