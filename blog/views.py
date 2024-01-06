from django.shortcuts import render, redirect
from .models import News
from .forms import NewsForm

def blog_news_view(request):
    if request.method == 'POST':
        news_form = NewsForm(request.POST, request.FILES)
        if news_form.is_valid():
            news_form.save()
            return redirect('blog_news_view')  # Redirect to the same view after successful form submission

    blog_news = News.objects.all()
    return render(request, 'layouts/blog/blog.html', {'blog_news': blog_news, 'news_form': NewsForm()})
