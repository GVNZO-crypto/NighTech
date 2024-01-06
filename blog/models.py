
from django.db import models

class News(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField(upload_to='blog_media/')
    created_date = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.title