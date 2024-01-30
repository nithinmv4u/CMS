from django.urls import path
from .views import CustomerCreate, CustomerRetriveUpdateDestroy

urlpatterns = [
    path('customers/', CustomerCreate.as_view(), name='customer-list-create'),
    path('customers/<int:pk>', CustomerRetriveUpdateDestroy.as_view(), name='customer-retrieve-update-destroy'),
]
