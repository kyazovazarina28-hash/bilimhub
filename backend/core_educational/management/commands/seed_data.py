"""
BilimHub — окуу материалдарын базага киргизүү (seed).

Иштетүү:
    python manage.py seed_data
    python manage.py seed_data --clear   # бардык Subject/Topic/Quiz өчүрүп, кайра түзөт
"""

from __future__ import annotations

from django.core.management.base import BaseCommand
from django.db import transaction

from core_educational.models import Quiz, Subject, Topic


def make_options(*texts: str) -> list[dict[str, str]]:
    keys = ("a", "b", "c", "d", "e")
    return [{"key": keys[i], "text": text} for i, text in enumerate(texts)]


def quiz(
    question: str,
    options: list[dict[str, str]],
    correct: str,
    points: int = 2,
    order: int = 1,
) -> dict:
    return {
        "question_text": question,
        "options": options,
        "correct_answer": correct,
        "points": points,
        "sort_order": order,
    }


# Slug'дар frontend/src/data/subjects.ts менен шайкеш (Home бетинен өткөн шилтемелер).
SEED_DATA: list[dict] = [
    {
        "slug": "matematika",
        "name_kg": "Математика",
        "name_ru": "Математика",
        "icon_name": "calculator",
        "sort_order": 1,
        "topics": [
            {
                "title": "Квадраттык теңдемелер жана Дискриминант",
                "section_title": "Алгебра — 8-класс",
                "sort_order": 1,
                "video_url": "https://www.youtube.com/watch?v=2UvratOTNz8",
                "content_text": (
                    "ax² + bx + c = 0 түрүндөгү теңдеме квадраттык теңдеме деп аталат. "
                    "Мында a, b, c — накты санлар, ал эми a ≠ 0.\n\n"
                    "Дискриминант (D) формуласы:\n"
                    "D = b² − 4ac\n\n"
                    "D > 0 болсо — теңдеменин эки ар турдуу накты тамыры бар.\n"
                    "D = 0 болсо — бир эле накты тамыр (эки так тамыр).\n"
                    "D < 0 болсо — накты тамыр жок.\n\n"
                    "Тамырлар формуласы:\n"
                    "x₁,₂ = (−b ± √D) / (2a)\n\n"
                    "Мисал: x² − 5x + 6 = 0\n"
                    "D = 25 − 24 = 1 > 0 → x₁ = 3, x₂ = 2.\n\n"
                    "Кыргызстандагы мектеп программасында бул тема 8–9-класстarda тереңдетилет "
                    "жана функциялар, графиктер менен байланыштырылат."
                ),
                "quizzes": [
                    quiz(
                        "D > 0 болсо, квадраттык теңдеме канча накты тамырга ээ?",
                        make_options("2 тамыр", "1 тамыр", "Тамыр жок", "Чексиз тамыр"),
                        "a",
                        order=1,
                    ),
                    quiz(
                        "x² − 4x + 4 = 0 теңдемесинин дискриминанты канча?",
                        make_options("0", "4", "−4", "16"),
                        "a",
                        order=2,
                    ),
                    quiz(
                        "x² + 2x − 8 = 0 теңдемесинин тамырлары кандай?",
                        make_options("x₁ = 2, x₂ = −4", "x₁ = −2, x₂ = 4", "x₁ = 4, x₂ = 2", "Тамыр жок"),
                        "a",
                        order=3,
                    ),
                    quiz(
                        "D < 0 болгондо тамырлар кандай сан болот?",
                        make_options("Комплексстик (накты эмес)", "Эки оң тамыр", "Бир тамыр", "Нөл"),
                        "a",
                        order=4,
                    ),
                ],
            },
            {
                "title": "Функциялар, графиктер жана tengдеme системалары",
                "section_title": "Алгебра — 9-класс",
                "sort_order": 2,
                "video_url": "https://www.youtube.com/watch?v=WUvTyaaNkzM",
                "content_text": (
                    "y = f(x) функциясы ар бир x маанисине y маанисин коюп коёт. "
                    "Линейдик функция y = kx + b түз сызык чыгарат.\n\n"
                    "Квадраттык функция y = ax² + bx + c парабола түзөт. "
                    "a > 0 болсо тартуулар жогору, a < 0 болсо ылдыйга карай.\n\n"
                    "Теңдеме системасын чечүү ыкмалар:\n"
                    "1) Подстановка (алмаштыруу)\n"
                    "2) Кошуу ыкмасы\n"
                    "3) График ыкması\n\n"
                    "Мисал:\n"
                    "x + y = 7\n"
                    "2x − y = 2\n"
                    "Жооп: x = 3, y = 4."
                ),
                "quizzes": [
                    quiz(
                        "y = 2x + 3 функциясынын графиги кандай фигура?",
                        make_options("Түз сызык", "Парабола", "Гипербола", "Тегерек"),
                        "a",
                        order=1,
                    ),
                    quiz(
                        "Параболанын төмөнкү чекити (vertex) y = x² − 6x + 5 функциясыnda кайда?",
                        make_options("(3; −4)", "(−3; 4)", "(3; 4)", "(0; 5)"),
                        "a",
                        order=2,
                    ),
                    quiz(
                        "x + y = 10 жана x − y = 2 системасынын чечими:",
                        make_options("x = 6, y = 4", "x = 4, y = 6", "x = 5, y = 5", "Чечим жок"),
                        "a",
                        order=3,
                    ),
                ],
            },
        ],
    },
    {
        "slug": "geometriya",
        "name_kg": "Геометрия",
        "name_ru": "Геометрия",
        "icon_name": "triangle",
        "sort_order": 2,
        "topics": [
            {
                "title": "Пифагордун теоремасы жана колдонулушу",
                "section_title": "Тriogonometriya негиздери",
                "sort_order": 1,
                "video_url": "https://www.youtube.com/watch?v=Wqulitjvcii",
                "content_text": (
                    "Түз бурчтуу үч бурчтуктун гипотенузасынын квадраты катеттеринин "
                    "квадраттарынын суммасына барабар:\n\n"
                    "a² + b² = c²\n\n"
                    "Мында c — гипотенуза (эң узун тамак), a жана b — катеттер.\n\n"
                    "Колдонулушу:\n"
                    "• Бинanın бийиктигин өлчөө\n"
                    "• Жер участкесинин диагоналын табуу\n"
                    "• GPS жана навигация эсептеелери\n\n"
                    "Мисал: Катеттер 3 см жана 4 см болсо, c = √(9+16) = 5 см.\n\n"
                    "Кыргызстандагы 7–8-класс программасында бул теорема практикалык "
                    "геометриялык маселелерде кеңири колдонулат."
                ),
                "quizzes": [
                    quiz(
                        "Катеттер 6 см жана 8 см болсо, гипотенуза канча?",
                        make_options("10 см", "14 см", "12 см", "48 см"),
                        "a",
                        order=1,
                    ),
                    quiz(
                        "Пифагордун теоремасы кайсы үч бурчтукка тиешелүү?",
                        make_options("Түз бурчтуу", "Туп бурчтуу", "Тeng бурчтуu", "Каалаган"),
                        "a",
                        order=2,
                    ),
                    quiz(
                        "a = 5, c = 13 болсо, b катети канча?",
                        make_options("12", "8", "18", "65"),
                        "a",
                        order=3,
                    ),
                    quiz(
                        "3-4-5 үч бурчтугу кайсы тriple?",
                        make_options("Пифагордук triple", "Равнобедренный", "Равносторонний", "Оbtuse"),
                        "a",
                        order=4,
                    ),
                ],
            },
            {
                "title": "Үч бурчтуктардын аянты жана тригонометрия",
                "section_title": "Аянттар жана бурчтар",
                "sort_order": 2,
                "video_url": "https://www.youtube.com/watch?v=Jsiy4TxjIME",
                "content_text": (
                    "Үч бурчтуктун аянты:\n"
                    "S = (1/2) · a · h  же  S = (1/2) · ab · sin(C)\n\n"
                    "Sin, cos, tg — тригонометриялык функциялар:\n"
                    "sin α = каршы катет / гипотенуза\n"
                    "cos α = катуу катет / гипотенуза\n"
                    "tg α = sin α / cos α\n\n"
                    "Кыргызстандын архитектурасыnda (минарет, үй чаты) бурчтарды "
                    "эсептөөдө тригонометрия колдонулат."
                ),
                "quizzes": [
                    quiz(
                        "Негизи 10 см, бийиктиги 6 см болгон үч бурчтуктун аянты:",
                        make_options("30 см²", "60 см²", "16 см²", "100 см²"),
                        "a",
                        order=1,
                    ),
                    quiz(
                        "sin 30° мааниси:",
                        make_options("1/2", "√3/2", "1", "0"),
                        "a",
                        order=2,
                    ),
                    quiz(
                        "Түз бурчтуу үч бурчтуктун бурчтарынын суммасы:",
                        make_options("180°", "90°", "360°", "270°"),
                        "a",
                        order=3,
                    ),
                ],
            },
        ],
    },
    {
        "slug": "kyrgyz-tili",
        "name_kg": "Кыргыз тили",
        "name_ru": "Кыргызский язык",
        "icon_name": "book-open",
        "sort_order": 3,
        "topics": [
            {
                "title": "Сөз түркүмдөрү жана Зат атооч",
                "section_title": "Грамматика негиздери",
                "sort_order": 1,
                "video_url": "https://www.youtube.com/watch?v=O3RTm8fN1X8",
                "content_text": (
                    "Кыргыз тилинде негизги сөз түркүмдөрү:\n"
                    "• Зат атооч (атауучу)\n"
                    "• Сын атооч (сыпаттоочу)\n"
                    "• Этим (долбoor)\n"
                    "• Сан атооч\n"
                    "• Ал местоимение\n\n"
                    "Зат атооч — адам, жанuar, нерсенин атын билдирет: китеп, мугалим, Бишкек.\n\n"
                    "Жалпылоочу зат атоочтор: ар бир окуучу, бардык балдар.\n"
                    "Жеке зат атоочтор: Азамат, Кыргызстан.\n\n"
                    "Жекеше-көптük:\n"
                    "китеп → китептер, бala → балдар, окуучу → окуучулар.\n\n"
                    "Кыргыз тили — агglutinative тил: сөздөрдүн sonuna мorfema кошулуп маani өзгөрөт."
                ),
                "quizzes": [
                    quiz(
                        "«китеп» сөзү кайсы сөз түркүмүнө кирет?",
                        make_options("Зат атооч", "Этим", "Сын атооч", "Сан атооч"),
                        "a",
                        order=1,
                    ),
                    quiz(
                        "«окуучулар» сөзүнүн негизинде кандай морфема бар?",
                        make_options("Көптük (-лар)", "Жак (-ды)", "Сыяktoo (-ча)", "Сурак (-бы)"),
                        "a",
                        order=2,
                    ),
                    quiz(
                        "Кайсысы жалпылоочу зат атооч?",
                        make_options("ар бир адам", "Айгүл", "Бишкек", "мектеп"),
                        "a",
                        order=3,
                    ),
                    quiz(
                        "«тез» сөзү кыргызчада кайсы түркүм?",
                        make_options("Этим сын атооч (нарек)", "Зат атооч", "Сан атооч", "Орточо сөз"),
                        "a",
                        order=4,
                    ),
                ],
            },
            {
                "title": "Жеке-этиштер, септиктер жана сөйлөм түзүлүшү",
                "section_title": "Морфология",
                "sort_order": 2,
                "video_url": "https://www.youtube.com/watch?v=1Osb_iGdEp0",
                "content_text": (
                    "Кыргыз тилинде 6 септик бар:\n"
                    "атаалoo (ким? не?), ilik (-нын), barysh (-га), "
                    "tabыш (-ны), чыгым (-дан), жатwaq (-да).\n\n"
                    "Мисал: окуучу → окуучунун (ilik), окуучуга (barysh).\n\n"
                    "Сөйлөм мүчөлөрү: баш сөз, бaa сöz, толуктooчu.\n"
                    "Жактар: анык (men oкуйm), шекteuu (okuysun), buyruk (oku!)."
                ),
                "quizzes": [
                    quiz(
                        "«мектептин» сөзündө кайсы септик колдонулган?",
                        make_options("Илик (-нин)", "Барыш", "Табыш", "Жатwaк"),
                        "a",
                        order=1,
                    ),
                    quiz(
                        "Кыргыз тилинде канча негизги септик бар?",
                        make_options("6", "4", "7", "5"),
                        "a",
                        order=2,
                    ),
                    quiz(
                        "«Оку!» сөйлөмündө кайсы жак?",
                        make_options("Бuyruk (буйрук)", "Анык", "Шекteuu", "Керекteу"),
                        "a",
                        order=3,
                    ),
                ],
            },
        ],
    },
    {
        "slug": "kyrgyz-adabiyaty",
        "name_kg": "Кыргыз адабияты",
        "name_ru": "Кыргызская литература",
        "icon_name": "library",
        "sort_order": 4,
        "topics": [
            {
                "title": "Манас эпосу — кыргыз элинин туу чокусу",
                "section_title": "Улuttuk эpos",
                "sort_order": 1,
                "video_url": "https://www.youtube.com/watch?v=GvL1d2H7K9o",
                "content_text": (
                    "«Манас» — дүйнөнүн эң узун эposтуу чыgarмасы, кыргыз элинин "
                    "ruhyy байлыгы. UNESCO аны Адамзаттын оozuk мадaniyet мuraсына киргизген.\n\n"
                    "Негизги кaahpaктar:\n"
                    "• Манас — эр бaatыр, элди бириктирgen\n"
                    "• Семетей — анын уulu, мuraскor\n"
                    "• Сeкe — неberesi, улантуuchu\n\n"
                    "Эpos 3 бөлүктөн турат: «Манас», «Семетей», «Секe».\n\n"
                    "Манasчылар (okuyuchular) эposту оозеки негизде айтышат. "
                    "Сагымbay Orozbakov, Sayakbay Karalaev — uluu manaschilar.\n\n"
                    "Temalar: erdik, erk, Vatan сүйүү, el birligi."
                ),
                "quizzes": [
                    quiz(
                        "«Манас» эposunun negizgi baatyry kim?",
                        make_options("Манас", "Чyngyz", "Toktogul", "Togolok Moldo"),
                        "a",
                        order=1,
                    ),
                    quiz(
                        "Эpos kaç bölümdön turat?",
                        make_options("3 (Манас, Семетей, Секe)", "2", "5", "1"),
                        "a",
                        order=2,
                    ),
                    quiz(
                        "UNESCO «Манас» эposunu kanday status berdi?",
                        make_options("Адамзаттын оozuk мuraсы", "Дүйнөлük реkord", "Кitap", "Filм"),
                        "a",
                        order=3,
                    ),
                    quiz(
                        "Manaschilar эposту кандай негизде айтышат?",
                        make_options("Оозeki (устундuk)", "Kagazdan o'qup", "Kompyuterdен", "Radio"),
                        "a",
                        order=4,
                    ),
                ],
            },
            {
                "title": "Chyngyz Aitmatov жana zamanaabyt adabiyaty",
                "section_title": "Zamanabyt chygarmalar",
                "sort_order": 2,
                "video_url": "https://www.youtube.com/watch?v=HkZ9P9f4Zxg",
                "content_text": (
                    "Chyngyz Aitmatov — dunyoluk darajadagi kyrgyz jazuuuchusu.\n\n"
                    "Belgiluu chygarmalar:\n"
                    "• «Jamila» — suyuu, urp-aadat, sogush\n"
                    "• «Birinchi muugalim» — bilim, adalet\n"
                    "• «Kunduu tun» — ekologiya, adamchylyk\n\n"
                    "Aitmatov chygarmalarinda Vatan, tabiyat, adam omuru — negizgi temalar."
                ),
                "quizzes": [
                    quiz(
                        "«Jamila» chygarmasynyn avtory kim?",
                        make_options("Chyngyz Aitmatov", "Toktogul", "Togolok Moldo", "Aaly Tokombaev"),
                        "a",
                        order=1,
                    ),
                    quiz(
                        "«Birinchi muugalim» chygarmasynyn negizgi temasy:",
                        make_options("Bilim beruu", "Sogush", "Sayahat", "Sport"),
                        "a",
                        order=2,
                    ),
                    quiz(
                        "Aitmatov kaç tilde basyldy?",
                        make_options("100дөн ашуун", "2", "5", "10"),
                        "a",
                        order=3,
                    ),
                ],
            },
        ],
    },
    {
        "slug": "fizika",
        "name_kg": "Физика",
        "name_ru": "Физика",
        "icon_name": "atom",
        "sort_order": 5,
        "topics": [
            {
                "title": "Ньютондун динамика мыйзамдары",
                "section_title": "Механика",
                "sort_order": 1,
                "video_url": "https://www.youtube.com/watch?v=kKKM8q-uSxs",
                "content_text": (
                    "Айзaac Ньютон 3 динamika мыйзamын негиздedi:\n\n"
                    "1-мыйзam (инercia): Дене тeng бagyttagy tez tezdenuuu "
                    "menen koz galat, agar kuch kolonbosо.\n\n"
                    "2-мыйзam: F = m · a\n"
                    "Kuch = massa × tezdenuu. Olchom birligi: Nyuton (N).\n\n"
                    "3-мыйзam: Ar bir ara ketishtikke teng, bir-birine karşı "
                    "ten emes kuchter etkilet.\n\n"
                    "Mисал: 2 kg massaly deneni 3 m/s² menen tezdenдiruu үчүн "
                    "F = 2 × 3 = 6 N kuch kerek.\n\n"
                    "Kyrgyzstanda transport, kurulush, gidroelektrostanciyalar "
                    "dinamika мыйзamдарын kolonot."
                ),
                "quizzes": [
                    quiz(
                        "F = m · a формуlasında F emne?",
                        make_options("Kuch (Nyuton)", "Massa", "Tezdenuu", "Uzaktyk"),
                        "a",
                        order=1,
                    ),
                    quiz(
                        "1-mыйзam emne deyt?",
                        make_options("Inercia мыйзamы", "Gravitaciya", "Energiya", "Impuls"),
                        "a",
                        order=2,
                    ),
                    quiz(
                        "5 kg massa, 2 m/s² tezdenuu — kuch?",
                        make_options("10 N", "7 N", "2.5 N", "20 N"),
                        "a",
                        order=3,
                    ),
                    quiz(
                        "3-mыйзam kanday kuchter tuuraluu?",
                        make_options("Ara ketishtik kuchter", "Gravitaciya", "Sürtünüu", "Impuls"),
                        "a",
                        order=4,
                    ),
                ],
            },
            {
                "title": "Energiya, ish жana quwat",
                "section_title": "Energiya saktaluu мыйзamы",
                "sort_order": 2,
                "video_url": "https://www.youtube.com/watch?v=2SKjFPD3KR0",
                "content_text": (
                    "Kinetikalyk energiya: Ek = mv²/2\n"
                    "Potencial energiya: Ep = mgh\n\n"
                    "Energiya saktaluu мыйзamы: zabyt energiya saqtalat, "
                    "bir turdun bashtan otkonu mumkun.\n\n"
                    "Quwat: P = A/t = F·v\n\n"
                    "Toktogul GES — potencial energiyany elektro energiyaga aylantat."
                ),
                "quizzes": [
                    quiz(
                        "Ek = mv²/2 — kanday energiya?",
                        make_options("Kinetikalyk", "Potencial", "Issık", "Yndyktuu"),
                        "a",
                        order=1,
                    ),
                    quiz(
                        "Ep = mgh formulasyndagy h emne?",
                        make_options("Biyiklik", "Tezdyk", "Massa", "Kuch"),
                        "a",
                        order=2,
                    ),
                    quiz(
                        "Quwat birligi:",
                        make_options("Watt (Vt)", "Nyuton", "Joule", "Pascal"),
                        "a",
                        order=3,
                    ),
                ],
            },
        ],
    },
    {
        "slug": "himiya",
        "name_kg": "Химия",
        "name_ru": "Химия",
        "icon_name": "flask-conical",
        "sort_order": 6,
        "topics": [
            {
                "title": "Периоддук система жана Менделеевдин мыйзамы",
                "section_title": "Elementter",
                "sort_order": 1,
                "video_url": "https://www.youtube.com/watch?v=0RRVV4Diomg",
                "content_text": (
                    "D.I. Mendeleev 1869-jyly elementterdin periodduк sistemasyn tuzdu.\n\n"
                    "Periodduк sistemada:\n"
                    "• Gorizontaldyk qatar — period\n"
                    "• Tik qatar — top (gruppa)\n"
                    "• Atom nomur artkanda qasiyetтер o'xshash elementter qayta kelet\n\n"
                    "Element belgileri: H (1), O (8), Na (11), Fe (26), Au (79)\n\n"
                    "Valentnost, elektron konfiguraciyasi — qasiyetтерdi anıktayt.\n\n"
                    "Kyrgyzstanda kumush, sn, volfram, zhegyluu zat depositter bar."
                ),
                "quizzes": [
                    quiz(
                        "Periodduк sistemany kim tuzdu?",
                        make_options("D.I. Mendeleev", "Newton", "Einstein", "Lomonosov"),
                        "a",
                        order=1,
                    ),
                    quiz(
                        "Suvunun formulasy:",
                        make_options("H₂O", "CO₂", "NaCl", "O₂"),
                        "a",
                        order=2,
                    ),
                    quiz(
                        "Altın elementinin belgisi:",
                        make_options("Au", "Ag", "Al", "Ar"),
                        "a",
                        order=3,
                    ),
                    quiz(
                        "Tik qatar emne deyt?",
                        make_options("Top (gruppa)", "Period", "Blok", "Yarmak"),
                        "a",
                        order=4,
                    ),
                ],
            },
            {
                "title": "Kimyalyk reakciyalar жana tengдеmeler",
                "section_title": "Reakciyalar",
                "sort_order": 2,
                "video_url": "https://www.youtube.com/watch?v=RNQfcRRelA4",
                "content_text": (
                    "Kimyalyk reakciya: zatтар o'zgörüp, jaңы zatтар payda bolot.\n\n"
                    "Tengдеme: reagentter = produktter\n"
                    "Mисал: 2H₂ + O₂ → 2H₂O\n\n"
                    "Reakciya türleri: biriktiruu, parchalanuu, almashtuu, kompleks."
                ),
                "quizzes": [
                    quiz(
                        "2H₂ + O₂ → 2H₂O — kanday reakciya?",
                        make_options("Biriktiruu (sintez)", "Parchalanuu", "Goruu", "Elektroliz"),
                        "a",
                        order=1,
                    ),
                    quiz(
                        "Tengдеmede saqtaluu kerek:",
                        make_options("Atom sanı", "Zat massasy gana", "Kolem gana", "Hech nersa"),
                        "a",
                        order=2,
                    ),
                    quiz(
                        "NaCl — kanday zat?",
                        make_options("Tuz (galit)", "Kislorod", "Suv", "Temir"),
                        "a",
                        order=3,
                    ),
                ],
            },
        ],
    },
    {
        "slug": "biologiya",
        "name_kg": "Биология",
        "name_ru": "Биология",
        "icon_name": "leaf",
        "sort_order": 7,
        "topics": [
            {
                "title": "Клетканын түзүлүшү жана генетиканын негиздери",
                "section_title": "Zoologiya жana botanika",
                "sort_order": 1,
                "video_url": "https://www.youtube.com/watch?v=URUJD5NEXC8",
                "content_text": (
                    "Kletka — canuu organizmderdin negizgi yapı birligi.\n\n"
                    "Negizgi bölüktör:\n"
                    "• Membrana — korgoo\n"
                    "• Citoplazma — zat almashuuu\n"
                    "• Yadro — genetik maalumat (DNA)\n\n"
                    "Ösümduк kletkasynda: hloroplast, kletka devri\n"
                    "Hayvan kletkasynda: bolmochoktor\n\n"
                    "Genetika: gen — muraстanуу birligi. Mendel мыйзamдары.\n"
                    "DNK — A, T, G, C negizderi."
                ),
                "quizzes": [
                    quiz(
                        "Genetik maalumat kayerde saqtalat?",
                        make_options("Yadro (DNA)", "Membrana", "Ribosoma", "Mitoxondriya"),
                        "a",
                        order=1,
                    ),
                    quiz(
                        "Ösümduк kletkasyna taandik organoid:",
                        make_options("Hloroplast", "Sentriol", "Lizosoma", "Bolmochoq"),
                        "a",
                        order=2,
                    ),
                    quiz(
                        "Genetikanyn atasy kim?",
                        make_options("Gregor Mendel", "Darwin", "Pavlov", "Pasteur"),
                        "a",
                        order=3,
                    ),
                    quiz(
                        "DNA negizderi:",
                        make_options("A, T, G, C", "A, B, C, D", "1, 2, 3, 4", "H, O, N, C"),
                        "a",
                        order=4,
                    ),
                ],
            },
            {
                "title": "Ekologiya жana Kyrgyzstandyn tabigiy resurshtary",
                "section_title": "Ekologiya",
                "sort_order": 2,
                "video_url": "https://www.youtube.com/watch?v=J8ANgxE0Vac",
                "content_text": (
                    "Ekologiya — organizmder menen ortonun araa katnashty.\n\n"
                    "Kyrgyzstanda:\n"
                    "• Ala-Too zapovednikter\n"
                    "• Issyk-Kul — endemik balıktar\n"
                    "• Naryn, Talas — suu resurshtary\n\n"
                    "Food chain: ösümduk → ot yeygen → et yeygen → chiriktirgich."
                ),
                "quizzes": [
                    quiz(
                        "Issyk-Kul kanday suu?",
                        make_options("Köl (tuzsuz)", "Dengiz", "Darya", "Kanal"),
                        "a",
                        order=1,
                    ),
                    quiz(
                        "Food chainde birinchi daraja:",
                        make_options("Ösümduk (producer)", "Et yeygen", "Chiriktirgich", "Hayvan"),
                        "a",
                        order=2,
                    ),
                    quiz(
                        "Ekologiya emne o'rganat?",
                        make_options("Organizm menen orto", "Atom", "Tarih", "Geometriya"),
                        "a",
                        order=3,
                    ),
                ],
            },
        ],
    },
    {
        "slug": "geografiya",
        "name_kg": "География",
        "name_ru": "География",
        "icon_name": "globe",
        "sort_order": 8,
        "topics": [
            {
                "title": "Кыргызстандын рельефи жана жаратылыш ресурстары",
                "section_title": "Fizikalyk geografiya",
                "sort_order": 1,
                "video_url": "https://www.youtube.com/watch?v=Zgcs5G9GyRU",
                "content_text": (
                    "Kyrgyzstan — tooluу el, territoriyasynyn 90% den aşıgı toolor.\n\n"
                    "Eng biyik chuki: Pobeda (7439 m), Lenin (7134 m)\n"
                    "Eng chong köl: Issyk-Kul (1736 km²)\n\n"
                    "Relьef türleri: toolor, platolar, oyonduktar, düzlüktör.\n\n"
                    "Tabigiy resurshtar:\n"
                    "• Kumush (Maidukel, Kumtor)\n"
                    "• Suu energiyasi (GES)\n"
                    "• Kömir, neft, gaz\n"
                    "• Gidro resurshtar\n\n"
                    "Klimat: kontinentalduu, keskin temperatura ayirma."
                ),
                "quizzes": [
                    quiz(
                        "Kyrgyzstandyn eng biyik chukisi:",
                        make_options("Pobeda (7439 m)", "Everest", "Lenin", "Khan-Tengri"),
                        "a",
                        order=1,
                    ),
                    quiz(
                        "Issyk-Kul aymağındagy eng chong köl:",
                        make_options("Issyk-Kul", "Son-Kul", "Chatyr-Kul", "Ala-Kul"),
                        "a",
                        order=2,
                    ),
                    quiz(
                        "Kyrgyzstan aymağynyn nechisi toolu?",
                        make_options("~90%", "50%", "30%", "10%"),
                        "a",
                        order=3,
                    ),
                    quiz(
                        "Kumtor kanday resurshtar boyuncha maalum?",
                        make_options("Altyn", "Kumush gana", "Neft", "Kömir"),
                        "a",
                        order=4,
                    ),
                ],
            },
            {
                "title": "Klimat, geosferalar жana karta okuu",
                "section_title": "Kartografiya",
                "sort_order": 2,
                "video_url": "https://www.youtube.com/watch?v=7vz2pA9dRjM",
                "content_text": (
                    "Geosferalar: litosfera, gidrosfera, atmosfera, biosfera.\n\n"
                    "Kartada масштаб: 1:1 000 000 — 1 sm = 10 km\n\n"
                    "Kyrgyzstan — Bortschagay chuchuk regionunda, "
                    "Seysmik aktiv aymaq."
                ),
                "quizzes": [
                    quiz(
                        "Atmosfera emne?",
                        make_options("Aba katmany", "Suunu katmany", "Tos katmany", "Magma"),
                        "a",
                        order=1,
                    ),
                    quiz(
                        "Bishkek Kyrgyzstandyn kaysy bölügünde?",
                        make_options("Chüy oyonduğu", "Batys", "Tunduk", "Osh"),
                        "a",
                        order=2,
                    ),
                    quiz(
                        "1:100 000 масштабda 1 sm kancha metr?",
                        make_options("1000 m (1 km)", "100 m", "10 km", "10 m"),
                        "a",
                        order=3,
                    ),
                ],
            },
        ],
    },
    {
        "slug": "tarih",
        "name_kg": "Тарых",
        "name_ru": "История",
        "icon_name": "landmark",
        "sort_order": 9,
        "topics": [
            {
                "title": "Улуу Кыргыз Каганаты",
                "section_title": "Bайkir Kaganat",
                "sort_order": 1,
                "video_url": "https://www.youtube.com/watch?v=QX4j0HbpPXY",
                "content_text": (
                    "Uluu Kyrgyz Kaganaty — 840-jyldan 924-jylga cheyin "
                    "Orhon-Dzungariya aymağında kuduretтуu mamilek.\n\n"
                    "Negizgi maalumattar:\n"
                    "• Negizdagы: Yenisei Kyrgyzdary\n"
                    "• Paydaby: Uluu Kaganatty parchaloo\n"
                    "• Ordo: Orhon öröönsü (Mongoliya)\n\n"
                    "Kyrgyzdar 840-jylda Uigur Kaganatyn zhengip, "
                    "Chin имperiyasymen salyshyy albay kalgan mamilek kurdular.\n\n"
                    "Orhon yazmalary — kyrgyz tili tarihinin negizgi bapkanasy."
                ),
                "quizzes": [
                    quiz(
                        "Uluu Kyrgyz Kaganaty kaç-jylda payda boldu?",
                        make_options("840", "552", "1200", "1861"),
                        "a",
                        order=1,
                    ),
                    quiz(
                        "Kaganat kaysy kaganatty zhengdi?",
                        make_options("Uigur Kaganaty", "Rim", "Osman", "Mogol"),
                        "a",
                        order=2,
                    ),
                    quiz(
                        "Orhon yazmalary kanday maaniге eee?",
                        make_options("Tarihiy yazma bapkanalar", "Geografiya", "Matematika", "Fizika"),
                        "a",
                        order=3,
                    ),
                    quiz(
                        "Kaganat kaç-jylda parchalandy?",
                        make_options("924", "840", "1206", "1917"),
                        "a",
                        order=4,
                    ),
                ],
            },
            {
                "title": "Kyrgyzstan XX kyyrda: SSRB жana egemenduuluk",
                "section_title": "Zamanaabyt tarih",
                "sort_order": 2,
                "video_url": "https://www.youtube.com/watch?v=ifQp2BliHHE",
                "content_text": (
                    "1924 — Kyrgyz ASSR kuruldu\n"
                    "1936 — Kyrgyz SSR\n"
                    "1991 — 31 avgust: egemenduuluk jariyalandy\n\n"
                    "Manas aytmaty, Frunze (Bishkek), Chyngyz Aitmatov — "
                    "madaniyet kuruu."
                ),
                "quizzes": [
                    quiz(
                        "Kyrgyzstan egemenduuluk algan kun:",
                        make_options("31 avgust 1991", "9 mai 1945", "7 apr 2010", "1 yan 2000"),
                        "a",
                        order=1,
                    ),
                    quiz(
                        "Bishkek mu rada emne dep atalgans?",
                        make_options("Frunze", "Osh", "Alma-Ata", "Tashkent"),
                        "a",
                        order=2,
                    ),
                    quiz(
                        "Kyrgyz SSR kaç-jylda kuruldu?",
                        make_options("1936", "1917", "1991", "1865"),
                        "a",
                        order=3,
                    ),
                ],
            },
        ],
    },
    {
        "slug": "anglis-tili",
        "name_kg": "Англис тили",
        "name_ru": "Английский язык",
        "icon_name": "languages",
        "sort_order": 10,
        "topics": [
            {
                "title": "Present Simple vs Present Continuous",
                "section_title": "Grammar — Tenses",
                "sort_order": 1,
                "video_url": "https://www.youtube.com/watch?v=3W3ZR7ksh8g",
                "content_text": (
                    "Present Simple — adat, doimiy faktiler, расписание:\n"
                    "• I go to school every day.\n"
                    "• She works in Bishkek.\n"
                    "Forma: V1 / V1+s (he/she/it)\n\n"
                    "Present Continuous — azir bolup jatkan ish:\n"
                    "• I am reading now.\n"
                    "• They are playing football.\n"
                    "Forma: am/is/are + V-ing\n\n"
                    "Signal sozдор (Continuous): now, at the moment, today, look!\n"
                    "Signal sozдор (Simple): always, usually, every day, often."
                ),
                "quizzes": [
                    quiz(
                        "She ___ to school every day. (go)",
                        make_options("goes", "is going", "going", "goed"),
                        "a",
                        order=1,
                    ),
                    quiz(
                        "I ___ my homework now. (do)",
                        make_options("am doing", "do", "does", "did"),
                        "a",
                        order=2,
                    ),
                    quiz(
                        "Which sentence is Present Continuous?",
                        make_options("They are watching TV.", "He plays tennis.", "We live in Osh.", "It rains a lot."),
                        "a",
                        order=3,
                    ),
                    quiz(
                        "He usually ___ coffee. (drink)",
                        make_options("drinks", "is drinking", "drinking", "drank"),
                        "a",
                        order=4,
                    ),
                ],
            },
            {
                "title": "Past Simple жana kelечек убакыт (Future)",
                "section_title": "Grammar — Advanced",
                "sort_order": 2,
                "video_url": "https://www.youtube.com/watch?v=1EbMX48ZOps",
                "content_text": (
                    "Past Simple — ötкön ish:\n"
                    "• I visited Issyk-Kul last summer.\n"
                    "Forma: V2 (regular: -ed, irregular: went, saw)\n\n"
                    "Future Simple: will + V1\n"
                    "• I will study abroad next year.\n\n"
                    "Going to: plan\n"
                    "• We are going to travel to Naryn."
                ),
                "quizzes": [
                    quiz(
                        "Yesterday I ___ (see) a film.",
                        make_options("saw", "see", "seen", "seeing"),
                        "a",
                        order=1,
                    ),
                    quiz(
                        "I ___ help you tomorrow. (will)",
                        make_options("will", "am", "was", "did"),
                        "a",
                        order=2,
                    ),
                    quiz(
                        "Past Simple negativ: He ___ go.",
                        make_options("didn't", "doesn't", "isn't", "wasn't"),
                        "a",
                        order=3,
                    ),
                ],
            },
        ],
    },
    {
        "slug": "informatika",
        "name_kg": "Информатика",
        "name_ru": "Информатика",
        "icon_name": "monitor",
        "sort_order": 11,
        "topics": [
            {
                "title": "Алгоритмдер жана Программалоонун негиздери (Python)",
                "section_title": "Programmaloo",
                "sort_order": 1,
                "video_url": "https://www.youtube.com/watch?v=rfscVS0vtbw",
                "content_text": (
                    "Algoritm — maseleni chyechuu uchun kadam-kadam jönoosu.\n\n"
                    "Algoritm türleri:\n"
                    "• Sikli (loop)\n"
                    "• Sharttuu (if-else)\n"
                    "• Ketme-ket (sequence)\n\n"
                    "Python — oquu uchun eng qulay til:\n"
                    "```python\n"
                    "name = 'Aijan'\n"
                    "print('Salam,', name)\n\n"
                    "for i in range(5):\n"
                    "    print(i * 2)\n"
                    "```\n\n"
                    "O'zgaruvchilar: int, float, str, bool, list.\n"
                    "Kyrgyzstanda IT sektory o'sup, Python talabı artıyor."
                ),
                "quizzes": [
                    quiz(
                        "Python'da print('Salam') emne qilat?",
                        make_options("Ekranga chiqaradi", "O'chiradi", "Saqlaydi", "Hisoblaydi"),
                        "a",
                        order=1,
                    ),
                    quiz(
                        "range(3) qanday sonlarni beret?",
                        make_options("0, 1, 2", "1, 2, 3", "0, 1, 2, 3", "3, 2, 1"),
                        "a",
                        order=2,
                    ),
                    quiz(
                        "if x > 5: — kanday tuzulush?",
                        make_options("Sharttuu (conditional)", "Sikl", "Funksiya", "Klass"),
                        "a",
                        order=3,
                    ),
                    quiz(
                        "5 // 2 natijasy Python'da:",
                        make_options("2", "2.5", "3", "1"),
                        "a",
                        order=4,
                    ),
                ],
            },
            {
                "title": "Ma'lumotlar tuzulushu: massiv, list, funksiya",
                "section_title": "Data Structures",
                "sort_order": 2,
                "video_url": "https://www.youtube.com/watch?v=pkYVOmU3MgA",
                "content_text": (
                    "List (Python): numbers = [1, 2, 3, 5, 8]\n"
                    "numbers[0] → 1\n\n"
                    "Funksiya:\n"
                    "```python\n"
                    "def salam(aty):\n"
                    "    return f'Salam, {aty}!'\n"
                    "```\n\n"
                    "Algoritm murattaluu: O(n), O(log n) — tezlik."
                ),
                "quizzes": [
                    quiz(
                        "[1, 2, 3][1] natijasy:",
                        make_options("2", "1", "3", "0"),
                        "a",
                        order=1,
                    ),
                    quiz(
                        "def — emne?",
                        make_options("Funksiya aniqlash", "Sikl", "Shart", "O'zgaruvchi"),
                        "a",
                        order=2,
                    ),
                    quiz(
                        "len([10, 20, 30]) = ?",
                        make_options("3", "30", "10", "1"),
                        "a",
                        order=3,
                    ),
                ],
            },
        ],
    },
    {
        "slug": "orus-tili",
        "name_kg": "Орус тили",
        "name_ru": "Русский язык",
        "icon_name": "message-square",
        "sort_order": 12,
        "topics": [
            {
                "title": "Имя существительное и правила правописания",
                "section_title": "Морфология",
                "sort_order": 1,
                "video_url": "https://www.youtube.com/watch?v=0EnDcv31KfY",
                "content_text": (
                    "Имя существительное — предмет, лицо, понятие обозначает.\n\n"
                    "Род: мужской (стол), женский (книга), средний (окно).\n\n"
                    "Падежи (6):\n"
                    "И.п. кто? что? — ученик\n"
                    "Р.п. кого? чего? — ученика\n"
                    "Д.п. кому? чему? — ученику\n"
                    "В.п. кого? что? — ученика\n"
                    "Т.п. кем? чем? — учеником\n"
                    "П.п. о ком? о чём? — об ученике\n\n"
                    "Правописание: -н- и -нн- (сумка, грамм), "
                    "жи-ши с буквой и, не с ы."
                ),
                "quizzes": [
                    quiz(
                        "«книга» — какой род?",
                        make_options("Женский", "Мужской", "Средний", "Общий"),
                        "a",
                        order=1,
                    ),
                    quiz(
                        "Сколько падежей в русском языке?",
                        make_options("6", "4", "5", "7"),
                        "a",
                        order=2,
                    ),
                    quiz(
                        "«об ученике» — какой падеж?",
                        make_options("Предложный (П.п.)", "Родительный", "Дательный", "Творительный"),
                        "a",
                        order=3,
                    ),
                    quiz(
                        "Как пишется: ж___ sh?",
                        make_options("жи-ши (и)", "жы-шы (ы)", "же-ше", "жо-шо"),
                        "a",
                        order=4,
                    ),
                ],
            },
            {
                "title": "Глагол, спряжение и сложное предложение",
                "section_title": "Синтаксис",
                "sort_order": 2,
                "video_url": "https://www.youtube.com/watch?v=8VtANne0X4k",
                "content_text": (
                    "Глагол — действие: читать, писать, думать.\n\n"
                    "Спряжение I: чита-ю, чита-ешь\n"
                    "Спряжение II: говор-ю, говор-ишь\n\n"
                    "Сложное предложение: главная + придаточная часть.\n"
                    "Пример: Я знаю, что он учится в школе."
                ),
                "quizzes": [
                    quiz(
                        "«читаю» — какое спряжение?",
                        make_options("I спряжение", "II спряжение", "III", "Без спряжения"),
                        "a",
                        order=1,
                    ),
                    quiz(
                        "Глагол обозначает:",
                        make_options("Действие", "Предмет", "Признак", "Количество"),
                        "a",
                        order=2,
                    ),
                    quiz(
                        "В предложении «Я знаю, что он пришёл» — «что он пришёл»:",
                        make_options("Придаточная часть", "Главная часть", "Подлежащее", "Сказуемое"),
                        "a",
                        order=3,
                    ),
                ],
            },
        ],
    },
]


