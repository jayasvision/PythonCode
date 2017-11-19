from employee.models import Employee
from employee.serializers import EmployeeSerializer
from rest_framework import viewsets
from rest_framework.decorators import authentication_classes, permission_classes
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated, AllowAny


class EmployeeViewSet(viewsets.ModelViewSet):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated,]
    api_view = ['GET', 'POST', 'PUT', 'DELETE']
