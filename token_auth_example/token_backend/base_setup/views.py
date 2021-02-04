from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from rest_framework import permissions
from base_setup.serializers import UserSerializer, GroupSerializer, UserJsonSerializer
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token
from rest_framework import status
from rest_framework.response import Response
from django.http import Http404
from rest_framework.authentication import BasicAuthentication, TokenAuthentication


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]


class GroupViewSet(viewsets.ModelViewSet):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticated]


class LoginView(APIView):

    def post(self, request):

        try:
            user = User.objects.get(username=request.data["username"])
        except User.DoesNotExist:
            raise Http404

        data = Token.objects.get_or_create(user=user)
        return Response({"token": data[0].key}, status=status.HTTP_200_OK)


class SampleView(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        user = User.objects.get(username=request.data["username"])
        data = UserJsonSerializer(user)
        return Response(data.data)

