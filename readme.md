## В проекте используются:
**Frontend**:
- сборщик пакетов webpack
- react, установленный инструментом create-react-app
- библиотека для маршрутизации react-router 
- взаимодействие с backend сервером django при помощи HTTP клиента axios  

**Backend**:
- сервер на основе фреймворка django
- библиотека django rest framework для организации api интерфейса
- инструмент для генерации документации к эндпоинтам swagger
- база данных SQLite

## Установка и запуск бекенда Django 

Клонируем репозиторий.

В директории `django_backend`  ставим виртуальное окружение:

```
python -m venv venv
```

Устанавливаем зависимости:

```
pip install -r requirements.txt
```

В консоли переходим в директорию проекта и запускаем проект: 

```
python manage.py runserver
```

API проекта будет доступно по адресам:  
- http://127.0.0.1:8000/api/openapi - страница openapi
- http://127.0.0.1:8000/api/swagger-ui/ - страница swagger-ui
- http://127.0.0.1:8000/api/v1/categories/ - список всех категорий блюд
- http://127.0.0.1:8000/api/v1/dishes/?category=1 - запрос рецептов из категории с id=1  
- http://127.0.0.1:8000/api/v1/recipe/ - список всех рецептов  
- http://127.0.0.1:8000/api/v1/recipe/id - рецепт по его id  


## Установка и запуск фронтенда React + Webpack

Клонировать репозиторий и перейти в директорию `react_frontend`

Восстановить модули: 

```
npm install
````
   
Запустить сервер DevServer: 

```
npm start  111
```
