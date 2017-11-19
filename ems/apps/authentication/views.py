from django.contrib.auth import authenticate, login, logout

from authentication.models import Account
from authentication.permissions import IsAccountOwner
from authentication.serializers import AccountSerializer, AuthTokenSerializer
from rest_framework import permissions, viewsets, status, views
from rest_framework.authtoken.models import Token
from rest_framework import parsers, renderers
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view,\
            authentication_classes, permission_classes
from rest_framework.authentication import TokenAuthentication

import json

class AccountViewSet(viewsets.ModelViewSet):
    lookup_field = 'username'
    queryset = Account.objects.all()
    serializer_class = AccountSerializer

    def get_permissions(self):
        if self.request.method in permissions.SAFE_METHODS:
            return (permissions.AllowAny(),)

        if self.request.method == 'POST':
            return (permissions.AllowAny(),)

        return (permissions.IsAuthenticated(), IsAccountOwner(),)

    def create(self, request):
        serializer = self.serializer_class(data=request.data)

        if serializer.is_valid():
            Account.objects.create_user(**serializer.validated_data)

            return Response(serializer.validated_data, status=status.HTTP_201_CREATED)

        return Response({
            'status': 'Bad request',
            'message': 'Account could not be created with received data.'
        }, status=status.HTTP_400_BAD_REQUEST)


class LoginView(views.APIView):
    """
    ## Provide Authentication token to access secured APIs\
    if given username and password are matched in database.
    """
    parser_classes = (parsers.FormParser, parsers.MultiPartParser, parsers.JSONParser,)
    renderer_classes = (renderers.JSONRenderer,)
    api_view = ['POST']

    def post(self, request, format=None):
        """
        ---
        omit_serializer: True

        parameters:
            - name: username
              type: string
              paramType: form
            - name: password
              type: string
              paramType: form
        """
        serializer = AuthTokenSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        return Response({'token': token.key})

class LogoutView(views.APIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (permissions.IsAuthenticated,)

    def post(self, request, format=None):
        Token.objects.filter(user=request.user).delete()
        return Response({}, status=status.HTTP_204_NO_CONTENT)
