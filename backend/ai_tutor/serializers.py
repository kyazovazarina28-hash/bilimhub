from rest_framework import serializers


class ChatHistoryItemSerializer(serializers.Serializer):
    role = serializers.ChoiceField(choices=["user", "assistant"])
    content = serializers.CharField(max_length=4000)


class ChatRequestSerializer(serializers.Serializer):
    message = serializers.CharField(
        min_length=1,
        max_length=4000,
        error_messages={
            "required": "Билдирүү толтурулması зарыл.",
            "blank": "Билдирүү бош болбошу керек.",
        },
    )
    history = ChatHistoryItemSerializer(many=True, required=False, default=list)


class ChatResponseSerializer(serializers.Serializer):
    reply = serializers.CharField()
    message_id = serializers.IntegerField(required=False)
