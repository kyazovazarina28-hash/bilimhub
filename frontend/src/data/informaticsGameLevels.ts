export interface InformaticsGameOption {
  id: number;
  text: string;
  isCorrect: boolean;
}

export interface InformaticsGameLevel {
  id: number;
  character: string;
  speech: string;
  question: string;
  icon: string;
  tag: string;
  options: InformaticsGameOption[];
}

export const informaticsGameLevels: InformaticsGameLevel[] = [
  {
    "id": 1,
    "character": "КИБЕР РОБОТ АЙТАТ:",
    "speech": "Компьютерлер бардык маалыматтарды 0 жана 1 деген эки гана цифрадан турган код менен кабыл алышат.",
    "question": "Компьютердеги маалыматтарды иштетүүчү 0 жана 1ден турган система кандай аталат?",
    "icon": "💻",
    "tag": "⚡ САНАРИПТИК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Экилик система (Binary system) 💾",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Ондук система 🔢",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Римдик система 🏛️",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 2,
    "character": "АКЫЛДУУ КОМПЬЮТЕР АЙТАТ:",
    "speech": "Компьютерге берилген тапшырмалардын так, кадам-кадам менен жазылган ырааттуулугу.",
    "question": "Маселени чечүү үчүн аткарыла турган аракеттердин так ырааттуулугу?",
    "icon": "🤖",
    "tag": "⚡ САНАРИПТИК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Алгоритм (Algorithm) ⚡",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Браузер 🌐",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Монитор 📺",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 3,
    "character": "ПРОГРАММА АЙТАТ:",
    "speech": "Мен компьютерге эмне кылууну айтып берем.",
    "question": "Программа деген эмне?",
    "icon": "💾",
    "tag": "💻 ПРОГРАММДОО",
    "options": [
      {
        "id": 1,
        "text": "1) Компьютерге тапшырма берген код",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Монитор",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Клавиатура",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 4,
    "character": "БРАУЗЕР АЙТАТ:",
    "speech": "Мен интернет барактарын көрсөтөм.",
    "question": "Браузер деген эмне?",
    "icon": "👾",
    "tag": "💻 ПРОГРАММДОО",
    "options": [
      {
        "id": 1,
        "text": "1) Интернет барактарын көрсөткөн программа",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Операциялык система",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Принтер",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 5,
    "character": "ОПЕРАЦИЯЛЫК СИСТЕМА АЙТАТ:",
    "speech": "Мен компьютердин негизги программасымын.",
    "question": "Операциялык система деген эмне?",
    "icon": "⚡",
    "tag": "💻 ПРОГРАММДОО",
    "options": [
      {
        "id": 1,
        "text": "1) Компьютердин негизги программасы",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Оюн гана",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Сүрөт",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 6,
    "character": "КЛАВИАТУРА АЙТАТ:",
    "speech": "Мен тамгаларды терүүгө жардам берем.",
    "question": "Клавиатура деген эмне?",
    "icon": "🖥️",
    "tag": "🖥️ ЖАБДЫКТАР",
    "options": [
      {
        "id": 1,
        "text": "1) Тамгаларды терүүчү түзмөк",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Экран",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Чыгаруу түзмөгү",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 7,
    "character": "МЫШКА АЙТАТ:",
    "speech": "Мен курсорду жылдырам.",
    "question": "Компьютердеги 'мышка' деген эмне?",
    "icon": "🌐",
    "tag": "🖥️ ЖАБДЫКТАР",
    "options": [
      {
        "id": 1,
        "text": "1) Курсорду башкаруучу түзмөк",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Принтер",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Динамик",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 8,
    "character": "МОНИТОР АЙТАТ:",
    "speech": "Мен сүрөттү көрсөтөм.",
    "question": "Монитор деген эмне?",
    "icon": "📁",
    "tag": "🖥️ ЖАБДЫКТАР",
    "options": [
      {
        "id": 1,
        "text": "1) Сүрөттү көрсөткөн түзмөк",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Клавиатура",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Мышка",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 9,
    "character": "ПРИНТЕР АЙТАТ:",
    "speech": "Мен документти кагазга чыгарам.",
    "question": "Принтер деген эмне?",
    "icon": "🔐",
    "tag": "🖥️ ЖАБДЫКТАР",
    "options": [
      {
        "id": 1,
        "text": "1) Кагазга чыгаруучу түзмөк",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Монитор",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Клавиатура",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 10,
    "character": "ИНТЕРНЕТ АЙТАТ:",
    "speech": "Мен дүйнө жүзүндөгү компьютерлерди байланыштырам.",
    "question": "Интернет деген эмне?",
    "icon": "🦠",
    "tag": "⚡ САНАРИПТИК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Дүйнөлүк компьютердик тармак",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Оюн гана",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Китеп",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 11,
    "character": "ФАЙЛ АЙТАТ:",
    "speech": "Мен маалыматты сактайм.",
    "question": "Файл деген эмне?",
    "icon": "💻",
    "tag": "💾 МААЛЫМАТ",
    "options": [
      {
        "id": 1,
        "text": "1) Сакталган маалымат",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Монитор",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Кабель",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 12,
    "character": "ПАПКА АЙТАТ:",
    "speech": "Мен файлдарды топтойм.",
    "question": "Папка (folder) деген эмне?",
    "icon": "🤖",
    "tag": "💾 МААЛЫМАТ",
    "options": [
      {
        "id": 1,
        "text": "1) Файлдарды топтогон орун",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Принтер",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Мышка",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 13,
    "character": "БАЙТ АЙТАТ:",
    "speech": "Мен маалыматтын өлчөм бирдигимин.",
    "question": "Байт деген эмне?",
    "icon": "💾",
    "tag": "💾 МААЛЫМАТ",
    "options": [
      {
        "id": 1,
        "text": "1) Маалыматтын өлчөм бирдиги",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Тамга",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Сүрөт гана",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 14,
    "character": "ПРОЦЕССОР АЙТАТ:",
    "speech": "Мен компьютердин 'мээси'мин.",
    "question": "Процессор деген эмне?",
    "icon": "👾",
    "tag": "🖥️ ЖАБДЫКТАР",
    "options": [
      {
        "id": 1,
        "text": "1) Компьютердин негизги иштетүүчүсү",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Монитор",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Принтер",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 15,
    "character": "КОД АЙТАТ:",
    "speech": "Мен программанын негизин түзөм.",
    "question": "Код деген эмне?",
    "icon": "⚡",
    "tag": "💻 ПРОГРАММДОО",
    "options": [
      {
        "id": 1,
        "text": "1) Программанын жазылган тили",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Оюн",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Сүрөт",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 16,
    "character": "ЦИКЛ АЙТАТ:",
    "speech": "Мен бир аракетти кайталайм.",
    "question": "Программадагы цикл деген эмне?",
    "icon": "🖥️",
    "tag": "💻 ПРОГРАММДОО",
    "options": [
      {
        "id": 1,
        "text": "1) Аракетти кайталоо",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Токтотуу гана",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Өчүрүү",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 17,
    "character": "ШАРТ АЙТАТ:",
    "speech": "Мен 'эгер' деген суроого жооп берем.",
    "question": "Шарт (if) деген эмне?",
    "icon": "🌐",
    "tag": "💻 ПРОГРАММДОО",
    "options": [
      {
        "id": 1,
        "text": "1) Эгер деген шарттуу аракет",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Цикл",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Файл",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 18,
    "character": "ВИРУС АЙТАТ:",
    "speech": "Мен компьютерге зыян келтире алам.",
    "question": "Компьютер вирусу деген эмне?",
    "icon": "📁",
    "tag": "🔒 КИБЕР КООПСУЗДУК",
    "options": [
      {
        "id": 1,
        "text": "1) Зыян келтирген программа",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Оюн",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Браузер",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 19,
    "character": "ПАРОЛЬ АЙТАТ:",
    "speech": "Мен сырдуу маалыматты коргойм.",
    "question": "Пароль деген эмне?",
    "icon": "🔐",
    "tag": "🔒 КИБЕР КООПСУЗДУК",
    "options": [
      {
        "id": 1,
        "text": "1) Кирүү үчүн сыр сөз",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Файл аты",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Сүрөт",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 20,
    "character": "РОБОТ АЙТАТ:",
    "speech": "Мен программа менен иштейм.",
    "question": "Робот деген эмне?",
    "icon": "🦠",
    "tag": "⚡ САНАРИПТИК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Программа менен иштеген машина",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Китеп",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Дарыя",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 21,
    "character": "КИБЕР РОБОТ АЙТАТ:",
    "speech": "Компьютерлер бардык маалыматтарды 0 жана 1 деген эки гана цифрадан турган код менен кабыл алышат.",
    "question": "Компьютердеги маалыматтарды иштетүүчү 0 жана 1ден турган система кандай аталат?",
    "icon": "💻",
    "tag": "⚡ САНАРИПТИК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Экилик система (Binary system) 💾",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Ондук система 🔢",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Римдик система 🏛️",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 22,
    "character": "АКЫЛДУУ КОМПЬЮТЕР АЙТАТ:",
    "speech": "Компьютерге берилген тапшырмалардын так, кадам-кадам менен жазылган ырааттуулугу.",
    "question": "Маселени чечүү үчүн аткарыла турган аракеттердин так ырааттуулугу?",
    "icon": "🤖",
    "tag": "⚡ САНАРИПТИК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Алгоритм (Algorithm) ⚡",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Браузер 🌐",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Монитор 📺",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 23,
    "character": "ПРОГРАММА АЙТАТ:",
    "speech": "Мен компьютерге эмне кылууну айтып берем.",
    "question": "Программа деген эмне?",
    "icon": "💾",
    "tag": "💻 ПРОГРАММДОО",
    "options": [
      {
        "id": 1,
        "text": "1) Компьютерге тапшырма берген код",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Монитор",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Клавиатура",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 24,
    "character": "БРАУЗЕР АЙТАТ:",
    "speech": "Мен интернет барактарын көрсөтөм.",
    "question": "Браузер деген эмне?",
    "icon": "👾",
    "tag": "💻 ПРОГРАММДОО",
    "options": [
      {
        "id": 1,
        "text": "1) Интернет барактарын көрсөткөн программа",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Операциялык система",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Принтер",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 25,
    "character": "ОПЕРАЦИЯЛЫК СИСТЕМА АЙТАТ:",
    "speech": "Мен компьютердин негизги программасымын.",
    "question": "Операциялык система деген эмне?",
    "icon": "⚡",
    "tag": "💻 ПРОГРАММДОО",
    "options": [
      {
        "id": 1,
        "text": "1) Компьютердин негизги программасы",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Оюн гана",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Сүрөт",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 26,
    "character": "КЛАВИАТУРА АЙТАТ:",
    "speech": "Мен тамгаларды терүүгө жардам берем.",
    "question": "Клавиатура деген эмне?",
    "icon": "🖥️",
    "tag": "🖥️ ЖАБДЫКТАР",
    "options": [
      {
        "id": 1,
        "text": "1) Тамгаларды терүүчү түзмөк",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Экран",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Чыгаруу түзмөгү",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 27,
    "character": "МЫШКА АЙТАТ:",
    "speech": "Мен курсорду жылдырам.",
    "question": "Компьютердеги 'мышка' деген эмне?",
    "icon": "🌐",
    "tag": "🖥️ ЖАБДЫКТАР",
    "options": [
      {
        "id": 1,
        "text": "1) Курсорду башкаруучу түзмөк",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Принтер",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Динамик",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 28,
    "character": "МОНИТОР АЙТАТ:",
    "speech": "Мен сүрөттү көрсөтөм.",
    "question": "Монитор деген эмне?",
    "icon": "📁",
    "tag": "🖥️ ЖАБДЫКТАР",
    "options": [
      {
        "id": 1,
        "text": "1) Сүрөттү көрсөткөн түзмөк",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Клавиатура",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Мышка",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 29,
    "character": "ПРИНТЕР АЙТАТ:",
    "speech": "Мен документти кагазга чыгарам.",
    "question": "Принтер деген эмне?",
    "icon": "🔐",
    "tag": "🖥️ ЖАБДЫКТАР",
    "options": [
      {
        "id": 1,
        "text": "1) Кагазга чыгаруучу түзмөк",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Монитор",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Клавиатура",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 30,
    "character": "ИНТЕРНЕТ АЙТАТ:",
    "speech": "Мен дүйнө жүзүндөгү компьютерлерди байланыштырам.",
    "question": "Интернет деген эмне?",
    "icon": "🦠",
    "tag": "⚡ САНАРИПТИК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Дүйнөлүк компьютердик тармак",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Оюн гана",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Китеп",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 31,
    "character": "ФАЙЛ АЙТАТ:",
    "speech": "Мен маалыматты сактайм.",
    "question": "Файл деген эмне?",
    "icon": "💻",
    "tag": "💾 МААЛЫМАТ",
    "options": [
      {
        "id": 1,
        "text": "1) Сакталган маалымат",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Монитор",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Кабель",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 32,
    "character": "ПАПКА АЙТАТ:",
    "speech": "Мен файлдарды топтойм.",
    "question": "Папка (folder) деген эмне?",
    "icon": "🤖",
    "tag": "💾 МААЛЫМАТ",
    "options": [
      {
        "id": 1,
        "text": "1) Файлдарды топтогон орун",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Принтер",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Мышка",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 33,
    "character": "БАЙТ АЙТАТ:",
    "speech": "Мен маалыматтын өлчөм бирдигимин.",
    "question": "Байт деген эмне?",
    "icon": "💾",
    "tag": "💾 МААЛЫМАТ",
    "options": [
      {
        "id": 1,
        "text": "1) Маалыматтын өлчөм бирдиги",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Тамга",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Сүрөт гана",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 34,
    "character": "ПРОЦЕССОР АЙТАТ:",
    "speech": "Мен компьютердин 'мээси'мин.",
    "question": "Процессор деген эмне?",
    "icon": "👾",
    "tag": "🖥️ ЖАБДЫКТАР",
    "options": [
      {
        "id": 1,
        "text": "1) Компьютердин негизги иштетүүчүсү",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Монитор",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Принтер",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 35,
    "character": "КОД АЙТАТ:",
    "speech": "Мен программанын негизин түзөм.",
    "question": "Код деген эмне?",
    "icon": "⚡",
    "tag": "💻 ПРОГРАММДОО",
    "options": [
      {
        "id": 1,
        "text": "1) Программанын жазылган тили",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Оюн",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Сүрөт",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 36,
    "character": "ЦИКЛ АЙТАТ:",
    "speech": "Мен бир аракетти кайталайм.",
    "question": "Программадагы цикл деген эмне?",
    "icon": "🖥️",
    "tag": "💻 ПРОГРАММДОО",
    "options": [
      {
        "id": 1,
        "text": "1) Аракетти кайталоо",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Токтотуу гана",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Өчүрүү",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 37,
    "character": "ШАРТ АЙТАТ:",
    "speech": "Мен 'эгер' деген суроого жооп берем.",
    "question": "Шарт (if) деген эмне?",
    "icon": "🌐",
    "tag": "💻 ПРОГРАММДОО",
    "options": [
      {
        "id": 1,
        "text": "1) Эгер деген шарттуу аракет",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Цикл",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Файл",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 38,
    "character": "ВИРУС АЙТАТ:",
    "speech": "Мен компьютерге зыян келтире алам.",
    "question": "Компьютер вирусу деген эмне?",
    "icon": "📁",
    "tag": "🔒 КИБЕР КООПСУЗДУК",
    "options": [
      {
        "id": 1,
        "text": "1) Зыян келтирген программа",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Оюн",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Браузер",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 39,
    "character": "ПАРОЛЬ АЙТАТ:",
    "speech": "Мен сырдуу маалыматты коргойм.",
    "question": "Пароль деген эмне?",
    "icon": "🔐",
    "tag": "🔒 КИБЕР КООПСУЗДУК",
    "options": [
      {
        "id": 1,
        "text": "1) Кирүү үчүн сыр сөз",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Файл аты",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Сүрөт",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 40,
    "character": "РОБОТ АЙТАТ:",
    "speech": "Мен программа менен иштейм.",
    "question": "Робот деген эмне?",
    "icon": "🦠",
    "tag": "⚡ САНАРИПТИК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Программа менен иштеген машина",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Китеп",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Дарыя",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 41,
    "character": "КИБЕР РОБОТ АЙТАТ:",
    "speech": "Компьютерлер бардык маалыматтарды 0 жана 1 деген эки гана цифрадан турган код менен кабыл алышат.",
    "question": "Компьютердеги маалыматтарды иштетүүчү 0 жана 1ден турган система кандай аталат?",
    "icon": "💻",
    "tag": "⚡ САНАРИПТИК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Экилик система (Binary system) 💾",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Ондук система 🔢",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Римдик система 🏛️",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 42,
    "character": "АКЫЛДУУ КОМПЬЮТЕР АЙТАТ:",
    "speech": "Компьютерге берилген тапшырмалардын так, кадам-кадам менен жазылган ырааттуулугу.",
    "question": "Маселени чечүү үчүн аткарыла турган аракеттердин так ырааттуулугу?",
    "icon": "🤖",
    "tag": "⚡ САНАРИПТИК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Алгоритм (Algorithm) ⚡",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Браузер 🌐",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Монитор 📺",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 43,
    "character": "ПРОГРАММА АЙТАТ:",
    "speech": "Мен компьютерге эмне кылууну айтып берем.",
    "question": "Программа деген эмне?",
    "icon": "💾",
    "tag": "💻 ПРОГРАММДОО",
    "options": [
      {
        "id": 1,
        "text": "1) Компьютерге тапшырма берген код",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Монитор",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Клавиатура",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 44,
    "character": "БРАУЗЕР АЙТАТ:",
    "speech": "Мен интернет барактарын көрсөтөм.",
    "question": "Браузер деген эмне?",
    "icon": "👾",
    "tag": "💻 ПРОГРАММДОО",
    "options": [
      {
        "id": 1,
        "text": "1) Интернет барактарын көрсөткөн программа",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Операциялык система",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Принтер",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 45,
    "character": "ОПЕРАЦИЯЛЫК СИСТЕМА АЙТАТ:",
    "speech": "Мен компьютердин негизги программасымын.",
    "question": "Операциялык система деген эмне?",
    "icon": "⚡",
    "tag": "💻 ПРОГРАММДОО",
    "options": [
      {
        "id": 1,
        "text": "1) Компьютердин негизги программасы",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Оюн гана",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Сүрөт",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 46,
    "character": "КЛАВИАТУРА АЙТАТ:",
    "speech": "Мен тамгаларды терүүгө жардам берем.",
    "question": "Клавиатура деген эмне?",
    "icon": "🖥️",
    "tag": "🖥️ ЖАБДЫКТАР",
    "options": [
      {
        "id": 1,
        "text": "1) Тамгаларды терүүчү түзмөк",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Экран",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Чыгаруу түзмөгү",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 47,
    "character": "МЫШКА АЙТАТ:",
    "speech": "Мен курсорду жылдырам.",
    "question": "Компьютердеги 'мышка' деген эмне?",
    "icon": "🌐",
    "tag": "🖥️ ЖАБДЫКТАР",
    "options": [
      {
        "id": 1,
        "text": "1) Курсорду башкаруучу түзмөк",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Принтер",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Динамик",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 48,
    "character": "МОНИТОР АЙТАТ:",
    "speech": "Мен сүрөттү көрсөтөм.",
    "question": "Монитор деген эмне?",
    "icon": "📁",
    "tag": "🖥️ ЖАБДЫКТАР",
    "options": [
      {
        "id": 1,
        "text": "1) Сүрөттү көрсөткөн түзмөк",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Клавиатура",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Мышка",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 49,
    "character": "ПРИНТЕР АЙТАТ:",
    "speech": "Мен документти кагазга чыгарам.",
    "question": "Принтер деген эмне?",
    "icon": "🔐",
    "tag": "🖥️ ЖАБДЫКТАР",
    "options": [
      {
        "id": 1,
        "text": "1) Кагазга чыгаруучу түзмөк",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Монитор",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Клавиатура",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 50,
    "character": "ИНТЕРНЕТ АЙТАТ:",
    "speech": "Мен дүйнө жүзүндөгү компьютерлерди байланыштырам.",
    "question": "Интернет деген эмне?",
    "icon": "🦠",
    "tag": "⚡ САНАРИПТИК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Дүйнөлүк компьютердик тармак",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Оюн гана",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Китеп",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 51,
    "character": "ФАЙЛ АЙТАТ:",
    "speech": "Мен маалыматты сактайм.",
    "question": "Файл деген эмне?",
    "icon": "💻",
    "tag": "💾 МААЛЫМАТ",
    "options": [
      {
        "id": 1,
        "text": "1) Сакталган маалымат",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Монитор",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Кабель",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 52,
    "character": "ПАПКА АЙТАТ:",
    "speech": "Мен файлдарды топтойм.",
    "question": "Папка (folder) деген эмне?",
    "icon": "🤖",
    "tag": "💾 МААЛЫМАТ",
    "options": [
      {
        "id": 1,
        "text": "1) Файлдарды топтогон орун",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Принтер",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Мышка",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 53,
    "character": "БАЙТ АЙТАТ:",
    "speech": "Мен маалыматтын өлчөм бирдигимин.",
    "question": "Байт деген эмне?",
    "icon": "💾",
    "tag": "💾 МААЛЫМАТ",
    "options": [
      {
        "id": 1,
        "text": "1) Маалыматтын өлчөм бирдиги",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Тамга",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Сүрөт гана",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 54,
    "character": "ПРОЦЕССОР АЙТАТ:",
    "speech": "Мен компьютердин 'мээси'мин.",
    "question": "Процессор деген эмне?",
    "icon": "👾",
    "tag": "🖥️ ЖАБДЫКТАР",
    "options": [
      {
        "id": 1,
        "text": "1) Компьютердин негизги иштетүүчүсү",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Монитор",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Принтер",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 55,
    "character": "КОД АЙТАТ:",
    "speech": "Мен программанын негизин түзөм.",
    "question": "Код деген эмне?",
    "icon": "⚡",
    "tag": "💻 ПРОГРАММДОО",
    "options": [
      {
        "id": 1,
        "text": "1) Программанын жазылган тили",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Оюн",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Сүрөт",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 56,
    "character": "ЦИКЛ АЙТАТ:",
    "speech": "Мен бир аракетти кайталайм.",
    "question": "Программадагы цикл деген эмне?",
    "icon": "🖥️",
    "tag": "💻 ПРОГРАММДОО",
    "options": [
      {
        "id": 1,
        "text": "1) Аракетти кайталоо",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Токтотуу гана",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Өчүрүү",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 57,
    "character": "ШАРТ АЙТАТ:",
    "speech": "Мен 'эгер' деген суроого жооп берем.",
    "question": "Шарт (if) деген эмне?",
    "icon": "🌐",
    "tag": "💻 ПРОГРАММДОО",
    "options": [
      {
        "id": 1,
        "text": "1) Эгер деген шарттуу аракет",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Цикл",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Файл",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 58,
    "character": "ВИРУС АЙТАТ:",
    "speech": "Мен компьютерге зыян келтире алам.",
    "question": "Компьютер вирусу деген эмне?",
    "icon": "📁",
    "tag": "🔒 КИБЕР КООПСУЗДУК",
    "options": [
      {
        "id": 1,
        "text": "1) Зыян келтирген программа",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Оюн",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Браузер",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 59,
    "character": "ПАРОЛЬ АЙТАТ:",
    "speech": "Мен сырдуу маалыматты коргойм.",
    "question": "Пароль деген эмне?",
    "icon": "🔐",
    "tag": "🔒 КИБЕР КООПСУЗДУК",
    "options": [
      {
        "id": 1,
        "text": "1) Кирүү үчүн сыр сөз",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Файл аты",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Сүрөт",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 60,
    "character": "РОБОТ АЙТАТ:",
    "speech": "Мен программа менен иштейм.",
    "question": "Робот деген эмне?",
    "icon": "🦠",
    "tag": "⚡ САНАРИПТИК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Программа менен иштеген машина",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Китеп",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Дарыя",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 61,
    "character": "КИБЕР РОБОТ АЙТАТ:",
    "speech": "Компьютерлер бардык маалыматтарды 0 жана 1 деген эки гана цифрадан турган код менен кабыл алышат.",
    "question": "Компьютердеги маалыматтарды иштетүүчү 0 жана 1ден турган система кандай аталат?",
    "icon": "💻",
    "tag": "⚡ САНАРИПТИК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Экилик система (Binary system) 💾",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Ондук система 🔢",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Римдик система 🏛️",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 62,
    "character": "АКЫЛДУУ КОМПЬЮТЕР АЙТАТ:",
    "speech": "Компьютерге берилген тапшырмалардын так, кадам-кадам менен жазылган ырааттуулугу.",
    "question": "Маселени чечүү үчүн аткарыла турган аракеттердин так ырааттуулугу?",
    "icon": "🤖",
    "tag": "⚡ САНАРИПТИК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Алгоритм (Algorithm) ⚡",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Браузер 🌐",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Монитор 📺",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 63,
    "character": "ПРОГРАММА АЙТАТ:",
    "speech": "Мен компьютерге эмне кылууну айтып берем.",
    "question": "Программа деген эмне?",
    "icon": "💾",
    "tag": "💻 ПРОГРАММДОО",
    "options": [
      {
        "id": 1,
        "text": "1) Компьютерге тапшырма берген код",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Монитор",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Клавиатура",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 64,
    "character": "БРАУЗЕР АЙТАТ:",
    "speech": "Мен интернет барактарын көрсөтөм.",
    "question": "Браузер деген эмне?",
    "icon": "👾",
    "tag": "💻 ПРОГРАММДОО",
    "options": [
      {
        "id": 1,
        "text": "1) Интернет барактарын көрсөткөн программа",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Операциялык система",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Принтер",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 65,
    "character": "ОПЕРАЦИЯЛЫК СИСТЕМА АЙТАТ:",
    "speech": "Мен компьютердин негизги программасымын.",
    "question": "Операциялык система деген эмне?",
    "icon": "⚡",
    "tag": "💻 ПРОГРАММДОО",
    "options": [
      {
        "id": 1,
        "text": "1) Компьютердин негизги программасы",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Оюн гана",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Сүрөт",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 66,
    "character": "КЛАВИАТУРА АЙТАТ:",
    "speech": "Мен тамгаларды терүүгө жардам берем.",
    "question": "Клавиатура деген эмне?",
    "icon": "🖥️",
    "tag": "🖥️ ЖАБДЫКТАР",
    "options": [
      {
        "id": 1,
        "text": "1) Тамгаларды терүүчү түзмөк",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Экран",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Чыгаруу түзмөгү",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 67,
    "character": "МЫШКА АЙТАТ:",
    "speech": "Мен курсорду жылдырам.",
    "question": "Компьютердеги 'мышка' деген эмне?",
    "icon": "🌐",
    "tag": "🖥️ ЖАБДЫКТАР",
    "options": [
      {
        "id": 1,
        "text": "1) Курсорду башкаруучу түзмөк",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Принтер",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Динамик",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 68,
    "character": "МОНИТОР АЙТАТ:",
    "speech": "Мен сүрөттү көрсөтөм.",
    "question": "Монитор деген эмне?",
    "icon": "📁",
    "tag": "🖥️ ЖАБДЫКТАР",
    "options": [
      {
        "id": 1,
        "text": "1) Сүрөттү көрсөткөн түзмөк",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Клавиатура",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Мышка",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 69,
    "character": "ПРИНТЕР АЙТАТ:",
    "speech": "Мен документти кагазга чыгарам.",
    "question": "Принтер деген эмне?",
    "icon": "🔐",
    "tag": "🖥️ ЖАБДЫКТАР",
    "options": [
      {
        "id": 1,
        "text": "1) Кагазга чыгаруучу түзмөк",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Монитор",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Клавиатура",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 70,
    "character": "ИНТЕРНЕТ АЙТАТ:",
    "speech": "Мен дүйнө жүзүндөгү компьютерлерди байланыштырам.",
    "question": "Интернет деген эмне?",
    "icon": "🦠",
    "tag": "⚡ САНАРИПТИК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Дүйнөлүк компьютердик тармак",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Оюн гана",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Китеп",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 71,
    "character": "ФАЙЛ АЙТАТ:",
    "speech": "Мен маалыматты сактайм.",
    "question": "Файл деген эмне?",
    "icon": "💻",
    "tag": "💾 МААЛЫМАТ",
    "options": [
      {
        "id": 1,
        "text": "1) Сакталган маалымат",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Монитор",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Кабель",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 72,
    "character": "ПАПКА АЙТАТ:",
    "speech": "Мен файлдарды топтойм.",
    "question": "Папка (folder) деген эмне?",
    "icon": "🤖",
    "tag": "💾 МААЛЫМАТ",
    "options": [
      {
        "id": 1,
        "text": "1) Файлдарды топтогон орун",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Принтер",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Мышка",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 73,
    "character": "БАЙТ АЙТАТ:",
    "speech": "Мен маалыматтын өлчөм бирдигимин.",
    "question": "Байт деген эмне?",
    "icon": "💾",
    "tag": "💾 МААЛЫМАТ",
    "options": [
      {
        "id": 1,
        "text": "1) Маалыматтын өлчөм бирдиги",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Тамга",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Сүрөт гана",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 74,
    "character": "ПРОЦЕССОР АЙТАТ:",
    "speech": "Мен компьютердин 'мээси'мин.",
    "question": "Процессор деген эмне?",
    "icon": "👾",
    "tag": "🖥️ ЖАБДЫКТАР",
    "options": [
      {
        "id": 1,
        "text": "1) Компьютердин негизги иштетүүчүсү",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Монитор",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Принтер",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 75,
    "character": "КОД АЙТАТ:",
    "speech": "Мен программанын негизин түзөм.",
    "question": "Код деген эмне?",
    "icon": "⚡",
    "tag": "💻 ПРОГРАММДОО",
    "options": [
      {
        "id": 1,
        "text": "1) Программанын жазылган тили",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Оюн",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Сүрөт",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 76,
    "character": "ЦИКЛ АЙТАТ:",
    "speech": "Мен бир аракетти кайталайм.",
    "question": "Программадагы цикл деген эмне?",
    "icon": "🖥️",
    "tag": "💻 ПРОГРАММДОО",
    "options": [
      {
        "id": 1,
        "text": "1) Аракетти кайталоо",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Токтотуу гана",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Өчүрүү",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 77,
    "character": "ШАРТ АЙТАТ:",
    "speech": "Мен 'эгер' деген суроого жооп берем.",
    "question": "Шарт (if) деген эмне?",
    "icon": "🌐",
    "tag": "💻 ПРОГРАММДОО",
    "options": [
      {
        "id": 1,
        "text": "1) Эгер деген шарттуу аракет",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Цикл",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Файл",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 78,
    "character": "ВИРУС АЙТАТ:",
    "speech": "Мен компьютерге зыян келтире алам.",
    "question": "Компьютер вирусу деген эмне?",
    "icon": "📁",
    "tag": "🔒 КИБЕР КООПСУЗДУК",
    "options": [
      {
        "id": 1,
        "text": "1) Зыян келтирген программа",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Оюн",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Браузер",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 79,
    "character": "ПАРОЛЬ АЙТАТ:",
    "speech": "Мен сырдуу маалыматты коргойм.",
    "question": "Пароль деген эмне?",
    "icon": "🔐",
    "tag": "🔒 КИБЕР КООПСУЗДУК",
    "options": [
      {
        "id": 1,
        "text": "1) Кирүү үчүн сыр сөз",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Файл аты",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Сүрөт",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 80,
    "character": "РОБОТ АЙТАТ:",
    "speech": "Мен программа менен иштейм.",
    "question": "Робот деген эмне?",
    "icon": "🦠",
    "tag": "⚡ САНАРИПТИК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Программа менен иштеген машина",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Китеп",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Дарыя",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 81,
    "character": "КИБЕР РОБОТ АЙТАТ:",
    "speech": "Компьютерлер бардык маалыматтарды 0 жана 1 деген эки гана цифрадан турган код менен кабыл алышат.",
    "question": "Компьютердеги маалыматтарды иштетүүчү 0 жана 1ден турган система кандай аталат?",
    "icon": "💻",
    "tag": "⚡ САНАРИПТИК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Экилик система (Binary system) 💾",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Ондук система 🔢",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Римдик система 🏛️",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 82,
    "character": "АКЫЛДУУ КОМПЬЮТЕР АЙТАТ:",
    "speech": "Компьютерге берилген тапшырмалардын так, кадам-кадам менен жазылган ырааттуулугу.",
    "question": "Маселени чечүү үчүн аткарыла турган аракеттердин так ырааттуулугу?",
    "icon": "🤖",
    "tag": "⚡ САНАРИПТИК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Алгоритм (Algorithm) ⚡",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Браузер 🌐",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Монитор 📺",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 83,
    "character": "ПРОГРАММА АЙТАТ:",
    "speech": "Мен компьютерге эмне кылууну айтып берем.",
    "question": "Программа деген эмне?",
    "icon": "💾",
    "tag": "💻 ПРОГРАММДОО",
    "options": [
      {
        "id": 1,
        "text": "1) Компьютерге тапшырма берген код",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Монитор",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Клавиатура",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 84,
    "character": "БРАУЗЕР АЙТАТ:",
    "speech": "Мен интернет барактарын көрсөтөм.",
    "question": "Браузер деген эмне?",
    "icon": "👾",
    "tag": "💻 ПРОГРАММДОО",
    "options": [
      {
        "id": 1,
        "text": "1) Интернет барактарын көрсөткөн программа",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Операциялык система",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Принтер",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 85,
    "character": "ОПЕРАЦИЯЛЫК СИСТЕМА АЙТАТ:",
    "speech": "Мен компьютердин негизги программасымын.",
    "question": "Операциялык система деген эмне?",
    "icon": "⚡",
    "tag": "💻 ПРОГРАММДОО",
    "options": [
      {
        "id": 1,
        "text": "1) Компьютердин негизги программасы",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Оюн гана",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Сүрөт",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 86,
    "character": "КЛАВИАТУРА АЙТАТ:",
    "speech": "Мен тамгаларды терүүгө жардам берем.",
    "question": "Клавиатура деген эмне?",
    "icon": "🖥️",
    "tag": "🖥️ ЖАБДЫКТАР",
    "options": [
      {
        "id": 1,
        "text": "1) Тамгаларды терүүчү түзмөк",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Экран",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Чыгаруу түзмөгү",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 87,
    "character": "МЫШКА АЙТАТ:",
    "speech": "Мен курсорду жылдырам.",
    "question": "Компьютердеги 'мышка' деген эмне?",
    "icon": "🌐",
    "tag": "🖥️ ЖАБДЫКТАР",
    "options": [
      {
        "id": 1,
        "text": "1) Курсорду башкаруучу түзмөк",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Принтер",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Динамик",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 88,
    "character": "МОНИТОР АЙТАТ:",
    "speech": "Мен сүрөттү көрсөтөм.",
    "question": "Монитор деген эмне?",
    "icon": "📁",
    "tag": "🖥️ ЖАБДЫКТАР",
    "options": [
      {
        "id": 1,
        "text": "1) Сүрөттү көрсөткөн түзмөк",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Клавиатура",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Мышка",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 89,
    "character": "ПРИНТЕР АЙТАТ:",
    "speech": "Мен документти кагазга чыгарам.",
    "question": "Принтер деген эмне?",
    "icon": "🔐",
    "tag": "🖥️ ЖАБДЫКТАР",
    "options": [
      {
        "id": 1,
        "text": "1) Кагазга чыгаруучу түзмөк",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Монитор",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Клавиатура",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 90,
    "character": "ИНТЕРНЕТ АЙТАТ:",
    "speech": "Мен дүйнө жүзүндөгү компьютерлерди байланыштырам.",
    "question": "Интернет деген эмне?",
    "icon": "🦠",
    "tag": "⚡ САНАРИПТИК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Дүйнөлүк компьютердик тармак",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Оюн гана",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Китеп",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 91,
    "character": "ФАЙЛ АЙТАТ:",
    "speech": "Мен маалыматты сактайм.",
    "question": "Файл деген эмне?",
    "icon": "💻",
    "tag": "💾 МААЛЫМАТ",
    "options": [
      {
        "id": 1,
        "text": "1) Сакталган маалымат",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Монитор",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Кабель",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 92,
    "character": "ПАПКА АЙТАТ:",
    "speech": "Мен файлдарды топтойм.",
    "question": "Папка (folder) деген эмне?",
    "icon": "🤖",
    "tag": "💾 МААЛЫМАТ",
    "options": [
      {
        "id": 1,
        "text": "1) Файлдарды топтогон орун",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Принтер",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Мышка",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 93,
    "character": "БАЙТ АЙТАТ:",
    "speech": "Мен маалыматтын өлчөм бирдигимин.",
    "question": "Байт деген эмне?",
    "icon": "💾",
    "tag": "💾 МААЛЫМАТ",
    "options": [
      {
        "id": 1,
        "text": "1) Маалыматтын өлчөм бирдиги",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Тамга",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Сүрөт гана",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 94,
    "character": "ПРОЦЕССОР АЙТАТ:",
    "speech": "Мен компьютердин 'мээси'мин.",
    "question": "Процессор деген эмне?",
    "icon": "👾",
    "tag": "🖥️ ЖАБДЫКТАР",
    "options": [
      {
        "id": 1,
        "text": "1) Компьютердин негизги иштетүүчүсү",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Монитор",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Принтер",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 95,
    "character": "КОД АЙТАТ:",
    "speech": "Мен программанын негизин түзөм.",
    "question": "Код деген эмне?",
    "icon": "⚡",
    "tag": "💻 ПРОГРАММДОО",
    "options": [
      {
        "id": 1,
        "text": "1) Программанын жазылган тили",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Оюн",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Сүрөт",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 96,
    "character": "ЦИКЛ АЙТАТ:",
    "speech": "Мен бир аракетти кайталайм.",
    "question": "Программадагы цикл деген эмне?",
    "icon": "🖥️",
    "tag": "💻 ПРОГРАММДОО",
    "options": [
      {
        "id": 1,
        "text": "1) Аракетти кайталоо",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Токтотуу гана",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Өчүрүү",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 97,
    "character": "ШАРТ АЙТАТ:",
    "speech": "Мен 'эгер' деген суроого жооп берем.",
    "question": "Шарт (if) деген эмне?",
    "icon": "🌐",
    "tag": "💻 ПРОГРАММДОО",
    "options": [
      {
        "id": 1,
        "text": "1) Эгер деген шарттуу аракет",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Цикл",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Файл",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 98,
    "character": "ВИРУС АЙТАТ:",
    "speech": "Мен компьютерге зыян келтире алам.",
    "question": "Компьютер вирусу деген эмне?",
    "icon": "📁",
    "tag": "🔒 КИБЕР КООПСУЗДУК",
    "options": [
      {
        "id": 1,
        "text": "1) Зыян келтирген программа",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Оюн",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Браузер",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 99,
    "character": "ПАРОЛЬ АЙТАТ:",
    "speech": "Мен сырдуу маалыматты коргойм.",
    "question": "Пароль деген эмне?",
    "icon": "🔐",
    "tag": "🔒 КИБЕР КООПСУЗДУК",
    "options": [
      {
        "id": 1,
        "text": "1) Кирүү үчүн сыр сөз",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Файл аты",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Сүрөт",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 100,
    "character": "РОБОТ АЙТАТ:",
    "speech": "Мен программа менен иштейм.",
    "question": "Робот деген эмне?",
    "icon": "🦠",
    "tag": "⚡ САНАРИПТИК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Программа менен иштеген машина",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Китеп",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Дарыя",
        "isCorrect": false
      }
    ]
  }
];
