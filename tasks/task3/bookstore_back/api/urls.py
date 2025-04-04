from django.contrib import admin
from django.urls import path
from . import views
urlpatterns = [
    path('books/',views.book_List,name="book_List"),
    path('books/<int:id>/',views.book_Deatiled,name="book_id_detail"),
     path('',views.home,name="MainPage")
]