from .models import Customers
from rest_framework import serializers

class CustomerSerializer(serializers.ModelSerializer):
    created_at = serializers.DateTimeField(format="%Y-%m-%dT%H:%M:%S.%f%z", read_only=True)
    updated_at = serializers.DateTimeField(format="%Y-%m-%dT%H:%M:%S.%f%z", read_only=True)
    class Meta:
        model = Customers
        fields = [
            'id',
            'first_name',
            'last_name',
            'email',
            'phone_number',
            'address_line_1',
            'address_line_2',
            'city',
            'state',
            'postal_code',
            'date_of_birth',
            'created_at',
            'updated_at', 
        ]
        read_only_fields = ['user']