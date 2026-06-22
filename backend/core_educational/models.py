from django.conf import settings
from django.core.validators import MinValueValidator, URLValidator
from django.db import models
from django.utils.text import slugify
from django.utils.translation import gettext_lazy as _


class TimeStampedModel(models.Model):
    """Абстрактты база модель — created_at / updated_at трекинг."""

    created_at = models.DateTimeField(_("Түзүлгөн убакыт"), auto_now_add=True)
    updated_at = models.DateTimeField(_("Жаңыртылган убакыт"), auto_now=True)

    class Meta:
        abstract = True


class Subject(TimeStampedModel):
    """
    Окуу предметтери (Математика, Геометрия, Кыргыз тили ж.б.).

    Платформа 12 негизги сабакты колдойт.
    """

    name_kg = models.CharField(
        _("Аты (кыргызча)"),
        max_length=120,
    )
    name_ru = models.CharField(
        _("Аты (орусча)"),
        max_length=120,
    )
    slug = models.SlugField(
        _("Slug"),
        max_length=140,
        unique=True,
        db_index=True,
        help_text=_("URL үчүн уникалдуу идентификатор (мисалы: matematika)."),
    )
    icon_name = models.CharField(
        _("Иконка аты"),
        max_length=64,
        help_text=_("Фронтенд иконка компонентинин аты (мисалы: calculator)."),
    )
    is_active = models.BooleanField(
        _("Активдүү"),
        default=True,
        db_index=True,
    )
    sort_order = models.PositiveSmallIntegerField(
        _("Иреттөө"),
        default=0,
        help_text=_("Тизмеде көрсөтүү ирети."),
    )

    class Meta:
        verbose_name = _("Предмет")
        verbose_name_plural = _("Предметтер")
        ordering = ["sort_order", "name_kg"]
        indexes = [
            models.Index(fields=["is_active", "sort_order"]),
        ]

    def __str__(self) -> str:
        return self.name_kg

    def save(self, *args, **kwargs) -> None:
        if not self.slug:
            self.slug = slugify(self.name_kg, allow_unicode=True)
        super().save(*args, **kwargs)


def topic_pdf_upload_path(instance: "Topic", filename: str) -> str:
    subject_slug = instance.subject.slug if instance.subject_id else "unknown"
    return f"topics/{subject_slug}/{filename}"


class Topic(TimeStampedModel):
    """Предмет ичиндеги конкреттүү тема / сабак."""

    subject = models.ForeignKey(
        Subject,
        on_delete=models.CASCADE,
        related_name="topics",
        verbose_name=_("Предмет"),
    )
    title = models.CharField(
        _("Аталышы"),
        max_length=255,
    )
    content_text = models.TextField(
        _("Мазмуну"),
        help_text=_("Теманын негизги тексттик мазмуну."),
    )
    video_url = models.URLField(
        _("Видео шилтемesi"),
        blank=True,
        validators=[URLValidator()],
        help_text=_("YouTube же башка видео платформанын шилтемesi."),
    )
    pdf_file = models.FileField(
        _("PDF файл"),
        upload_to=topic_pdf_upload_path,
        blank=True,
        null=True,
        help_text=_("Кошумча окуу материалы (PDF)."),
    )
    sort_order = models.PositiveSmallIntegerField(
        _("Иреттөө"),
        default=0,
    )
    section_title = models.CharField(
        _("Бөлүм"),
        max_length=120,
        default="Негизги бөлүм",
        help_text=_("Темаларды топтоо үчүн бөлүм аталышы."),
    )
    is_published = models.BooleanField(
        _("Жарыяланган"),
        default=True,
        db_index=True,
    )

    class Meta:
        verbose_name = _("Тема")
        verbose_name_plural = _("Темалар")
        ordering = ["subject", "sort_order", "title"]
        indexes = [
            models.Index(fields=["subject", "is_published", "sort_order"]),
        ]

    def __str__(self) -> str:
        return f"{self.subject.name_kg}: {self.title}"


class Quiz(TimeStampedModel):
    """
    Тема боюнча тест суроолору.

    options форматы:
    [
        {"key": "a", "text": "Жооп варианты 1"},
        {"key": "b", "text": "Жооп варианты 2"},
        ...
    ]
    correct_answer — options ичиндеги key мааниси (мисалы: "a").
    """

    topic = models.ForeignKey(
        Topic,
        on_delete=models.CASCADE,
        related_name="quizzes",
        verbose_name=_("Тема"),
    )
    question_text = models.TextField(
        _("Суроо"),
    )
    options = models.JSONField(
        _("Жооп варианттары"),
        default=list,
        help_text=_('JSON массив: [{"key": "a", "text": "..."}, ...]'),
    )
    correct_answer = models.CharField(
        _("Туура жооп"),
        max_length=32,
        help_text=_("options ичиндеги key мааниси."),
    )
    points = models.PositiveSmallIntegerField(
        _("Упай"),
        default=1,
        validators=[MinValueValidator(1)],
    )
    sort_order = models.PositiveSmallIntegerField(
        _("Иреттөө"),
        default=0,
    )
    is_active = models.BooleanField(
        _("Активдүү"),
        default=True,
    )

    class Meta:
        verbose_name = _("Тест суроосу")
        verbose_name_plural = _("Тест суроолору")
        ordering = ["topic", "sort_order", "id"]
        indexes = [
            models.Index(fields=["topic", "is_active", "sort_order"]),
        ]

    def __str__(self) -> str:
        preview = self.question_text[:60]
        return f"{self.topic.title}: {preview}{'...' if len(self.question_text) > 60 else ''}"


class Progress(models.Model):
    """Окуучунун тема боюнча прогресси."""

    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="progress_records",
        verbose_name=_("Колдонуучу"),
    )
    topic = models.ForeignKey(
        Topic,
        on_delete=models.CASCADE,
        related_name="progress_records",
        verbose_name=_("Тема"),
    )
    is_completed = models.BooleanField(
        _("Аякталды"),
        default=False,
        db_index=True,
    )
    score = models.PositiveSmallIntegerField(
        _("Упай"),
        default=0,
        validators=[MinValueValidator(0)],
        help_text=_("Бул тема боюнча топтолгон упай."),
    )
    updated_at = models.DateTimeField(
        _("Жаңыртылган убакыт"),
        auto_now=True,
    )

    class Meta:
        verbose_name = _("Прогресс")
        verbose_name_plural = _("Прогресстер")
        ordering = ["-updated_at"]
        constraints = [
            models.UniqueConstraint(
                fields=["user", "topic"],
                name="core_educational_progress_user_topic_unique",
            ),
            models.CheckConstraint(
                check=models.Q(score__gte=0),
                name="core_educational_progress_score_non_negative",
            ),
        ]
        indexes = [
            models.Index(fields=["user", "is_completed"]),
            models.Index(fields=["topic", "is_completed"]),
            models.Index(fields=["-updated_at"]),
        ]

    def __str__(self) -> str:
        status = _("аякталды") if self.is_completed else _("уланууда")
        return f"{self.user} — {self.topic.title} ({status})"
