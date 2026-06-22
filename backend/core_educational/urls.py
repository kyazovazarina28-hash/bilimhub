from django.urls import include, path
from rest_framework.routers import DefaultRouter

from core_educational.admin_views import (
    AdminAnalyticsView,
    AdminQuizViewSet,
    AdminSubjectViewSet,
    AdminTopicViewSet,
)
from core_educational.views import (
    DashboardView,
    SubjectDetailView,
    SubjectListView,
    SubmitProgressView,
    TopicDetailView,
)

app_name = "core_educational"

admin_router = DefaultRouter()
admin_router.register("subjects", AdminSubjectViewSet, basename="admin-subject")
admin_router.register("topics", AdminTopicViewSet, basename="admin-topic")
admin_router.register("quizzes", AdminQuizViewSet, basename="admin-quiz")

urlpatterns = [
    path("dashboard/", DashboardView.as_view(), name="dashboard"),
    path("admin/analytics/", AdminAnalyticsView.as_view(), name="admin-analytics"),
    path("admin/", include(admin_router.urls)),
    path("subjects/", SubjectListView.as_view(), name="subject-list"),
    path(
        "subjects/<slug:slug>/",
        SubjectDetailView.as_view(),
        name="subject-detail",
    ),
    path(
        "topics/<int:pk>/",
        TopicDetailView.as_view(),
        name="topic-detail",
    ),
    path(
        "submit-progress/",
        SubmitProgressView.as_view(),
        name="submit-progress",
    ),
]
