from django.db import IntegrityError
from rest_framework import generics, status
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView

from authentication.models import User
from authentication.serializers import (
    CustomTokenObtainPairSerializer,
    UserAuthSerializer,
    UserDetailSerializer,
    UserRegisterSerializer,
)


class RegisterView(generics.CreateAPIView):
    """
    POST /api/auth/register/

    Жаңы колдонуучуну каттоо (STUDENT же TEACHER).
    """

    queryset = User.objects.all()
    serializer_class = UserRegisterSerializer
    permission_classes = (AllowAny,)

    def create(self, request, *args, **kwargs) -> Response:
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        try:
            user = serializer.save()
        except IntegrityError:
            return Response(
                {
                    "detail": "Каттоо ийгиликсиз болду.",
                    "errors": {
                        "email": ["Мындай email буга чейин катталган."],
                    },
                },
                status=status.HTTP_409_CONFLICT,
            )

        return Response(
            {
                "detail": "Каттоо ийгиликтүү аякталды.",
                "user": UserAuthSerializer(user).data,
            },
            status=status.HTTP_201_CREATED,
        )


class CustomTokenObtainPairView(TokenObtainPairView):
    """
    POST /api/auth/token/

    Email жана пароль менен JWT access/refresh токендерин алуу.
    """

    serializer_class = CustomTokenObtainPairSerializer


class ProfileView(generics.RetrieveUpdateAPIView):
    """
    GET  /api/auth/profile/ — профиль маалыматтарын алуу
    PATCH /api/auth/profile/ — first_name, last_name, avatar жаңыртуу
    """

    serializer_class = UserDetailSerializer
    permission_classes = (IsAuthenticated,)

    def get_object(self) -> User:
        return self.request.user

    def update(self, request, *args, **kwargs) -> Response:
        partial = kwargs.pop("partial", False)
        instance = self.get_object()
        serializer = self.get_serializer(
            instance,
            data=request.data,
            partial=partial or request.method == "PATCH",
        )
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)
        return Response(
            {
                "detail": "Профиль ийгиликтүү жаңыртылды.",
                "user": serializer.data,
            },
        )
