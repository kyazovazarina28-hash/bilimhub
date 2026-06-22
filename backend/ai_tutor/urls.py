from django.urls import path

from ai_tutor.views import ChatHistoryView, ChatView

app_name = "ai_tutor"

urlpatterns = [
    path("chat/", ChatView.as_view(), name="chat"),
    path("history/", ChatHistoryView.as_view(), name="history"),
]