class Command(BaseCommand):
    help = "BilimHub окуu материалдарын (12 предмет, темalar, testter) базaga kiritet."

    def add_arguments(self, parser):
        parser.add_argument(
            "--clear",
            action="store_true",
            help="Barдыk Subject, Topic, Quiz maalumatтарын өчүрүп, кайра түзөт.",
        )

    def handle(self, *args, **options):
        if options["clear"]:
            self.stdout.write("Clearing existing educational data...")
            with transaction.atomic():
                Quiz.objects.all().delete()
                Topic.objects.all().delete()
                Subject.objects.all().delete()

        stats = {"subjects": 0, "topics": 0, "quizzes": 0, "created_subjects": 0}

        with transaction.atomic():
            for subject_data in SEED_DATA:
                subject, created = Subject.objects.get_or_create(
                    slug=subject_data["slug"],
                    defaults={
                        "name_kg": subject_data["name_kg"],
                        "name_ru": subject_data["name_ru"],
                        "icon_name": subject_data["icon_name"],
                        "sort_order": subject_data["sort_order"],
                        "is_active": True,
                    },
                )
                if not created:
                    Subject.objects.filter(pk=subject.pk).update(
                        name_kg=subject_data["name_kg"],
                        name_ru=subject_data["name_ru"],
                        icon_name=subject_data["icon_name"],
                        sort_order=subject_data["sort_order"],
                        is_active=True,
                    )

                stats["subjects"] += 1
                if created:
                    stats["created_subjects"] += 1

                for topic_data in subject_data["topics"]:
                    topic, topic_created = Topic.objects.get_or_create(
                        subject=subject,
                        title=topic_data["title"],
                        defaults={
                            "content_text": topic_data["content_text"],
                            "video_url": topic_data.get("video_url", ""),
                            "section_title": topic_data.get("section_title", "Негизги бөлүм"),
                            "sort_order": topic_data.get("sort_order", 0),
                            "is_published": True,
                        },
                    )
                    if not topic_created:
                        Topic.objects.filter(pk=topic.pk).update(
                            content_text=topic_data["content_text"],
                            video_url=topic_data.get("video_url", ""),
                            section_title=topic_data.get("section_title", "Негизги бөлүм"),
                            sort_order=topic_data.get("sort_order", 0),
                            is_published=True,
                        )

                    stats["topics"] += 1

                    for quiz_data in topic_data["quizzes"]:
                        _, quiz_created = Quiz.objects.get_or_create(
                            topic=topic,
                            question_text=quiz_data["question_text"],
                            defaults={
                                "options": quiz_data["options"],
                                "correct_answer": quiz_data["correct_answer"],
                                "points": quiz_data.get("points", 2),
                                "sort_order": quiz_data.get("sort_order", 0),
                                "is_active": True,
                            },
                        )
                        stats["quizzes"] += 1
                        if quiz_created:
                            pass

        self.stdout.write(
            self.style.SUCCESS(
                f"Seed done: {stats['subjects']} subjects, "
                f"{stats['topics']} topics, {stats['quizzes']} quiz questions "
                f"(new subjects: {stats['created_subjects']}).",
            ),
        )
        self.stdout.write(
            "Check: python manage.py shell -c "
            "\"from core_educational.models import Subject; print(Subject.objects.count())\"",
        )
