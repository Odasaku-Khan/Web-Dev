from django.db import models
from django.core import serializers
class Category(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name
class Products(models.Model):
    name=models.CharField(max_length=255)
    price=models.FloatField
    description=models.TextField()
    count=models.PositiveIntegerField()
    is_activated=models.BooleanField()
    category=models.ForeignKey(Category,on_delete=models.CASCADE)
    def __str__(self):
        return self.name
    
    def __str__(self):
        return f"{self.name} - {self.description[:50]}..."