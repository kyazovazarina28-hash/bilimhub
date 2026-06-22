from rest_framework import serializers

from core_educational.models import Progress, Quiz, Subject, Topic


class SubjectListSerializer(serializers.ModelSerializer):
    """Бардык активдүү сабактардын тизмesi."""

    class Meta:
        model = Subject
        fields = ("id", "name_kg", "name_ru", "slug", "icon_name", "sort_order")


class QuizOptionSerializer(serializers.Serializer):
    key = serializers.CharField()
    text = serializers.CharField()


class QuizStudentSerializer(serializers.ModelSerializer):
    """Окуучу үчүн — жоопту текшерүү үчүн туура жооп камтылат."""

    options = QuizOptionSerializer(many=True)

    class Meta:
        model = Quiz
        fields = (
            "id",
            "question_text",
            "options",
            "correct_answer",
            "points",
            "sort_order",
        )


class QuizPublicSerializer(serializers.ModelSerializer):
    """Тест суроолору — туура жоопсуз (окуучу үчүн)."""

    options = QuizOptionSerializer(many=True)

    class Meta:
        model = Quiz
        fields = (
            "id",
            "question_text",
            "options",
            "points",
            "sort_order",
        )


class TopicListSerializer(serializers.ModelSerializer):
    progress_percent = serializers.SerializerMethodField()
    is_completed = serializers.SerializerMethodField()
    quiz_count = serializers.SerializerMethodField()

    class Meta:
        model = Topic
        fields = (
            "id",
            "title",
            "section_title",
            "sort_order",
            "progress_percent",
            "is_completed",
            "quiz_count",
        )

    def _get_progress(self, obj: Topic) -> Progress | None:
        progress_map = self.context.get("progress_map", {})
        return progress_map.get(obj.id)

    def get_progress_percent(self, obj: Topic) -> int:
        progress = self._get_progress(obj)
        if not progress:
            return 0
        total_points = sum(
            q.points
            for q in obj.quizzes.filter(is_active=True)
        )
        if total_points == 0:
            return 100 if progress.is_completed else 0
        return min(100, round((progress.score / total_points) * 100))

    def get_is_completed(self, obj: Topic) -> bool:
        progress = self._get_progress(obj)
        return bool(progress and progress.is_completed)

    def get_quiz_count(self, obj: Topic) -> int:
        return obj.quizzes.filter(is_active=True).count()


class SubjectDetailSerializer(serializers.ModelSerializer):
    topics = serializers.SerializerMethodField()
    sections = serializers.SerializerMethodField()
    overall_progress = serializers.SerializerMethodField()

    class Meta:
        model = Subject
        fields = (
            "id",
            "name_kg",
            "name_ru",
            "slug",
            "icon_name",
            "topics",
            "sections",
            "overall_progress",
        )

    def get_topics(self, obj: Subject) -> list:
        topics = obj.topics.filter(is_published=True).prefetch_related("quizzes")
        return TopicListSerializer(
            topics,
            many=True,
            context=self.context,
        ).data

    def get_sections(self, obj: Subject) -> list:
        topics_data = self.get_topics(obj)
        sections: dict[str, dict] = {}

        for topic in topics_data:
            section_name = topic["section_title"]
            if section_name not in sections:
                sections[section_name] = {
                    "title": section_name,
                    "topics": [],
                    "progress_percent": 0,
                }
            sections[section_name]["topics"].append(topic)

        result = []
        for section in sections.values():
            topics_in_section = section["topics"]
            if topics_in_section:
                avg = sum(t["progress_percent"] for t in topics_in_section) / len(
                    topics_in_section,
                )
                section["progress_percent"] = round(avg)
            result.append(section)

        return result

    def get_overall_progress(self, obj: Subject) -> int:
        topics_data = self.get_topics(obj)
        if not topics_data:
            return 0
        return round(
            sum(t["progress_percent"] for t in topics_data) / len(topics_data),
        )


class TopicDetailSerializer(serializers.ModelSerializer):
    quizzes = serializers.SerializerMethodField()
    pdf_url = serializers.SerializerMethodField()
    subject_slug = serializers.CharField(source="subject.slug", read_only=True)
    subject_name = serializers.CharField(source="subject.name_kg", read_only=True)
    progress_percent = serializers.SerializerMethodField()
    is_completed = serializers.SerializerMethodField()

    class Meta:
        model = Topic
        fields = (
            "id",
            "title",
            "content_text",
            "video_url",
            "pdf_url",
            "section_title",
            "subject_slug",
            "subject_name",
            "progress_percent",
            "is_completed",
            "quizzes",
        )

    def _get_progress(self, obj: Topic) -> Progress | None:
        progress_map = self.context.get("progress_map", {})
        return progress_map.get(obj.id)

    def get_pdf_url(self, obj: Topic) -> str | None:
        if not obj.pdf_file:
            return None
        request = self.context.get("request")
        if request:
            return request.build_absolute_uri(obj.pdf_file.url)
        return obj.pdf_file.url

    def get_progress_percent(self, obj: Topic) -> int:
        progress = self._get_progress(obj)
        if not progress:
            return 0
        total_points = sum(q.points for q in obj.quizzes.filter(is_active=True))
        if total_points == 0:
            return 100 if progress.is_completed else 0
        return min(100, round((progress.score / total_points) * 100))

    def get_is_completed(self, obj: Topic) -> bool:
        progress = self._get_progress(obj)
        return bool(progress and progress.is_completed)

    def get_quizzes(self, obj: Topic) -> list:
        request = self.context.get("request")
        quizzes = obj.quizzes.filter(is_active=True)
        if request and request.user.is_authenticated:
            return QuizStudentSerializer(quizzes, many=True).data
        return QuizPublicSerializer(quizzes, many=True).data


class SubmitProgressSerializer(serializers.Serializer):
    topic_id = serializers.IntegerField()
    score = serializers.IntegerField(min_value=0)
    is_completed = serializers.BooleanField(default=False)
    correct_count = serializers.IntegerField(min_value=0, required=False)
    total_questions = serializers.IntegerField(min_value=0, required=False)

    def validate_topic_id(self, value: int) -> int:
        if not Topic.objects.filter(id=value, is_published=True).exists():
            raise serializers.ValidationError("Тема табылган жок.")
        return value

    def save(self, **kwargs) -> Progress:
        user = self.context["request"].user
        topic = Topic.objects.get(id=self.validated_data["topic_id"])
        score = self.validated_data["score"]
        is_completed = self.validated_data["is_completed"]

        progress, _ = Progress.objects.get_or_create(
            user=user,
            topic=topic,
            defaults={"score": 0, "is_completed": False},
        )
        old_score = progress.score
        progress.score = score
        progress.is_completed = is_completed
        progress.save(update_fields=["score", "is_completed", "updated_at"])

        points_delta = score - old_score
        if points_delta > 0:
            user.points = user.points + points_delta
            user.save(update_fields=["points"])

        return progress
