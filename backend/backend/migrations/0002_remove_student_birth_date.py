# Generated by Django 2.1.7 on 2019-04-15 11:20

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='student',
            name='birth_date',
        ),
    ]