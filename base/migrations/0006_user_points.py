# Generated by Django 5.1.6 on 2025-04-23 20:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("base", "0005_todo_userprogress"),
    ]

    operations = [
        migrations.AddField(
            model_name="user",
            name="points",
            field=models.IntegerField(default=0),
        ),
    ]
