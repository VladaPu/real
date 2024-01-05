from django.views.generic import TemplateView
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework.schemas import get_schema_view

from .views import CategoriesViewSet, DishesViewSet, RecipeViewSet

router_v1 = DefaultRouter()
router_v1.register('categories', CategoriesViewSet)
router_v1.register('dishes', DishesViewSet)
router_v1.register('recipe', RecipeViewSet)

urlpatterns = [
    path('v1/', include(router_v1.urls)),
    path(
        'openapi',
        get_schema_view(
            title="Restaurant API",
            description="Backend API Documentation",
            version="1.0"
        ),
        name='openapi-schema'
    ),
    path(
        'swagger-ui/',
        TemplateView.as_view(
            template_name='swagger-ui.html',
            extra_context={'schema_url': 'openapi-schema'}
        )
    ),
]
