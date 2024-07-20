# Generated by Django 5.0.7 on 2024-07-19 11:43

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.AddField(
            model_name='event',
            name='user',
            field=models.ForeignKey(default=1, limit_choices_to={'type_user': 'athlete'}, on_delete=django.db.models.deletion.CASCADE, related_name='received_event', to=settings.AUTH_USER_MODEL),
        ),
    ]
