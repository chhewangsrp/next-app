from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, serializers

from .models import Experience


class ExperienceSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    title = serializers.CharField()
    company = serializers.CharField()
    start_date = serializers.DateField()
    end_date = serializers.DateField()
    description = serializers.CharField()


# Create your views here.
class Experience(APIView):

    def get(self, request):
        my_objects = Experience.objects.all()

        # Serialize the queryset
        serializer = ExperienceSerializer(my_objects, many=True)

        # Return the serialized data as JSON response
        return Response(serializer.data, status=status.HTTP_200_OK)
