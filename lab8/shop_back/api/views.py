from django.shortcuts import get_object_or_404, render
from django.http import HttpResponse, JsonResponse
from .models import Products,Category

def products_List(request):
    product=Products.objects.all()
    product_data=list(product.values())
    return JsonResponse(product_data,safe=False)
def product_Detail(request,id):
    product=get_object_or_404(Products,id=id)
    product_data={
        "id": product.id,
        "name": product.name,
        "price": product.price,
        "description": product.description,
        "count": product.count,
        "is_active": product.is_active
    }
    return JsonResponse(product_data)

def category_list(request):
    categories = Category.objects.all()
    category_data = [{"id": category.id, "name": category.name} for category in categories]
    return JsonResponse(category_data, safe=False)

# Retrieve one category
def category_detail(request, id):
    category = get_object_or_404(Category, id=id)
    category_data = {"id": category.id, "name": category.name}
    return JsonResponse(category_data)

# List products by category
def category_products(request, id):
    category = get_object_or_404(Category, id=id)
    products = Products.objects.filter(category=category)
    product_data = [{"id": product.id, "name": product.name, "price": product.price} for product in products]
    return JsonResponse(product_data, safe=False)
def home(request):
    return HttpResponse("Welcome to the online store!")