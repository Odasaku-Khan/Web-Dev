# Generated by Django 5.2 on 2025-04-07 10:42

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('surname', models.CharField(max_length=255)),
                ('middle_name', models.CharField(max_length=255)),
                ('given_name', models.CharField(max_length=255)),
                ('birthday', models.DateField(blank=True)),
                ('photo', models.ImageField(blank=True, upload_to='img')),
                ('status', models.CharField(choices=[('AS', 'Activly Searching workspace, currently unemployed'), ('S', 'Not activly searching job,currently employed'), ('NR', 'Ready to look for job offer,not searching job,currently employed'), ('NI', 'employed,notsearching for job,not interested in job offers')], max_length=2)),
            ],
        ),
    ]
