from rest_framework import serializers
from .models import Message

class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model=Message
        fields=['id', 'text', 'timestap', 'sender']

    def get_sender(self, obj):
        return {
            'id': obj.sender.id,
            'full_name': f"{obj.sender.given_name} {obj.sender.middle_name} {obj.sender.surname}"
        }