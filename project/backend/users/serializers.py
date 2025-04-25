from rest_framework import serializers
from .models import Profile

class ProfileSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    given_name = serializers.CharField()
    middle_name = serializers.CharField()
    surname = serializers.CharField()
    status = serializers.CharField()
    photo = serializers.SerializerMethodField()
    phone_number = serializers.CharField()
    birthday = serializers.DateField(format="%Y-%m-%d")
    email = serializers.SerializerMethodField()
    full_name = serializers.SerializerMethodField()
    status_display = serializers.SerializerMethodField()

    def get_full_name(self, obj):
        return f"{obj.given_name} {obj.middle_name} {obj.surname}"

    def get_email(self, obj):
        return obj.user.email

    def get_status_display(self, obj):
        return obj.get_status_display()
    
    def get_photo(self, obj):
        if obj.photo:
            request = self.context.get('request')
            return request.build_absolute_uri(obj.photo.url) if request else obj.photo.url
    # fallback to default static image
        request = self.context.get('request')
        return request.build_absolute_uri('/static/img/default-avatar.png')