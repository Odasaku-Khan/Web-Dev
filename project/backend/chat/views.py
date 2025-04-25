from rest_framework import viewsets, permissions, status
from rest_framework.response import Response
from rest_framework.decorators import action
from django.shortcuts import get_object_or_404
from django.db.models import Q
from .models import Message
from .serializer import MessageSerializer
from users.models import Profile

class MessageViewSet(viewsets.ModelViewSet):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        profile = get_object_or_404(Profile, user=self.request.user)
        serializer.save(sender=profile)

    @action(detail=False, methods=['get'], url_path='conversations')
    def conversations(self, request):
        me = get_object_or_404(Profile, user=request.user)
        sent_profiles = Message.objects.filter(sender=me).values_list('receiver', flat=True)
        received_profiles = Message.objects.filter(receiver=me).values_list('sender', flat=True)
        user_ids = set(list(sent_profiles) + list(received_profiles))
        user_ids.discard(me.id)
        profiles = Profile.objects.filter(id__in=user_ids)
        data = [{"id": p.id, "full_name": p.get_full_name()} for p in profiles]
        return Response(data)

    @action(detail=True, methods=['get'], url_path='conversation')
    def conversation(self, request, pk=None):
        me = get_object_or_404(Profile, user=request.user)
        other = get_object_or_404(Profile, id=pk)
        messages = Message.objects.filter(
            Q(sender=me, receiver=other) | Q(sender=other, receiver=me)
        ).order_by('timestap')
        serializer = self.get_serializer(messages, many=True)
        return Response(serializer.data)

    @action(detail=False, methods=['post'], url_path='send')
    def send_message(self, request):
        sender = get_object_or_404(Profile, user=request.user)
        receiver_id = request.data.get('receiverId') or request.data.get('receiver_id')
        text = request.data.get('text')
        if not receiver_id or not text:
            return Response({"error": "receiverId and text are required"}, status=status.HTTP_400_BAD_REQUEST)
        receiver = get_object_or_404(Profile, id=receiver_id)
        message = Message.objects.create(sender=sender, receiver=receiver, text=text)
        serializer = self.get_serializer(message)
        return Response(serializer.data)