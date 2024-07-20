# Generated by Django 5.0.7 on 2024-07-19 21:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0002_event_user'),
    ]

    operations = [
        migrations.AddField(
            model_name='event',
            name='amount_actual',
            field=models.DecimalField(decimal_places=2, default=1, max_digits=10),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='event',
            name='amount_total',
            field=models.DecimalField(decimal_places=2, default=0.0, max_digits=10),
            preserve_default=False,
        ),
    ]
