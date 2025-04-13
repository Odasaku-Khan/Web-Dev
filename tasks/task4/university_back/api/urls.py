from . import views
from django.urls import path
urlpatterns=[
    path('universities/',views.universities,name='universities'),
    path('universitiesDetail/<int:id>',views.universitiesDetail,name='universitiesDetail'),
    path('internships/',views.internships,name='internships'),
    path('',views.home,name='empty'),
    path('universityInternships/',views.universityInternships,name='universityInternships'),
    path('topInternships',views.topInternships,name='topInternships')

]