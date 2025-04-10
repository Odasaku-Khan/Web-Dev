from django.shortcuts import get_object_or_404, render
from django.http import HttpResponse, JsonResponse
from .models import Company,Vacancy
def placeholder(request):
    return HttpResponse("I`m lazy to finish it")
def companyList(request):
    company=Company.objects.all()
    company_data=list(company.values())
    return JsonResponse(company_data,safe=False)
def vacancyList(request):
    vacancy=Vacancy.objects.all()
    vacancy_data=list(vacancy.values())
    return JsonResponse(vacancy_data,safe=False)

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
def companyVacancies(request,id):
    company=get_object_or_404(Company,id=id)
    vacancies=company.vacancies.all().values()
    return JsonResponse(list(vacancies),safe=False)
def topVacancies(request):

    vacancies=Vacancy.objects.all().order_by('-salary')[:10]
    return JsonResponse(list(vacancies.values()),safe=False)
