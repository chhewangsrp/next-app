# Generated by Django 3.2.23 on 2024-05-06 21:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('about', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='about',
            name='bio',
            field=models.TextField(default=''),
        ),
    ]
