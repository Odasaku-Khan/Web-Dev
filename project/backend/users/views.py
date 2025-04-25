from django.shortcuts import render
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view,permission_classes
from rest_framework.response import Response
from .models import Profile
from .serializers import ProfileSerializer
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def user_profile(req):
    profile = req.user.profile
    serializer = ProfileSerializer(profile, context={'request': req})
    return Response(serializer.data)