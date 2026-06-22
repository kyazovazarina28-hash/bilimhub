from django.db.models import Count, Sum
from django.db.models.functions import TruncDate
from django.utils import timezone
from datetime import timedelta
from rest_framework import status, viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from ai_tutor.models import ChatMessage
from authentication.models import User, UserRole
from authentication.permissions import IsAdminUser
from core_educational.admin_serializers import (
    QuizAdminSerializer,
    SubjectAdminSerializer,
    TopicAdminSerializer,
)
from core_educational.models import Progress, Quiz, Subject, Topic


class AdminPermissionMixin:
    permission_classes = (IsAuthenticated, IsAdminUser)


class AdminAnalyticsView(AdminPermissionMixin, APIView):
    """GET /api/educational/admin/analytics/"""

    def get(self, request) -> Response:
        users_by_role = (
            User.objects.values("role")
            .annotate(count=Count("id"))
            .order_by("role")
        )

        today = timezone.now().date()
        week_start = today - timedelta(days=6)

        users_by_day = (
            User.objects.filter(date_joined__date__gte=week_start)
            .annotate(day=TruncDate("date_joined"))
            .values("day")
            .annotate(count=Count("id"))
            .order_by("day")
        )
        topics_by_day = (
            Topic.objects.filter(created_at__date__gte=week_start)
            .annotate(day=TruncDate("created_at"))
            .values("day")
            .annotate(count=Count("id"))
            .order_by("day")
        )
        progress_by_day = (
            Progress.objects.filter(updated_at__date__gte=week_start)
            .annotate(day=TruncDate("updated_at"))
            .values("day")
            .annotate(count=Count("id"))
            .order_by("day")
        )

        users_map = {item["day"]: item["count"] for item in users_by_day}
        topics_map = {item["day"]: item["count"] for item in topics_by_day}
        progress_map = {item["day"]: item["count"] for item in progress_by_day}

        weekly_activity = []
        for i in range(7):
            day = week_start + timedelta(days=i)
            weekly_activity.append(
                {
                    "date": day.strftime("%Y-%m-%d"),
                    "day_label": day.strftime("%d.%m"),
                    "new_users": users_map.get(day, 0),
                    "new_topics": topics_map.get(day, 0),
                    "progress_updates": progress_map.get(day, 0),
                },
            )

        role_chart = [
            {"role": "Окуучулар", "count": User.objects.filter(role=UserRole.STUDENT).count()},
            {"role": "Мугалимдер", "count": User.objects.filter(role=UserRole.TEACHER).count()},
            {"role": "Админдер", "count": User.objects.filter(role=UserRole.ADMIN).count()},
        ]

        return Response(
            {
                "users": {
                    "total": User.objects.count(),
                    "students": User.objects.filter(role=UserRole.STUDENT).count(),
                    "teachers": User.objects.filter(role=UserRole.TEACHER).count(),
                    "admins": User.objects.filter(role=UserRole.ADMIN).count(),
                    "by_role": list(users_by_role),
                },
                "content": {
                    "subjects": Subject.objects.filter(is_active=True).count(),
                    "topics": Topic.objects.filter(is_published=True).count(),
                    "quizzes": Quiz.objects.filter(is_active=True).count(),
                },
                "engagement": {
                    "progress_records": Progress.objects.count(),
                    "completed_topics": Progress.objects.filter(is_completed=True).count(),
                    "total_points_awarded": Progress.objects.aggregate(
                        total=Sum("score"),
                    )["total"]
                    or 0,
                    "chat_messages": ChatMessage.objects.count(),
                },
                "charts": {
                    "weekly_activity": weekly_activity,
                    "users_by_role": role_chart,
                },
                "recent_topics": TopicAdminSerializer(
                    Topic.objects.select_related("subject").order_by("-created_at")[:5],
                    many=True,
                ).data,
            },
        )


class AdminSubjectViewSet(AdminPermissionMixin, viewsets.ModelViewSet):
    """GET/POST/DELETE /api/educational/admin/subjects/"""

    serializer_class = SubjectAdminSerializer
    queryset = Subject.objects.all().order_by("sort_order", "name_kg")
    pagination_class = None
    http_method_names = ("get", "post", "delete", "head", "options")

    def create(self, request, *args, **kwargs) -> Response:
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response(
            {
                "detail": "Сабак ийгиликтүү кошулду.",
                "subject": serializer.data,
            },
            status=status.HTTP_201_CREATED,
        )

    def destroy(self, request, *args, **kwargs) -> Response:
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(
            {"detail": "Сабак ийгиликтүү өчürүлдü."},
            status=status.HTTP_200_OK,
        )


class AdminTopicViewSet(AdminPermissionMixin, viewsets.ModelViewSet):
    """GET/POST/DELETE /api/educational/admin/topics/"""

    serializer_class = TopicAdminSerializer
    queryset = Topic.objects.select_related("subject").order_by("-created_at")
    pagination_class = None
    http_method_names = ("get", "post", "delete", "head", "options")

    def create(self, request, *args, **kwargs) -> Response:
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response(
            {
                "detail": "Тема ийгиликтүү кошулду.",
                "topic": serializer.data,
            },
            status=status.HTTP_201_CREATED,
        )

    def destroy(self, request, *args, **kwargs) -> Response:
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(
            {"detail": "Тема ийгиликтүү өчürүлдü."},
            status=status.HTTP_200_OK,
        )


class AdminQuizViewSet(AdminPermissionMixin, viewsets.ModelViewSet):
    """GET/POST/DELETE /api/educational/admin/quizzes/"""

    serializer_class = QuizAdminSerializer
    queryset = Quiz.objects.select_related("topic").order_by("-created_at")
    pagination_class = None
    http_method_names = ("get", "post", "delete", "head", "options")

    def create(self, request, *args, **kwargs) -> Response:
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response(
            {
                "detail": "Тест суроосу ийгиликтүү кошулду.",
                "quiz": serializer.data,
            },
            status=status.HTTP_201_CREATED,
        )

    def destroy(self, request, *args, **kwargs) -> Response:
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(
            {"detail": "Тест суроосу ийгиликтүү өчürүлдü."},
            status=status.HTTP_200_OK,
        )
