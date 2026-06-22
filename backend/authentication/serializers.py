from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import ValidationError as DjangoValidationError
from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

from authentication.models import User, UserRole

REGISTER_ROLE_CHOICES = [UserRole.STUDENT, UserRole.TEACHER]


class UserRegisterSerializer(serializers.ModelSerializer):
    """Катталуу — User.objects.create_user() аркылуу пароль туура хэштелет."""

    password = serializers.CharField(
        write_only=True,
        min_length=8,
        style={"input_type": "password"},
        error_messages={
            "min_length": "Пароль эң аз 8 символдон турушу керек.",
            "required": "Пароль толтурулması зарыл.",
            "blank": "Пароль бош болбошу керек.",
        },
    )
    password_confirm = serializers.CharField(
        write_only=True,
        style={"input_type": "password"},
        error_messages={
            "required": "Парольду ырастаңыз.",
            "blank": "Парольду ырастаңыз.",
        },
    )
    role = serializers.ChoiceField(
        choices=REGISTER_ROLE_CHOICES,
        default=UserRole.STUDENT,
        error_messages={
            "invalid_choice": "Роль STUDENT же TEACHER болушu керек.",
        },
    )

    class Meta:
        model = User
        fields = (
            "id",
            "email",
            "username",
            "password",
            "password_confirm",
            "role",
            "first_name",
            "last_name",
        )
        read_only_fields = ("id",)
        extra_kwargs = {
            "email": {
                "error_messages": {
                    "required": "Email дареги толтурулması зарыл.",
                    "invalid": "Жарактуу email дарегин киргизиңиз.",
                },
            },
            "username": {
                "error_messages": {
                    "required": "Колдонуучу аты толтурулması зарыл.",
                    "unique": "Бул колдонуучу аты ээлеген.",
                },
            },
        }

    def validate_email(self, value: str) -> str:
        normalized = value.strip().lower()
        if User.objects.filter(email__iexact=normalized).exists():
            raise serializers.ValidationError("Мындай email буга чейин катталган.")
        return normalized

    def validate_username(self, value: str) -> str:
        normalized = value.strip()
        if User.objects.filter(username__iexact=normalized).exists():
            raise serializers.ValidationError("Бул колдонуучу аты ээлеген.")
        return normalized

    def validate_password(self, value: str) -> str:
        try:
            validate_password(value)
        except DjangoValidationError as exc:
            raise serializers.ValidationError(list(exc.messages)) from exc
        return value

    def validate_role(self, value: str) -> str:
        if value not in REGISTER_ROLE_CHOICES:
            raise serializers.ValidationError(
                "Катталуу үчүн Окуучу же Мугалим ролун тандаңыз.",
            )
        return value

    def validate(self, attrs: dict) -> dict:
        if attrs["password"] != attrs["password_confirm"]:
            raise serializers.ValidationError(
                {"password_confirm": "Парольдер дал келбейт."},
            )
        return attrs

    def create(self, validated_data: dict) -> User:
        validated_data.pop("password_confirm")
        password = validated_data.pop("password")

        return User.objects.create_user(
            email=validated_data["email"],
            password=password,
            username=validated_data["username"],
            first_name=validated_data.get("first_name", ""),
            last_name=validated_data.get("last_name", ""),
            role=validated_data.get("role", UserRole.STUDENT),
            is_active=True,
        )


class UserDetailSerializer(serializers.ModelSerializer):
    """Колдонуучунун профилин көрсөтүү жана жаңыртуу."""

    full_name = serializers.SerializerMethodField()
    avatar_url = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = (
            "id",
            "email",
            "username",
            "first_name",
            "last_name",
            "full_name",
            "role",
            "points",
            "avatar",
            "avatar_url",
            "date_joined",
            "last_login",
        )
        read_only_fields = (
            "id",
            "email",
            "role",
            "points",
            "date_joined",
            "last_login",
        )

    def get_full_name(self, obj: User) -> str:
        return obj.get_full_name()

    def get_avatar_url(self, obj: User) -> str | None:
        if not obj.avatar:
            return None
        request = self.context.get("request")
        if request is None:
            return obj.avatar.url
        return request.build_absolute_uri(obj.avatar.url)


class UserAuthSerializer(serializers.ModelSerializer):
    """JWT жообунда кайтарылуучу колдонуучу маалыматы."""

    class Meta:
        model = User
        fields = ("id", "username", "email", "role", "points")


class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    """
    JWT токен алуу — email + password.

    Жооп: access, refresh, user { id, username, email, role, points }
    """

    username_field = User.EMAIL_FIELD

    def validate(self, attrs: dict) -> dict:
        email = attrs.get(self.username_field, "").strip().lower()
        attrs[self.username_field] = email

        try:
            data = super().validate(attrs)
        except serializers.ValidationError as exc:
            raise serializers.ValidationError(
                {"detail": "Email же пароль ката."},
            ) from exc

        user_data = UserAuthSerializer(self.user).data
        data["user"] = user_data
        data["id"] = user_data["id"]
        data["username"] = user_data["username"]
        data["email"] = user_data["email"]
        data["role"] = user_data["role"]
        data["points"] = user_data["points"]
        return data

    @classmethod
    def get_token(cls, user: User):
        token = super().get_token(user)
        token["email"] = user.email
        token["username"] = user.username
        token["role"] = user.role
        token["user_id"] = user.id
        token["points"] = user.points
        return token
