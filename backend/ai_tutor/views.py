import logging

from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from ai_tutor.models import ChatMessage
from ai_tutor.serializers import ChatRequestSerializer
from ai_tutor.services import AIServiceError, generate_ai_response
from authentication.permissions import IsStudentUser

logger = logging.getLogger(__name__)


class ChatView(APIView):
    """
    POST /api/ai-tutor/chat/

    AI мугалим менен чат. OpenAI же Gemini API колдонот.
    """

    permission_classes = (IsAuthenticated, IsStudentUser)

    def post(self, request) -> Response:
        serializer = ChatRequestSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        message = serializer.validated_data["message"]
        history = serializer.validated_data.get("history", [])

        ChatMessage.objects.create(
            user=request.user,
            role=ChatMessage.Role.USER,
            content=message,
        )

        try:
            reply = generate_ai_response(message, history)
        except AIServiceError as exc:
            logger.warning("AI service error: %s", exc)
            return Response(
                {"detail": str(exc)},
                status=status.HTTP_503_SERVICE_UNAVAILABLE,
            )
        except Exception:
            logger.exception("Unexpected AI error")
            return Response(
                {"detail": "AI мугалим убактылуу иштебейт. Кийин кайра аракет кылыңыз."},
                status=status.HTTP_503_SERVICE_UNAVAILABLE,
            )

        assistant_msg = ChatMessage.objects.create(
            user=request.user,
            role=ChatMessage.Role.ASSISTANT,
            content=reply,
        )

        return Response(
            {
                "reply": reply,
                "message_id": assistant_msg.id,
            },
            status=status.HTTP_200_OK,
        )


class ChatHistoryView(APIView):
    """
    GET /api/ai-tutor/history/
    """

    permission_classes = (IsAuthenticated, IsStudentUser)

    def get(self, request) -> Response:
        messages = ChatMessage.objects.filter(user=request.user).order_by("created_at")[
            -50:
        ]
        return Response(
            {
                "messages": [
                    {
                        "id": msg.id,
                        "role": msg.role,
                        "content": msg.content,
                        "created_at": msg.created_at.isoformat(),
                    }
                    for msg in messages
                ],
            },
        )

    def delete(self, request) -> Response:
        ChatMessage.objects.filter(user=request.user).delete()
        return Response(
            {"detail": "Чат таржымалы тазаланды."},
            status=status.HTTP_200_OK,
        )
