# BilimHub

Кыргызстандык мектеп окуучулары үчүн интерактивдүү билим берүү платформасы.

**Стек:** Django REST Framework + PostgreSQL/SQLite (backend), React 19 + Vite + TypeScript (frontend).

---

## Долбоор структурасы

```
BilimHub/
├── backend/          # Django API
│   ├── core/         # settings, urls, wsgi
│   ├── authentication/
│   ├── core_educational/
│   ├── ai_tutor/
│   └── manage.py
└── frontend/         # React SPA
    └── src/
```

---

## 1. Backend иштетүү

### 1.1. Virtual environment түзүү

```bash
cd backend
python -m venv venv
```

**Windows (PowerShell):**
```powershell
.\venv\Scripts\Activate.ps1
```

**macOS / Linux:**
```bash
source venv/bin/activate
```

### 1.2. Керектүү пакеттерди орнотуу

```bash
pip install -r requirements.txt
```

### 1.3. Чөйрө өзгөрмөлөрүн (.env) орнотуу

`backend/.env` файлын түзүңүз:

```env
# Негизги
SECRET_KEY=your-very-secret-key-change-in-production
DEBUG=True
ALLOWED_HOSTS=localhost,127.0.0.1

# Маалымат базасы (локалдык SQLite — демо үчүн)
# PostgreSQL иштегенде төмөнкүн uncomment кылыңыз:
# DATABASE_URL=postgres://bilimhub:bilimhub@localhost:5432/bilimhub

# CORS
CORS_ALLOWED_ORIGINS=http://localhost:5173,http://127.0.0.1:5173

# AI Мугалим (Gemini)
AI_PROVIDER=gemini
GEMINI_API_KEY=your-gemini-api-key
GEMINI_MODEL=gemini-2.0-flash

# OpenAI колдонсо:
# AI_PROVIDER=openai
# OPENAI_API_KEY=sk-your-key
# OPENAI_MODEL=gpt-4o-mini
```

> **Эскертүү:** Учурда `core/settings.py` SQLite менен иштейт. PostgreSQL'ге өтүү үчүн settings.py'дагы PostgreSQL блокун uncomment кылыңыз.

### 1.4. Миграциялар

```bash
python manage.py makemigrations
python manage.py migrate
```

### 1.5. Администратор түзүү

```bash
python manage.py createsuperuser
```

Андан кийин Django shell аркылуу ADMIN ролун бериңиз:

```bash
python manage.py shell
```

```python
from authentication.models import User, UserRole
user = User.objects.get(email="admin@example.com")
user.role = UserRole.ADMIN
user.save()
exit()
```

### 1.6. Серверди иштетүү

```bash
python manage.py runserver
```

API: `http://127.0.0.1:8000/api/`

---

## 2. Frontend иштетүү

### 2.1. Тependencies орнотуу

```bash
cd frontend
npm install
```

### 2.2. Frontend .env (опционал)

`frontend/.env` файлын түзүңүз:

```env
VITE_API_URL=/api
```

> Vite dev server proxy аркылуу `/api` → `http://127.0.0.1:8000` багытталат (vite.config.ts).

### 2.3. Dev сервер

```bash
npm run dev
```

Сайт: `http://localhost:5173`

### 2.4. Production build

```bash
npm run build
npm run preview
```

---

## 3. Негизги API маршруттары

| Маршрут | Максат |
|---------|--------|
| `POST /api/auth/register/` | Катталуу |
| `POST /api/auth/token/` | JWT алуу |
| `GET /api/auth/profile/` | Профиль |
| `GET /api/educational/subjects/<slug>/` | Сабак детали |
| `GET /api/educational/topics/<id>/` | Тема детали |
| `POST /api/educational/submit-progress/` | Прогресс сактоо |
| `GET /api/educational/dashboard/` | Окуучу панели |
| `POST /api/ai-tutor/chat/` | AI чат |
| `GET /api/educational/admin/analytics/` | Админ аналитика |
| `POST /api/educational/admin/subjects/` | Сабак кошуу |

---

## 4. Колдонуучу ролдору

| Роль | Мүмкүнчүлүк |
|------|-------------|
| `STUDENT` | Сабактар, тест, Dashboard, AI Tutor |
| `TEACHER` | Мугалим функциялары (келечекте) |
| `ADMIN` | `/admin` панели, мазмун башкаруу |

---

## 5. Коопсуздук (Production)

`DEBUG=False` коюлганда автоматтык иштейт:

- `SECURE_BROWSER_XSS_FILTER` — XSS коргоо
- `SECURE_CONTENT_TYPE_NOSNIFF` — MIME sniffing коргоо
- `SECURE_SSL_REDIRECT` — HTTPS багыттоо
- `SESSION_COOKIE_SECURE` / `CSRF_COOKIE_SECURE` — коопсуз cookie
- `SECURE_HSTS_*` — HSTS баштоо
- `X_FRAME_OPTIONS = DENY` — clickjacking коргоо

---

## 6. Көмөк

- Backend каталары: `python manage.py check`
- Frontend build: `npm run build`
- SQLite DB файлы: `backend/db.sqlite3`

---

**BilimHub** — Кыргызстан окуучулары үчүн заманбап билим берүү платформасы.
