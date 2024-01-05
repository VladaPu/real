from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=150, verbose_name='Название')

    class Meta:
        verbose_name = 'Категория'
        verbose_name_plural = 'Категории'

    def __str__(self):
        return self.name


class Dishes(models.Model):
    category = models.ForeignKey(
        Category,
        related_name='dishes',
        on_delete=models.SET_NULL,
        verbose_name='Категория',
        null=True
    )
    name = models.CharField(max_length=256, verbose_name='Наименование')
    recipe = models.TextField(verbose_name='Рецепт')

    class Meta:
        verbose_name = 'Рецепты'
        verbose_name_plural = 'Рецепты'

    def __str__(self):
        return self.name
