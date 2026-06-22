from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from core_educational.models import Progress, Subject, Topic
from core_educational.serializers import (
    SubjectDetailSerializer,
    SubjectListSerializer,
    SubmitProgressSerializer,
    TopicDetailSerializer,
)
from authentication.permissions import IsStudentUser
from core_educational.dashboard import build_dashboard_data


def _build_progress_map(user, topics) -> dict[int, Progress]:
    if not user.is_authenticated:
        return {}
    topic_ids = [t.id for t in topics]
    records = Progress.objects.filter(user=user, topic_id__in=topic_ids)
    return {record.topic_id: record for record in records}


class SubjectListView(APIView):
    """
    GET /api/educational/subjects/
    """

    permission_classes = (AllowAny,)

    def get(self, request) -> Response:
        subjects = Subject.objects.filter(is_active=True).order_by("sort_order", "name_kg")
        serializer = SubjectListSerializer(subjects, many=True)
        return Response(serializer.data)


class SubjectDetailView(APIView):
    """
    GET /api/educational/subjects/<slug>/
    """

    permission_classes = (AllowAny,)

    def get(self, request, slug: str) -> Response:
        subject = get_object_or_404(Subject, slug=slug, is_active=True)
        topics = list(
            subject.topics.filter(is_published=True).prefetch_related("quizzes"),
        )
        progress_map = _build_progress_map(request.user, topics)

        serializer = SubjectDetailSerializer(
            subject,
            context={"request": request, "progress_map": progress_map},
        )
        return Response(serializer.data)


class TopicDetailView(APIView):
    """
    GET /api/educational/topics/<int:pk>/
    """

    permission_classes = (AllowAny,)

    def get(self, request, pk: int) -> Response:
        topic = get_object_or_404(
            Topic.objects.select_related("subject").prefetch_related("quizzes"),
            pk=pk,
            is_published=True,
        )
        progress_map = _build_progress_map(request.user, [topic])

        serializer = TopicDetailSerializer(
            topic,
            context={"request": request, "progress_map": progress_map},
        )
        return Response(serializer.data)


class SubmitProgressView(APIView):
    """
    POST /api/educational/submit-progress/
    """

    permission_classes = (IsAuthenticated,)

    def post(self, request) -> Response:
        serializer = SubmitProgressSerializer(
            data=request.data,
            context={"request": request},
        )
        serializer.is_valid(raise_exception=True)
        progress = serializer.save()

        return Response(
            {
                "detail": "Прогресс ийгиликтүү сакталды.",
                "progress": {
                    "topic_id": progress.topic_id,
                    "score": progress.score,
                    "is_completed": progress.is_completed,
                    "updated_at": progress.updated_at,
                },
            },
            status=status.HTTP_200_OK,
        )


class DashboardView(APIView):
    """
    GET /api/educational/dashboard/
    """

    permission_classes = (IsAuthenticated, IsStudentUser)

    def get(self, request) -> Response:
        data = build_dashboard_data(request.user)
        return Response(data)
