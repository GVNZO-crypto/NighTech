from django.shortcuts import render

# Основной вид
def main_view(request):
    # Возвращает главную страницу
    return render(request, 'layouts\index.html')
