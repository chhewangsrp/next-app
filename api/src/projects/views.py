from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, serializers

from .models import Project


class ProjectSerializer(serializers.Serializer):

    id = serializers.IntegerField(read_only=True)
    title = serializers.CharField()
    description = serializers.CharField()
    image = serializers.ImageField()
    link = serializers.CharField()


# Create your views here.
class Project(APIView):

    def get(self, request):
        my_objects = Project.objects.all()

        # Serialize the queryset
        serializer = ProjectSerializer(my_objects, many=True)

        # Return the serialized data as JSON response
        return Response(serializer.data, status=status.HTTP_200_OK)
