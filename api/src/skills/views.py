from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, serializers

from .models import Skills


class SkillsSerializer(serializers.Serializer):

    id = serializers.IntegerField()
    name = serializers.CharField()
    description = serializers.CharField()


# Create your views here.
class Skills(APIView):

    def get(self, request):
        my_objects = Skills.objects.all()

        # Serialize the queryset
        serializer = SkillsSerializer(my_objects, many=True)

        # Return the serialized data as JSON response
        return Response(serializer.data, status=status.HTTP_200_OK)
