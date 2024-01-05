from rest_framework import serializers

from dishes.models import Dishes, Category


class CategoriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'name',)


class DishesSerializer(serializers.ModelSerializer):
    category = serializers.SlugRelatedField(slug_field='name', read_only=True)

    class Meta:
        model = Dishes
        fields = ('id', 'name', 'category')


class RecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dishes
        fields = ('id', 'name', 'recipe')
