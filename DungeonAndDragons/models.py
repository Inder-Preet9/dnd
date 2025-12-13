from django.db import models

class Sweet(models.Model):
    name = models.CharField(max_length=200)
    category = models.CharField(max_length=50)
    price = models.IntegerField()
    quantity = models.IntegerField(default=0)
    image = models.ImageField(upload_to="sweets/")
    is_available = models.BooleanField(default=True)

    def __str__(self):
        return self.name
