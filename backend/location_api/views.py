from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action
from .models import Location
from .serializers import LocationSerializer

class LocationViewSet(viewsets.ModelViewSet):
    queryset = Location.objects.all()
    serializer_class = LocationSerializer

    @action(detail=False, methods=['post'])
    def update_location(self, request):
        latitude = request.data.get('latitude')
        longitude = request.data.get('longitude')

        if latitude is not None and longitude is not None:
            Location.objects.create(latitude=latitude, longitude=longitude)

            return Response({'message': 'Location data received successfully.'})
        else:
            return Response({'error': 'Invalid data format.'}, status=400)
