from django.conf import settings
from django.db import models
from django.utils.translation import gettext_lazy as _


class ChatMessage(models.Model):
    """AI мугалим менен сүйлөшүү таржымалы."""

    class Role(models.TextChoices):
        USER = "user", _("Колдонуучу")
        ASSISTANT = "assistant", _("AI мугалим")

    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="chat_messages",
        verbose_name=_("Колдонуучу"),
    )
    role = models.CharField(
        _("Роль"),
        max_length=16,
        choices=Role.choices,
    )
    content = models.TextField(_("Мазмуну"))
    created_at = models.DateTimeField(_("Убакыт"), auto_now_add=True, db_index=True)

    class Meta:
        verbose_name = _("Чат билдирүүсү")
        verbose_name_plural = _("Чат билдирүүлөрү")
        ordering = ["created_at"]
        indexes = [
            models.Index(fields=["user", "-created_at"]),
        ]

    def __str__(self) -> str:
        preview = self.content[:50]
        return f"{self.user} — {self.role}: {preview}"
