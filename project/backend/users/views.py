from django.shortcuts import render
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view,permission_classes
from rest_framework.response import Response
from .models import Profile
from .serializers import ProfileSerializer

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def user_profile(req):
    profile=req.user.profile
    return Response({
        'id':profile.id,
        'full_name':profile.get_full_name()

    })