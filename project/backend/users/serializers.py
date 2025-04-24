from rest_framework import serializers
from .models import Profile

class ProfileSerializer(serializers.Serializer):
    id=serializers.IntegerField()
    given_name=serializers.CharField()
    middle_name=serializers.CharField()
    surname=serializers.CharField()
    status=serializers.CharField()
    photo=serializers.ImageField()
    full_name=serializers.CharField()
    def full_name(self,obj):
        return f"{obj.given_name}{obj.middle_name} {obj.surname}"