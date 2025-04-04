from django.shortcuts import get_object_or_404, render
from django.http import HttpResponse, JsonResponse
from .models import Book

def book_List(request):
    book=Book.objects.all()
    book_data=list(book.values())
    return JsonResponse(book_data,safe=False)
def book_Deatiled(request,id):
    book=get_object_or_404(Book,id==id)
    book_data={
        'id':book.id,
        'title':book.title,
        'author':book.author,
        'price':book.price,
        'stock':book.stock,
        'is_available':book.is_avialable,
    }
    return JsonResponse(book_data)
def home(request):
    return HttpResponse("Welcome to the online store!")