from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.viewsets import ReadOnlyModelViewSet

from dishes.models import Dishes, Category
from .serializers import (
    CategoriesSerializer,
    DishesSerializer,
    RecipeSerializer
)


class RecipeViewSet(ReadOnlyModelViewSet):
    queryset = Dishes.objects.all()
    serializer_class = RecipeSerializer


class CategoriesViewSet(ReadOnlyModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategoriesSerializer


class DishesViewSet(ReadOnlyModelViewSet):
    queryset = Dishes.objects.all()
    serializer_class = DishesSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['category']
