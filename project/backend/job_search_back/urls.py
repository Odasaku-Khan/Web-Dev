"""
URL configuration for job_search_back project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path,include
from django.views.generic import RedirectView
from ai.views import greeting
from rest_framework_simplejwt.views import TokenObtainPairView,TokenRefreshView
urlpatterns = [
    path('token/',TokenObtainPairView.as_view(),name='token_obtain_pair'),
    path('token/refresh/',TokenRefreshView.as_view(),name='token_refresh'),
    path('admin/', admin.site.urls),
    path('skills/', include('skills.urls')),
    path('ai/', include('ai.urls')),
    path('',greeting,name='greeting'),
    path('chat/',include('chat.urls')),
    path('users/',include('users.urls'))

]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)