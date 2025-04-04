from django.db import models
from django.core import serializers
class Book(models.Model):
    title=models.CharField(max_length=255)
    author=models.CharField(max_length=255)
    price=models.DecimalField(max_digits=6, decimal_places=2)
    stock=models.IntegerField()
    is_avialable=models.BooleanField()
    # def __str__(self):
    #     return self.name

# data = serializers.serialize("json", Book.objects.all())