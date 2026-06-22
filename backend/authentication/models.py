from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth.models import AbstractUser
from django.core.validators import MinValueValidator
from django.db import models
from django.utils.translation import gettext_lazy as _


class UserRole(models.TextChoices):
    ADMIN = "ADMIN", _("Администратор")
    TEACHER = "TEACHER", _("Мугалим")
    STUDENT = "STUDENT", _("Окуучу")


def user_avatar_upload_path(instance: "User", filename: str) -> str:
    extension = filename.rsplit(".", 1)[-1].lower()
    return f"avatars/user_{instance.pk or 'new'}/{filename}"


class UserManager(BaseUserManager):
    """Email негизги идентификатор болгон колдонуучулар үчүн менеджер."""

    def create_user(self, email: str, password: str | None = None, **extra_fields) -> "User":
        if not email:
            raise ValueError("Email зарыл.")
        email = self.normalize_email(email)
        extra_fields.setdefault("is_active", True)

        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(
        self,
        email: str,
        password: str | None = None,
        **extra_fields,
    ) -> "User":
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)
        extra_fields.setdefault("is_active", True)

        if extra_fields.get("is_staff") is not True:
            raise ValueError("Superuser is_staff=True болушу керек.")
        if extra_fields.get("is_superuser") is not True:
            raise ValueError("Superuser is_superuser=True болушу керек.")

        return self.create_user(email, password, **extra_fields)


class User(AbstractUser):
    """
    BilimHub платформасынын колдонуучу модели.

    Email — негизги идентификатор, роль — системдик укуктарды аныктайт.
    """

    email = models.EmailField(
        _("Email"),
        unique=True,
        db_index=True,
        error_messages={
            "unique": _("Бул email дареги катталган."),
        },
    )
    role = models.CharField(
        _("Роль"),
        max_length=20,
        choices=UserRole.choices,
        default=UserRole.STUDENT,
        db_index=True,
    )
    points = models.PositiveIntegerField(
        _("Упайлар"),
        default=0,
        validators=[MinValueValidator(0)],
        help_text=_("Окуу процессинде топтолгон жалпы упай."),
    )
    avatar = models.ImageField(
        _("Аватар"),
        upload_to=user_avatar_upload_path,
        blank=True,
        null=True,
    )

    objects = UserManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username"]

    class Meta:
        verbose_name = _("Колдонуучу")
        verbose_name_plural = _("Колдонуучулар")
        ordering = ["-date_joined"]
        indexes = [
            models.Index(fields=["role", "is_active"]),
            models.Index(fields=["-points"]),
        ]
        constraints = [
            models.CheckConstraint(
                check=models.Q(points__gte=0),
                name="authentication_user_points_non_negative",
            ),
        ]

    def __str__(self) -> str:
        return self.get_full_name() or self.username or self.email

    @property
    def is_admin(self) -> bool:
        return self.role == UserRole.ADMIN

    @property
    def is_teacher(self) -> bool:
        return self.role == UserRole.TEACHER

    @property
    def is_student(self) -> bool:
        return self.role == UserRole.STUDENT
