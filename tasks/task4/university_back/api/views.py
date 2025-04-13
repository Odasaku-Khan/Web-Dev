from django.shortcuts import render,get_object_or_404
from .models import University,Internship
from django.http import JsonResponse,HttpResponse
def home(request):
    return HttpResponse('Im lazy')

def universities(request):
    universite=University.objects.all()
    universityList=list(universite.values())
    return JsonResponse(universityList,safe=False)

def universitiesDetail(request,id):
    universities=get_object_or_404(University,id=id)
    universities_data={
        'id':universities.id,
        'name':universities.name,
        'descriprion':universities.descriprion,
        'city':universities.city,
        'address':universities.address,
    }
    return JsonResponse(universities_data,safe=False)

def internships(request):
    internship=Internship.objects.all()
    internshipList=list(internship.values())
    return JsonResponse(internshipList,safe=False)

def universityInternships(request,id):
    univer=get_object_or_404(University,id=id)
    internship=univer.Unic.all().values()
    return JsonResponse(list(internship),safe=False)

def topInternships(request):
    vacancy=Internship.objects.all().order_by('stipend')[:10]
    return JsonResponse(vacancy)

