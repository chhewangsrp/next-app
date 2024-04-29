import logging

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, serializers

LOGGER = logging.getLogger(__name__)


class AboutSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    bio = serializers.CharField()
    describe_me = serializers.ListField(child=serializers.CharField())


# Create your views here.
class About(APIView):

    def get(self, request):
        from .models import About

        LOGGER.info("About view accessed")
        try:

            my_objects = About.objects.first()

            # Serialize the queryset
            serializer = AboutSerializer(my_objects, many=False)
            # Return the serialized data as JSON response
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Exception as e:
            LOGGER.exception("About view accessed: %s", str(e))
            pass
