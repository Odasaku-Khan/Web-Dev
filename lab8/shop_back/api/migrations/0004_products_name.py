# Generated by Django 5.2 on 2025-04-03 11:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_products_category_products_count_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='products',
            name='name',
            field=models.CharField(default='exit', max_length=255),
            preserve_default=False,
        ),
    ]
