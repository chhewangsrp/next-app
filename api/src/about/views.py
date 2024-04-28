from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, serializers

from .models import About


class AboutSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    bio = serializers.CharField()
    profile_picture = serializers.ImageField()


# Create your views here.
class About(APIView):

    def get(self, request):
        my_objects = About.objects.all()

        # Serialize the queryset
        serializer = AboutSerializer(my_objects, many=True)

        # Return the serialized data as JSON response
        return Response(serializer.data, status=status.HTTP_200_OK)
