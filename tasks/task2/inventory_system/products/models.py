from django.db import models

class Products(models.Model):
    name=models.CharField(max_length=200)
    quantity=models.IntegerField
    threshold=models.IntegerField

    def is_lowstock(self):
        if self.threshold>self.quantity:
            return True
        else:
            return False
    def get_low_stock(cls):
        return cls.objects.filter(quantity__lt=models.F('threshold'))


