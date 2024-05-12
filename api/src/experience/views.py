import logging
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, serializers


LOGGER = logging.getLogger(__name__)


class ExperienceSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    title = serializers.CharField()
    company = serializers.CharField()
    start_date = serializers.DateField()
    end_date = serializers.DateField()
    description = serializers.ListField(child=serializers.CharField())


# Create your views here.
class Experience(APIView):

    LOGGER.info("Experience view accessed")

    def get(self, request):
        from .models import Experience

        my_objects = Experience.objects.all()

        # Serialize the queryset
        serializer = ExperienceSerializer(my_objects, many=True)

        # Return the serialized data as JSON response
        return Response(serializer.data, status=status.HTTP_200_OK)
