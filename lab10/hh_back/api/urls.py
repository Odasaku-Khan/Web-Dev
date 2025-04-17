from django.urls import path,include
from rest_framework.routers import DefaultRouter

from . import views

router=DefaultRouter()
router.register(r'companyList',views.companyList)
router.register(r'vacancyList',views.vacancyList)

urlpatterns=[
    path('companyDetail/<int:id>/',views.companyDetail,name='companyDetail'),
    path('vacancyDetail/<int:id>/',views.vacancyDetail,name='vacancyDetail'),
    path('companyVacancies/<int:id>/vacancies',views.companyVacancies,name='companyVacancies'),
    path('vacancyList/topVacancies/',views.topVacancies,name='topVacancies'),
]+router.urls