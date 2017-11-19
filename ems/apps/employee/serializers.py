from rest_framework import serializers
from employee.models import *
from ems.serializers import DynamicModelSerializer

class EmployeeSerializer(DynamicModelSerializer):
    # profile = VersatileImageFieldSerializer(
    # )
    
    class Meta:
        model = Employee
        fields = '__all__'
        # fields = ['id', 'banner', 'name', 'venue']
