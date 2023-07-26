from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import LocationViewSet

router = DefaultRouter()
router.register(r'locations', LocationViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('update_location/', LocationViewSet.as_view({'post': 'update_location'}), name='update_location'),
]
