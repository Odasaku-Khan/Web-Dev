from django.urls import path
from . import views

urlpatterns=[
    path('companyList/',views.companyList,name='companyList'),
    path('companyDetail/<int:id>/',views.companyDetail,name='companyDetail'),
    path('vacancyList/',views.vacancyList,name='vacancyList'),
    path('vacancyDetail/<int:id>/',views.vacancyDetail,name='vacancyDetail'),
    path('companyVacancies/<int:id>/vacancies',views.companyVacancies,name='companyVacancies'),
    path('vacancyList/topVacancies/',views.topVacancies,name='topVacancies'),
    path('',views.placeholder,name='Greeting'),
]