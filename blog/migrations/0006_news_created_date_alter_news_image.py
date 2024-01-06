# Generated by Django 5.0.1 on 2024-01-05 08:35

import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0005_delete_comment_delete_tag_remove_news_author_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='news',
            name='created_date',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='news',
            name='image',
            field=models.ImageField(upload_to='blog_media/'),
        ),
    ]