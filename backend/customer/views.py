from django.shortcuts import render
from rest_framework import generics
from .models import Customers
from .serializers import CustomerSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.pagination import PageNumberPagination

# Create your views 
class CustomerCreate(generics.ListCreateAPIView):
    pagination_class = PageNumberPagination
    permission_classes = [IsAuthenticated]
    # queryset = Customers.objects.all()
    serializer_class = CustomerSerializer

    def get_queryset(self):
        user = self.request.user
        return Customers.objects.filter(user = user)
    
    def perform_create(self, serializer):
        serializer.save(user = self.request.user)

class CustomerRetriveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    # queryset = Customers.objects.all()
    serializer_class = CustomerSerializer

    def get_queryset(self):
        user = self.request.user
        return Customers.objects.filter(user = user)
    
    def perform_update(self, serializer):
        return super().perform_update(serializer)

    def perform_destroy(self, instance):
        return super().perform_destroy(instance)
        