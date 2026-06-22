from rest_framework import serializers

from core_educational.models import Quiz, Subject, Topic


class SubjectAdminSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subject
        fields = (
            "id",
            "name_kg",
            "name_ru",
            "slug",
            "icon_name",
            "is_active",
            "sort_order",
            "created_at",
        )
        read_only_fields = ("id", "created_at")
        extra_kwargs = {
            "slug": {"required": False, "allow_blank": True},
        }

    def validate_name_kg(self, value: str) -> str:
        value = value.strip()
        if len(value) < 2:
            raise serializers.ValidationError("Кыргызча аты кеминде 2 символ болушu керек.")
        return value

    def validate_icon_name(self, value: str) -> str:
        value = value.strip()
        if not value:
            raise serializers.ValidationError("Иконка аты толтурулması зарыл.")
        return value


class TopicAdminSerializer(serializers.ModelSerializer):
    subject_name = serializers.CharField(source="subject.name_kg", read_only=True)

    class Meta:
        model = Topic
        fields = (
            "id",
            "subject",
            "subject_name",
            "title",
            "content_text",
            "video_url",
            "section_title",
            "sort_order",
            "is_published",
            "created_at",
        )
        read_only_fields = ("id", "subject_name", "created_at")

    def validate_title(self, value: str) -> str:
        value = value.strip()
        if len(value) < 3:
            raise serializers.ValidationError("Тема аталышы кеминде 3 символ болушu керек.")
        return value

    def validate_content_text(self, value: str) -> str:
        value = value.strip()
        if len(value) < 10:
            raise serializers.ValidationError("Мазмун кеминде 10 символ болушu керек.")
        return value


class QuizAdminSerializer(serializers.ModelSerializer):
    topic_title = serializers.CharField(source="topic.title", read_only=True)

    class Meta:
        model = Quiz
        fields = (
            "id",
            "topic",
            "topic_title",
            "question_text",
            "options",
            "correct_answer",
            "points",
            "sort_order",
            "is_active",
            "created_at",
        )
        read_only_fields = ("id", "topic_title", "created_at")

    def validate_question_text(self, value: str) -> str:
        value = value.strip()
        if len(value) < 5:
            raise serializers.ValidationError("Суроо кеминде 5 символ болушu керек.")
        return value

    def validate_options(self, value: list) -> list:
        if not isinstance(value, list) or len(value) < 2:
            raise serializers.ValidationError("Эң аз 2 жооп варианты керек.")

        keys = set()
        for item in value:
            if not isinstance(item, dict):
                raise serializers.ValidationError("Варианттар JSON объекттери болушu керек.")
            key = item.get("key", "").strip()
            text = item.get("text", "").strip()
            if not key or not text:
                raise serializers.ValidationError("Ар бир вариантта key жана text болушu керек.")
            if key in keys:
                raise serializers.ValidationError(f"'{key}' key дубликат.")
            keys.add(key)

        return value

    def validate(self, attrs: dict) -> dict:
        options = attrs.get("options", [])
        correct = attrs.get("correct_answer", "").strip()
        option_keys = {o.get("key") for o in options}

        if correct and correct not in option_keys:
            raise serializers.ValidationError(
                {"correct_answer": "Туура жооп варианттардын ичинде болушu керек."},
            )
        return attrs
