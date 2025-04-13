from django.db import models
class University(models.Model):
    name=models.CharField(max_length=255)
    descriprion=models.TextField(blank=True)
    city=models.CharField()
    address=models.TextField()
    def __str__(self):
        return self.name
class Internship(models.Model):
    title=models.CharField(max_length=255)
    descriprion=models.TextField(max_length=255)
    stipend=models.FloatField()
    university=models.ForeignKey(University,on_delete=models.CASCADE,related_name='Unic')
    

