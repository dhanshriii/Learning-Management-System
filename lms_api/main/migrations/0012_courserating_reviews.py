# Generated by Django 5.0.4 on 2024-04-30 02:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("main", "0011_courserating"),
    ]

    operations = [
        migrations.AddField(
            model_name="courserating",
            name="reviews",
            field=models.TextField(null=True),
        ),
    ]
