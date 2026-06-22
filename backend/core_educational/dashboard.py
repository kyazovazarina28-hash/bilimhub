from datetime import timedelta

from django.db.models import Count
from django.db.models.functions import TruncDate
from django.utils import timezone

from ai_tutor.models import ChatMessage
from core_educational.models import Progress, Subject


ACHIEVEMENT_DEFINITIONS = [
    {
        "id": "first_topic",
        "title": "Биринчи кадам",
        "description": "Биринчи теманы аяктадыңыз",
        "icon": "book",
    },
    {
        "id": "point_100",
        "title": "100 упай",
        "description": "100 упай топтодуңуз",
        "icon": "star",
    },
    {
        "id": "point_500",
        "title": "500 упай",
        "description": "500 упай топтодуңуз",
        "icon": "trophy",
    },
    {
        "id": "five_topics",
        "title": "5 тема",
        "description": "5 теманы аяктадыңыз",
        "icon": "layers",
    },
    {
        "id": "ten_topics",
        "title": "10 тема",
        "description": "10 теманы аяктадыңыз",
        "icon": "award",
    },
    {
        "id": "ai_explorer",
        "title": "AI изилдөөчү",
        "description": "AI муgalim менен бирinchi суроо",
        "icon": "bot",
    },
    {
        "id": "chat_master",
        "title": "Сүйлөшүү чебери",
        "description": "AI мугалим менен 20 суроо",
        "icon": "message",
    },
]


def _check_achievement(achievement_id: str, stats: dict) -> bool:
    checks = {
        "first_topic": stats["completed_topics"] >= 1,
        "point_100": stats["total_points"] >= 100,
        "point_500": stats["total_points"] >= 500,
        "five_topics": stats["completed_topics"] >= 5,
        "ten_topics": stats["completed_topics"] >= 10,
        "ai_explorer": stats["chat_messages"] >= 1,
        "chat_master": stats["chat_messages"] >= 20,
    }
    return checks.get(achievement_id, False)


def build_dashboard_data(user) -> dict:
    progress_qs = Progress.objects.filter(user=user).select_related(
        "topic",
        "topic__subject",
    )
    completed_topics = progress_qs.filter(is_completed=True).count()
    started_topics = progress_qs.count()
    total_score = sum(p.score for p in progress_qs)

    chat_messages = ChatMessage.objects.filter(user=user).count()
    user_messages = ChatMessage.objects.filter(
        user=user,
        role=ChatMessage.Role.USER,
    ).count()

    stats = {
        "total_points": user.points,
        "completed_topics": completed_topics,
        "started_topics": started_topics,
        "total_score": total_score,
        "chat_messages": user_messages,
    }

    achievements = []
    for ach in ACHIEVEMENT_DEFINITIONS:
        unlocked = _check_achievement(ach["id"], stats)
        achievements.append({**ach, "unlocked": unlocked})

    subject_progress = []
    subjects = Subject.objects.filter(is_active=True).prefetch_related("topics")

    for subject in subjects:
        topics = list(subject.topics.filter(is_published=True))
        if not topics:
            continue

        topic_ids = [t.id for t in topics]
        user_progress = progress_qs.filter(topic_id__in=topic_ids)

        completed = user_progress.filter(is_completed=True).count()
        total = len(topics)
        percent = round((completed / total) * 100) if total else 0

        subject_progress.append(
            {
                "slug": subject.slug,
                "name_kg": subject.name_kg,
                "icon_name": subject.icon_name,
                "completed_topics": completed,
                "total_topics": total,
                "progress_percent": percent,
            },
        )

    today = timezone.now().date()
    week_start = today - timedelta(days=6)

    progress_by_day = (
        progress_qs.filter(updated_at__date__gte=week_start)
        .annotate(day=TruncDate("updated_at"))
        .values("day")
        .annotate(
            topics_studied=Count("id"),
            points_earned=Count("id"),
        )
        .order_by("day")
    )

    chat_by_day = (
        ChatMessage.objects.filter(
            user=user,
            role=ChatMessage.Role.USER,
            created_at__date__gte=week_start,
        )
        .annotate(day=TruncDate("created_at"))
        .values("day")
        .annotate(chat_count=Count("id"))
        .order_by("day")
    )

    progress_map = {item["day"]: item for item in progress_by_day}
    chat_map = {item["day"]: item for item in chat_by_day}

    weekly_activity = []
    for i in range(7):
        day = week_start + timedelta(days=i)
        day_label = day.strftime("%Y-%m-%d")
        p = progress_map.get(day, {})
        c = chat_map.get(day, {})
        weekly_activity.append(
            {
                "date": day_label,
                "day_label": day.strftime("%d.%m"),
                "topics_studied": p.get("topics_studied", 0),
                "chat_messages": c.get("chat_count", 0),
            },
        )

    return {
        "user": {
            "id": user.id,
            "username": user.username,
            "first_name": user.first_name,
            "last_name": user.last_name,
            "email": user.email,
            "points": user.points,
            "role": user.role,
        },
        "stats": stats,
        "achievements": achievements,
        "subject_progress": subject_progress,
        "weekly_activity": weekly_activity,
    }
