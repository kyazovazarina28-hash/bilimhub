from rest_framework.permissions import BasePermission

from authentication.models import UserRole


class _RolePermission(BasePermission):
    """Ролго негизделген укуктун база классы."""

    allowed_role: str | None = None
    message = "Бул аракет үчүн укугуңуз жок."

    def has_permission(self, request, view) -> bool:
        user = request.user
        return bool(
            user
            and user.is_authenticated
            and user.is_active
            and self.allowed_role is not None
            and user.role == self.allowed_role
        )


class IsAdminUser(_RolePermission):
    """ADMIN ролуна ээ колдонуучулар гана."""

    allowed_role = UserRole.ADMIN
    message = "Бул аракет үчүн администратор укугу талап кылынат."


class IsTeacherUser(_RolePermission):
    """TEACHER ролуна ээ колдонуучулар гана."""

    allowed_role = UserRole.TEACHER
    message = "Бул аракет үчүн мугалим укугу талап кылынат."


class IsStudentUser(_RolePermission):
    """STUDENT ролуна ээ колдонуучулар гана."""

    allowed_role = UserRole.STUDENT
    message = "Бул аракет үчүн окуучу укугу талап кылынат."
