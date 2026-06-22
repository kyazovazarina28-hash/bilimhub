import logging
from typing import Any

import httpx
from django.conf import settings

logger = logging.getLogger(__name__)

SYSTEM_PROMPT = (
    "Сен Кыргызстандагы мектеп окуучуларына жылуу, түшүнүктүү тил менен "
    "илимдерди үйрөткөн тажрыйбалуу, акылдуу санарип кыргыз мугалимсиң. "
    "Жоопторду кыргыз тилинде жаз. Татаал темаларды жөнөкөй мисалдар менен "
    "түшүндүр. Окуучунун класс деңгээлин эске ал. Кыска жана так жооп бер."
)


class AIServiceError(Exception):
    """AI сервис катасы."""


def _build_messages(
    user_message: str,
    history: list[dict[str, str]],
) -> list[dict[str, str]]:
    messages: list[dict[str, str]] = [{"role": "system", "content": SYSTEM_PROMPT}]
    for item in history[-10:]:
        role = item.get("role", "user")
        content = item.get("content", "")
        if role in ("user", "assistant") and content:
            messages.append({"role": role, "content": content})
    messages.append({"role": "user", "content": user_message})
    return messages


def _call_openai(messages: list[dict[str, str]]) -> str:
    api_key = settings.OPENAI_API_KEY
    if not api_key:
        raise AIServiceError("OpenAI API ачкычы орнотулган эмес.")

    payload = {
        "model": settings.OPENAI_MODEL,
        "messages": messages,
        "temperature": 0.7,
        "max_tokens": 1024,
    }

    with httpx.Client(timeout=60.0) as client:
        response = client.post(
            "https://api.openai.com/v1/chat/completions",
            headers={
                "Authorization": f"Bearer {api_key}",
                "Content-Type": "application/json",
            },
            json=payload,
        )

    if response.status_code != 200:
        logger.error("OpenAI API error: %s", response.text)
        raise AIServiceError("OpenAI сервиси убактылуу иштебейт.")

    data = response.json()
    return data["choices"][0]["message"]["content"].strip()


def _call_gemini(messages: list[dict[str, str]]) -> str:
    api_key = settings.GEMINI_API_KEY
    if not api_key:
        raise AIServiceError("Gemini API ачкычы орнотулган эмес.")

    contents: list[dict[str, Any]] = []
    for msg in messages:
        if msg["role"] == "system":
            continue
        gemini_role = "user" if msg["role"] == "user" else "model"
        contents.append({"role": gemini_role, "parts": [{"text": msg["content"]}]})

    system_instruction = {"parts": [{"text": SYSTEM_PROMPT}]}

    payload = {
        "contents": contents,
        "systemInstruction": system_instruction,
        "generationConfig": {
            "temperature": 0.7,
            "maxOutputTokens": 1024,
        },
    }

    model = settings.GEMINI_MODEL
    url = (
        f"https://generativelanguage.googleapis.com/v1beta/models/"
        f"{model}:generateContent?key={api_key}"
    )

    with httpx.Client(timeout=60.0) as client:
        response = client.post(url, json=payload)

    if response.status_code != 200:
        logger.error("Gemini API error: %s", response.text)
        raise AIServiceError("Gemini сервиси убактылуу иштебейт.")

    data = response.json()
    candidates = data.get("candidates", [])
    if not candidates:
        raise AIServiceError("Gemini жооп кайтарган жок.")

    parts = candidates[0].get("content", {}).get("parts", [])
    if not parts:
        raise AIServiceError("Gemini жооп бош келди.")

    return parts[0].get("text", "").strip()


def generate_ai_response(
    user_message: str,
    history: list[dict[str, str]] | None = None,
) -> str:
    messages = _build_messages(user_message, history or [])
    provider = settings.AI_PROVIDER.lower()

    if provider == "openai":
        return _call_openai(messages)
    if provider == "gemini":
        return _call_gemini(messages)

    raise AIServiceError(f"Белгисиз AI провайдер: {provider}")
