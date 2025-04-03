from django.urls import path
from . import views

urlpatterns = [
    path('products/', views.products_List, name='product_List'),
    path('products/<int:id>/', views.product_Detail, name='product_detail'),
    path('categories/', views.category_list, name='category_list'),
    path('categories/<int:id>/', views.category_detail, name='category_detail'),
    path('categories/<int:id>/products/', views.category_products, name='category_products'),
    path('',views.home,name="MainPage")
]
