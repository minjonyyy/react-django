from django.urls import path
from .views import KakaoCallback,UserCreate
from rest_framework_simplejwt.views import TokenRefreshView,TokenVerifyView
## Swagger
from rest_framework import routers
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

schema_view = get_schema_view(
    openapi.Info(
        title="Login Module",
        default_version="v1",
        description="Login",
        # terms_of_service="https://www.google.com/policies/terms/",
        # contact=openapi.Contact(name="test", email="test@test.com"),
        # license=openapi.License(name="Test License"),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
    path('oauth/', KakaoCallback.as_view(), name = 'kakaoCallback'),
    path('signup/', UserCreate.as_view()),
    path('jwt-token-auth/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('jwt-token-auth/verify/', TokenVerifyView.as_view(), name='token_verify'),
    ## Swagger
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
    path('swagger.json/', schema_view.without_ui(cache_timeout=0), name='schema-json'),
]