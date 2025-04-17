from rest_framework import viewsets
from rest_framework.decorators import api_view
from django.shortcuts import get_object_or_404, render
from django.http import HttpResponse, JsonResponse
from .models import Company,Vacancy
from .serializer import CompanySerializer,VacationSerializer
def placeholder(request):
    return HttpResponse("I`m lazy to finish it")
class companyList(viewsets.ModelViewSet):
    queryset=Company.objects.all()
    serializer_class=CompanySerializer
class vacancyList(viewsets.ModelViewSet):
    queryset=Vacancy.objects.all()
    serializer_class=VacationSerializer
@api_view(['GET'])
def companyDetail(request,id):
    company=get_object_or_404(Company,id=id)
    company_data={
        'id':company.id,
        'name':company.name,
        'description':company.description,
        'city':company.city,
        'address':company.address,
    }
    return JsonResponse(company_data)
@api_view(['GET'])
def vacancyDetail(request,id):
    vacancy=get_object_or_404(Vacancy,id=id)
    vacancy_data={
        'id':vacancy.id,
        'name':vacancy.name,
        'description':vacancy.description,
        'salary':vacancy.salary,
        'company_id':vacancy.company.id,
    }
    return JsonResponse(vacancy_data,safe=False)
@api_view(['GET'])
def companyVacancies(request,id):
    company=get_object_or_404(Company,id=id)
    vacancies=company.vacancies.all().values()
    return JsonResponse(list(vacancies),safe=False)
@api_view(['GET'])
def topVacancies(request):
    vacancies=Vacancy.objects.all().order_by('-salary')[:10]
    return JsonResponse(list(vacancies.values()),safe=False)
