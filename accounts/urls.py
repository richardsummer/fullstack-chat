from . import views
from django.urls import path, include

urlpatterns = [
    path('rest-auth/registration/', include('rest_auth.registration.urls')),
    path('rest-auth/login/', views.CustomAuthToken.as_view(), name='login'),
    path('rest-auth/', include('rest_auth.urls')),
]
