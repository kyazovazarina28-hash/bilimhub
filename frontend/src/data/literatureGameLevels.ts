export interface LiteratureGameOption {
  id: number;
  text: string;
  isCorrect: boolean;
}

export interface LiteratureGameLevel {
  id: number;
  character: string;
  speech: string;
  question: string;
  icon: string;
  tag: string;
  options: LiteratureGameOption[];
}

export const literatureGameLevels: LiteratureGameLevel[] = [
  {
    "id": 1,
    "character": "АКЫЛДУУ КУШ КАНАТ АЙТАТ:",
    "speech": "Кыргыз адабияты — дүйнөдөгү эң чоң поэтикалык эпостордун бири. Бул чыгармада кыргыз элинин баатырдыгы камтылган.",
    "question": "Дүйнөдөгү эң көлөмдүү жана улуу кыргыз элдик баатырдык эпосу кайсы?",
    "icon": "🪶",
    "tag": "📚 АДАБИЯТ ТАПШЫРМАСЫ",
    "options": [
      {
        "id": 1,
        "text": "1) Манас эпосу (Үч илтикти камтыйт) 👑",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Семетей эпосу 🏹",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Эр Төштүк 🐎",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 2,
    "character": "ДҮЙНӨЛҮК ЖАЗУУЧУ АЙТАТ:",
    "speech": "'Ак кеме', 'Бетме-бет', 'Саманчынын жолу' сыяктуу чыгармаларды жазган улуу кыргыз жазуучусу ким?",
    "question": "Кыргыз эл жазуучусу, дүйнөгө белгилүү прозаик ким?",
    "icon": "📚",
    "tag": "📚 АДАБИЯТ ТАПШЫРМАСЫ",
    "options": [
      {
        "id": 1,
        "text": "1) Чыңгыз Айтматов 🌍",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Алыкул Осмонов ✍️",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Токтогул Сатылганов 🪕",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 3,
    "character": "МАНАС АЙТАТ:",
    "speech": "Мен кыргыз элинин улуу баатырымын.",
    "question": "Манас эпосунун негизги каарманы ким?",
    "icon": "📜",
    "tag": "📜 ЭЛДИК ЭПОС",
    "options": [
      {
        "id": 1,
        "text": "1) Манас баатыр 👑",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Чыңгыз Айтматов",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Токтогул",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 4,
    "character": "СЕМЕТЕЙ АЙТАТ:",
    "speech": "Мен Манастын уулумун.",
    "question": "Семетей ким?",
    "icon": "📖",
    "tag": "📜 ЭЛДИК ЭПОС",
    "options": [
      {
        "id": 1,
        "text": "1) Манастын уулу 🏹",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Айтматовдун каарманы",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Акын",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 5,
    "character": "СЕЙТЕК АЙТАТ:",
    "speech": "Мен Семетейдин уулумун.",
    "question": "Сейтек ким?",
    "icon": "✨",
    "tag": "📜 ЭЛДИК ЭПОС",
    "options": [
      {
        "id": 1,
        "text": "1) Семетейдин уулу ⚔️",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Манастын атасы",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Жазуучу",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 6,
    "character": "АК КЕМЕ АЙТАТ:",
    "speech": "Мен Айтматовдун улуу романымын.",
    "question": "'Ак кеме' чыгармасын ким жазган?",
    "icon": "👑",
    "tag": "📚 АДАБИЯТ ТАПШЫРМАСЫ",
    "options": [
      {
        "id": 1,
        "text": "1) Чыңгыз Айтматов",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Алыкул Осмонов",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Токтогул",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 7,
    "character": "БЕТМЕ-БЕТ АЙТАТ:",
    "speech": "Мен Айтматовдун белгилүү повестимин.",
    "question": "'Бетме-бет' кимдин чыгармасы?",
    "icon": "🎭",
    "tag": "📚 АДАБИЯТ ТАПШЫРМАСЫ",
    "options": [
      {
        "id": 1,
        "text": "1) Чыңгыз Айтматов",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Манас",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Семетей",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 8,
    "character": "ТОКТОГУЛ АЙТАТ:",
    "speech": "Мен кыргыз элинин улуу акынымын.",
    "question": "Токтогул Сатылганов ким?",
    "icon": "📕",
    "tag": "📚 АДАБИЯТ ТАПШЫРМАСЫ",
    "options": [
      {
        "id": 1,
        "text": "1) Кыргыз акыны 🪕",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Прозаик",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Сурөтчү",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 9,
    "character": "АЛЫКУЛ ОСМОНОВ АЙТАТ:",
    "speech": "Мен кыргыз адабиятынын улуу акынымын.",
    "question": "Алыкул Осмонов ким?",
    "icon": "🪕",
    "tag": "📚 АДАБИЯТ ТАПШЫРМАСЫ",
    "options": [
      {
        "id": 1,
        "text": "1) Кыргыз акыны ✍️",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Прозаик гана",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Сурөтчү",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 10,
    "character": "ЭР ТӨШТҮК АЙТАТ:",
    "speech": "Мен кыргыз элдик эртегимин.",
    "question": "Эр Төштүк деген эмне?",
    "icon": "🌍",
    "tag": "📜 ЭЛДИК ЭПОС",
    "options": [
      {
        "id": 1,
        "text": "1) Кыргыз элдик эртегиси 🐎",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Роман",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Повест",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 11,
    "character": "ПОЭЗИЯ АЙТАТ:",
    "speech": "Мен ырга, ырмакка, элестерге негизделген жанр.",
    "question": "Поэзия деген эмне?",
    "icon": "🪶",
    "tag": "📚 АДАБИЯТ ТАПШЫРМАСЫ",
    "options": [
      {
        "id": 1,
        "text": "1) Ырга негизделген жанр",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Проза гана",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Драма гана",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 12,
    "character": "ПРОЗА АЙТАТ:",
    "speech": "Мен роман, повест, аңгеме сыяктуу жанрлар.",
    "question": "Проза деген эмне?",
    "icon": "📚",
    "tag": "📚 АДАБИЯТ ТАПШЫРМАСЫ",
    "options": [
      {
        "id": 1,
        "text": "1) Роман, повест, аңгеме",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Ыр гана",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Эпос гана",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 13,
    "character": "ДРАМА АЙТАТ:",
    "speech": "Мен сахнада көрсөтүлүүчү чыгарма.",
    "question": "Драма деген эмне?",
    "icon": "📜",
    "tag": "📚 АДАБИЯТ ТАПШЫРМАСЫ",
    "options": [
      {
        "id": 1,
        "text": "1) Сахнада көрсөтүлүүчү чыгарма",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Элдик ыр",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Карта",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 14,
    "character": "КААРМАН АЙТАТ:",
    "speech": "Мен чыгарманын негизги каарманымын.",
    "question": "Каарман деген эмне?",
    "icon": "📖",
    "tag": "📚 АДАБИЯТ ТАПШЫРМАСЫ",
    "options": [
      {
        "id": 1,
        "text": "1) Чыгарманын негизги каарманы",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Автор",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Китептин мукабасы",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 15,
    "character": "АВТОР АЙТАТ:",
    "speech": "Мен чыгарманы жазгам.",
    "question": "Автор деген эмне?",
    "icon": "✨",
    "tag": "📚 АДАБИЯТ ТАПШЫРМАСЫ",
    "options": [
      {
        "id": 1,
        "text": "1) Чыгарманы жазган адам",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Окуучу",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Басма",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 16,
    "character": "ЭПОС АЙТАТ:",
    "speech": "Мен улуу баатырдык чыгарма.",
    "question": "Эпос деген эмне?",
    "icon": "👑",
    "tag": "📜 ЭЛДИК ЭПОС",
    "options": [
      {
        "id": 1,
        "text": "1) Улуу баатырдык чыгарма",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Кыска аңгеме",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Карта",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 17,
    "character": "АНГЕМЕ АЙТАТ:",
    "speech": "Мен кыска прозалык чыгарма.",
    "question": "Аңгеме деген эмне?",
    "icon": "🎭",
    "tag": "📚 АДАБИЯТ ТАПШЫРМАСЫ",
    "options": [
      {
        "id": 1,
        "text": "1) Кыска прозалык чыгарма",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Эпос",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Ыр",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 18,
    "character": "РОМАН АЙТАТ:",
    "speech": "Мен узун прозалык чыгарма.",
    "question": "Роман деген эмне?",
    "icon": "📕",
    "tag": "📚 АДАБИЯТ ТАПШЫРМАСЫ",
    "options": [
      {
        "id": 1,
        "text": "1) Узун прозалык чыгарма",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Кыска ыр",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Элдик эртеги",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 19,
    "character": "ПОВЕСТ АЙТАТ:",
    "speech": "Мен орто көлөмдүү прозалык чыгарма.",
    "question": "Повест деген эмне?",
    "icon": "🪕",
    "tag": "📚 АДАБИЯТ ТАПШЫРМАСЫ",
    "options": [
      {
        "id": 1,
        "text": "1) Орто көлөмдүү проза",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Эпос",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Карта",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 20,
    "character": "КЫРГЫЗ АДАБИЯТЫ АЙТАТ:",
    "speech": "Мен кыргыз элинин сөз өнөрүнүн мурасы.",
    "question": "Кыргыз адабияты деген эмне?",
    "icon": "🌍",
    "tag": "📚 АДАБИЯТ ТАПШЫРМАСЫ",
    "options": [
      {
        "id": 1,
        "text": "1) Кыргыз элинин сөз өнөрү 🇰🇬",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) География",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Физика",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 21,
    "character": "АКЫЛДУУ КУШ КАНАТ АЙТАТ:",
    "speech": "Кыргыз адабияты — дүйнөдөгү эң чоң поэтикалык эпостордун бири. Бул чыгармада кыргыз элинин баатырдыгы камтылган.",
    "question": "Дүйнөдөгү эң көлөмдүү жана улуу кыргыз элдик баатырдык эпосу кайсы?",
    "icon": "🪶",
    "tag": "📚 АДАБИЯТ ТАПШЫРМАСЫ",
    "options": [
      {
        "id": 1,
        "text": "1) Манас эпосу (Үч илтикти камтыйт) 👑",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Семетей эпосу 🏹",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Эр Төштүк 🐎",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 22,
    "character": "ДҮЙНӨЛҮК ЖАЗУУЧУ АЙТАТ:",
    "speech": "'Ак кеме', 'Бетме-бет', 'Саманчынын жолу' сыяктуу чыгармаларды жазган улуу кыргыз жазуучусу ким?",
    "question": "Кыргыз эл жазуучусу, дүйнөгө белгилүү прозаик ким?",
    "icon": "📚",
    "tag": "📚 АДАБИЯТ ТАПШЫРМАСЫ",
    "options": [
      {
        "id": 1,
        "text": "1) Чыңгыз Айтматов 🌍",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Алыкул Осмонов ✍️",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Токтогул Сатылганов 🪕",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 23,
    "character": "МАНАС АЙТАТ:",
    "speech": "Мен кыргыз элинин улуу баатырымын.",
    "question": "Манас эпосунун негизги каарманы ким?",
    "icon": "📜",
    "tag": "📜 ЭЛДИК ЭПОС",
    "options": [
      {
        "id": 1,
        "text": "1) Манас баатыр 👑",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Чыңгыз Айтматов",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Токтогул",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 24,
    "character": "СЕМЕТЕЙ АЙТАТ:",
    "speech": "Мен Манастын уулумун.",
    "question": "Семетей ким?",
    "icon": "📖",
    "tag": "📜 ЭЛДИК ЭПОС",
    "options": [
      {
        "id": 1,
        "text": "1) Манастын уулу 🏹",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Айтматовдун каарманы",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Акын",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 25,
    "character": "СЕЙТЕК АЙТАТ:",
    "speech": "Мен Семетейдин уулумун.",
    "question": "Сейтек ким?",
    "icon": "✨",
    "tag": "📜 ЭЛДИК ЭПОС",
    "options": [
      {
        "id": 1,
        "text": "1) Семетейдин уулу ⚔️",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Манастын атасы",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Жазуучу",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 26,
    "character": "АК КЕМЕ АЙТАТ:",
    "speech": "Мен Айтматовдун улуу романымын.",
    "question": "'Ак кеме' чыгармасын ким жазган?",
    "icon": "👑",
    "tag": "📚 АДАБИЯТ ТАПШЫРМАСЫ",
    "options": [
      {
        "id": 1,
        "text": "1) Чыңгыз Айтматов",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Алыкул Осмонов",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Токтогул",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 27,
    "character": "БЕТМЕ-БЕТ АЙТАТ:",
    "speech": "Мен Айтматовдун белгилүү повестимин.",
    "question": "'Бетме-бет' кимдин чыгармасы?",
    "icon": "🎭",
    "tag": "📚 АДАБИЯТ ТАПШЫРМАСЫ",
    "options": [
      {
        "id": 1,
        "text": "1) Чыңгыз Айтматов",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Манас",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Семетей",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 28,
    "character": "ТОКТОГУЛ АЙТАТ:",
    "speech": "Мен кыргыз элинин улуу акынымын.",
    "question": "Токтогул Сатылганов ким?",
    "icon": "📕",
    "tag": "📚 АДАБИЯТ ТАПШЫРМАСЫ",
    "options": [
      {
        "id": 1,
        "text": "1) Кыргыз акыны 🪕",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Прозаик",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Сурөтчү",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 29,
    "character": "АЛЫКУЛ ОСМОНОВ АЙТАТ:",
    "speech": "Мен кыргыз адабиятынын улуу акынымын.",
    "question": "Алыкул Осмонов ким?",
    "icon": "🪕",
    "tag": "📚 АДАБИЯТ ТАПШЫРМАСЫ",
    "options": [
      {
        "id": 1,
        "text": "1) Кыргыз акыны ✍️",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Прозаик гана",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Сурөтчү",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 30,
    "character": "ЭР ТӨШТҮК АЙТАТ:",
    "speech": "Мен кыргыз элдик эртегимин.",
    "question": "Эр Төштүк деген эмне?",
    "icon": "🌍",
    "tag": "📜 ЭЛДИК ЭПОС",
    "options": [
      {
        "id": 1,
        "text": "1) Кыргыз элдик эртегиси 🐎",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Роман",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Повест",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 31,
    "character": "ПОЭЗИЯ АЙТАТ:",
    "speech": "Мен ырга, ырмакка, элестерге негизделген жанр.",
    "question": "Поэзия деген эмне?",
    "icon": "🪶",
    "tag": "📚 АДАБИЯТ ТАПШЫРМАСЫ",
    "options": [
      {
        "id": 1,
        "text": "1) Ырга негизделген жанр",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Проза гана",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Драма гана",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 32,
    "character": "ПРОЗА АЙТАТ:",
    "speech": "Мен роман, повест, аңгеме сыяктуу жанрлар.",
    "question": "Проза деген эмне?",
    "icon": "📚",
    "tag": "📚 АДАБИЯТ ТАПШЫРМАСЫ",
    "options": [
      {
        "id": 1,
        "text": "1) Роман, повест, аңгеме",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Ыр гана",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Эпос гана",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 33,
    "character": "ДРАМА АЙТАТ:",
    "speech": "Мен сахнада көрсөтүлүүчү чыгарма.",
    "question": "Драма деген эмне?",
    "icon": "📜",
    "tag": "📚 АДАБИЯТ ТАПШЫРМАСЫ",
    "options": [
      {
        "id": 1,
        "text": "1) Сахнада көрсөтүлүүчү чыгарма",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Элдик ыр",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Карта",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 34,
    "character": "КААРМАН АЙТАТ:",
    "speech": "Мен чыгарманын негизги каарманымын.",
    "question": "Каарман деген эмне?",
    "icon": "📖",
    "tag": "📚 АДАБИЯТ ТАПШЫРМАСЫ",
    "options": [
      {
        "id": 1,
        "text": "1) Чыгарманын негизги каарманы",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Автор",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Китептин мукабасы",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 35,
    "character": "АВТОР АЙТАТ:",
    "speech": "Мен чыгарманы жазгам.",
    "question": "Автор деген эмне?",
    "icon": "✨",
    "tag": "📚 АДАБИЯТ ТАПШЫРМАСЫ",
    "options": [
      {
        "id": 1,
        "text": "1) Чыгарманы жазган адам",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Окуучу",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Басма",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 36,
    "character": "ЭПОС АЙТАТ:",
    "speech": "Мен улуу баатырдык чыгарма.",
    "question": "Эпос деген эмне?",
    "icon": "👑",
    "tag": "📜 ЭЛДИК ЭПОС",
    "options": [
      {
        "id": 1,
        "text": "1) Улуу баатырдык чыгарма",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Кыска аңгеме",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Карта",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 37,
    "character": "АНГЕМЕ АЙТАТ:",
    "speech": "Мен кыска прозалык чыгарма.",
    "question": "Аңгеме деген эмне?",
    "icon": "🎭",
    "tag": "📚 АДАБИЯТ ТАПШЫРМАСЫ",
    "options": [
      {
        "id": 1,
        "text": "1) Кыска прозалык чыгарма",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Эпос",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Ыр",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 38,
    "character": "РОМАН АЙТАТ:",
    "speech": "Мен узун прозалык чыгарма.",
    "question": "Роман деген эмне?",
    "icon": "📕",
    "tag": "📚 АДАБИЯТ ТАПШЫРМАСЫ",
    "options": [
      {
        "id": 1,
        "text": "1) Узун прозалык чыгарма",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Кыска ыр",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Элдик эртеги",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 39,
    "character": "ПОВЕСТ АЙТАТ:",
    "speech": "Мен орто көлөмдүү прозалык чыгарма.",
    "question": "Повест деген эмне?",
    "icon": "🪕",
    "tag": "📚 АДАБИЯТ ТАПШЫРМАСЫ",
    "options": [
      {
        "id": 1,
        "text": "1) Орто көлөмдүү проза",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Эпос",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Карта",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 40,
    "character": "КЫРГЫЗ АДАБИЯТЫ АЙТАТ:",
    "speech": "Мен кыргыз элинин сөз өнөрүнүн мурасы.",
    "question": "Кыргыз адабияты деген эмне?",
    "icon": "🌍",
    "tag": "📚 АДАБИЯТ ТАПШЫРМАСЫ",
    "options": [
      {
        "id": 1,
        "text": "1) Кыргыз элинин сөз өнөрү 🇰🇬",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) География",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Физика",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 41,
    "character": "АКЫЛДУУ КУШ КАНАТ АЙТАТ:",
    "speech": "Кыргыз адабияты — дүйнөдөгү эң чоң поэтикалык эпостордун бири. Бул чыгармада кыргыз элинин баатырдыгы камтылган.",
    "question": "Дүйнөдөгү эң көлөмдүү жана улуу кыргыз элдик баатырдык эпосу кайсы?",
    "icon": "🪶",
    "tag": "📚 АДАБИЯТ ТАПШЫРМАСЫ",
    "options": [
      {
        "id": 1,
        "text": "1) Манас эпосу (Үч илтикти камтыйт) 👑",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Семетей эпосу 🏹",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Эр Төштүк 🐎",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 42,
    "character": "ДҮЙНӨЛҮК ЖАЗУУЧУ АЙТАТ:",
    "speech": "'Ак кеме', 'Бетме-бет', 'Саманчынын жолу' сыяктуу чыгармаларды жазган улуу кыргыз жазуучусу ким?",
    "question": "Кыргыз эл жазуучусу, дүйнөгө белгилүү прозаик ким?",
    "icon": "📚",
    "tag": "📚 АДАБИЯТ ТАПШЫРМАСЫ",
    "options": [
      {
        "id": 1,
        "text": "1) Чыңгыз Айтматов 🌍",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Алыкул Осмонов ✍️",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Токтогул Сатылганов 🪕",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 43,
    "character": "МАНАС АЙТАТ:",
    "speech": "Мен кыргыз элинин улуу баатырымын.",
    "question": "Манас эпосунун негизги каарманы ким?",
    "icon": "📜",
    "tag": "📜 ЭЛДИК ЭПОС",
    "options": [
      {
        "id": 1,
        "text": "1) Манас баатыр 👑",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Чыңгыз Айтматов",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Токтогул",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 44,
    "character": "СЕМЕТЕЙ АЙТАТ:",
    "speech": "Мен Манастын уулумун.",
    "question": "Семетей ким?",
    "icon": "📖",
    "tag": "📜 ЭЛДИК ЭПОС",
    "options": [
      {
        "id": 1,
        "text": "1) Манастын уулу 🏹",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Айтматовдун каарманы",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Акын",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 45,
    "character": "СЕЙТЕК АЙТАТ:",
    "speech": "Мен Семетейдин уулумун.",
    "question": "Сейтек ким?",
    "icon": "✨",
    "tag": "📜 ЭЛДИК ЭПОС",
    "options": [
      {
        "id": 1,
        "text": "1) Семетейдин уулу ⚔️",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Манастын атасы",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Жазуучу",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 46,
    "character": "АК КЕМЕ АЙТАТ:",
    "speech": "Мен Айтматовдун улуу романымын.",
    "question": "'Ак кеме' чыгармасын ким жазган?",
    "icon": "👑",
    "tag": "📚 АДАБИЯТ ТАПШЫРМАСЫ",
    "options": [
      {
        "id": 1,
        "text": "1) Чыңгыз Айтматов",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Алыкул Осмонов",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Токтогул",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 47,
    "character": "БЕТМЕ-БЕТ АЙТАТ:",
    "speech": "Мен Айтматовдун белгилүү повестимин.",
    "question": "'Бетме-бет' кимдин чыгармасы?",
    "icon": "🎭",
    "tag": "📚 АДАБИЯТ ТАПШЫРМАСЫ",
    "options": [
      {
        "id": 1,
        "text": "1) Чыңгыз Айтматов",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Манас",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Семетей",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 48,
    "character": "ТОКТОГУЛ АЙТАТ:",
    "speech": "Мен кыргыз элинин улуу акынымын.",
    "question": "Токтогул Сатылганов ким?",
    "icon": "📕",
    "tag": "📚 АДАБИЯТ ТАПШЫРМАСЫ",
    "options": [
      {
        "id": 1,
        "text": "1) Кыргыз акыны 🪕",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Прозаик",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Сурөтчү",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 49,
    "character": "АЛЫКУЛ ОСМОНОВ АЙТАТ:",
    "speech": "Мен кыргыз адабиятынын улуу акынымын.",
    "question": "Алыкул Осмонов ким?",
    "icon": "🪕",
    "tag": "📚 АДАБИЯТ ТАПШЫРМАСЫ",
    "options": [
      {
        "id": 1,
        "text": "1) Кыргыз акыны ✍️",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Прозаик гана",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Сурөтчү",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 50,
    "character": "ЭР ТӨШТҮК АЙТАТ:",
    "speech": "Мен кыргыз элдик эртегимин.",
    "question": "Эр Төштүк деген эмне?",
    "icon": "🌍",
    "tag": "📜 ЭЛДИК ЭПОС",
    "options": [
      {
        "id": 1,
        "text": "1) Кыргыз элдик эртегиси 🐎",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Роман",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Повест",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 51,
    "character": "ПОЭЗИЯ АЙТАТ:",
    "speech": "Мен ырга, ырмакка, элестерге негизделген жанр.",
    "question": "Поэзия деген эмне?",
    "icon": "🪶",
    "tag": "📚 АДАБИЯТ ТАПШЫРМАСЫ",
    "options": [
      {
        "id": 1,
        "text": "1) Ырга негизделген жанр",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Проза гана",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Драма гана",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 52,
    "character": "ПРОЗА АЙТАТ:",
    "speech": "Мен роман, повест, аңгеме сыяктуу жанрлар.",
    "question": "Проза деген эмне?",
    "icon": "📚",
    "tag": "📚 АДАБИЯТ ТАПШЫРМАСЫ",
    "options": [
      {
        "id": 1,
        "text": "1) Роман, повест, аңгеме",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Ыр гана",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Эпос гана",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 53,
    "character": "ДРАМА АЙТАТ:",
    "speech": "Мен сахнада көрсөтүлүүчү чыгарма.",
    "question": "Драма деген эмне?",
    "icon": "📜",
    "tag": "📚 АДАБИЯТ ТАПШЫРМАСЫ",
    "options": [
      {
        "id": 1,
        "text": "1) Сахнада көрсөтүлүүчү чыгарма",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Элдик ыр",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Карта",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 54,
    "character": "КААРМАН АЙТАТ:",
    "speech": "Мен чыгарманын негизги каарманымын.",
    "question": "Каарман деген эмне?",
    "icon": "📖",
    "tag": "📚 АДАБИЯТ ТАПШЫРМАСЫ",
    "options": [
      {
        "id": 1,
        "text": "1) Чыгарманын негизги каарманы",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Автор",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Китептин мукабасы",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 55,
    "character": "АВТОР АЙТАТ:",
    "speech": "Мен чыгарманы жазгам.",
    "question": "Автор деген эмне?",
    "icon": "✨",
    "tag": "📚 АДАБИЯТ ТАПШЫРМАСЫ",
    "options": [
      {
        "id": 1,
        "text": "1) Чыгарманы жазган адам",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Окуучу",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Басма",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 56,
    "character": "ЭПОС АЙТАТ:",
    "speech": "Мен улуу баатырдык чыгарма.",
    "question": "Эпос деген эмне?",
    "icon": "👑",
    "tag": "📜 ЭЛДИК ЭПОС",
    "options": [
      {
        "id": 1,
        "text": "1) Улуу баатырдык чыгарма",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Кыска аңгеме",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Карта",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 57,
    "character": "АНГЕМЕ АЙТАТ:",
    "speech": "Мен кыска прозалык чыгарма.",
    "question": "Аңгеме деген эмне?",
    "icon": "🎭",
    "tag": "📚 АДАБИЯТ ТАПШЫРМАСЫ",
    "options": [
      {
        "id": 1,
        "text": "1) Кыска прозалык чыгарма",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Эпос",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Ыр",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 58,
    "character": "РОМАН АЙТАТ:",
    "speech": "Мен узун прозалык чыгарма.",
    "question": "Роман деген эмне?",
    "icon": "📕",
    "tag": "📚 АДАБИЯТ ТАПШЫРМАСЫ",
    "options": [
      {
        "id": 1,
        "text": "1) Узун прозалык чыгарма",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Кыска ыр",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Элдик эртеги",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 59,
    "character": "ПОВЕСТ АЙТАТ:",
    "speech": "Мен орто көлөмдүү прозалык чыгарма.",
    "question": "Повест деген эмне?",
    "icon": "🪕",
    "tag": "📚 АДАБИЯТ ТАПШЫРМАСЫ",
    "options": [
      {
        "id": 1,
        "text": "1) Орто көлөмдүү проза",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Эпос",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Карта",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 60,
    "character": "КЫРГЫЗ АДАБИЯТЫ АЙТАТ:",
    "speech": "Мен кыргыз элинин сөз өнөрүнүн мурасы.",
    "question": "Кыргыз адабияты деген эмне?",
    "icon": "🌍",
    "tag": "📚 АДАБИЯТ ТАПШЫРМАСЫ",
    "options": [
      {
        "id": 1,
        "text": "1) Кыргыз элинин сөз өнөрү 🇰🇬",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) География",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Физика",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 61,
    "character": "АКЫЛДУУ КУШ КАНАТ АЙТАТ:",
    "speech": "Кыргыз адабияты — дүйнөдөгү эң чоң поэтикалык эпостордун бири. Бул чыгармада кыргыз элинин баатырдыгы камтылган.",
    "question": "Дүйнөдөгү эң көлөмдүү жана улуу кыргыз элдик баатырдык эпосу кайсы?",
    "icon": "🪶",
    "tag": "📚 АДАБИЯТ ТАПШЫРМАСЫ",
    "options": [
      {
        "id": 1,
        "text": "1) Манас эпосу (Үч илтикти камтыйт) 👑",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Семетей эпосу 🏹",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Эр Төштүк 🐎",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 62,
    "character": "ДҮЙНӨЛҮК ЖАЗУУЧУ АЙТАТ:",
    "speech": "'Ак кеме', 'Бетме-бет', 'Саманчынын жолу' сыяктуу чыгармаларды жазган улуу кыргыз жазуучусу ким?",
    "question": "Кыргыз эл жазуучусу, дүйнөгө белгилүү прозаик ким?",
    "icon": "📚",
    "tag": "📚 АДАБИЯТ ТАПШЫРМАСЫ",
    "options": [
      {
        "id": 1,
        "text": "1) Чыңгыз Айтматов 🌍",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Алыкул Осмонов ✍️",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Токтогул Сатылганов 🪕",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 63,
    "character": "МАНАС АЙТАТ:",
    "speech": "Мен кыргыз элинин улуу баатырымын.",
    "question": "Манас эпосунун негизги каарманы ким?",
    "icon": "📜",
    "tag": "📜 ЭЛДИК ЭПОС",
    "options": [
      {
        "id": 1,
        "text": "1) Манас баатыр 👑",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Чыңгыз Айтматов",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Токтогул",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 64,
    "character": "СЕМЕТЕЙ АЙТАТ:",
    "speech": "Мен Манастын уулумун.",
    "question": "Семетей ким?",
    "icon": "📖",
    "tag": "📜 ЭЛДИК ЭПОС",
    "options": [
      {
        "id": 1,
        "text": "1) Манастын уулу 🏹",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Айтматовдун каарманы",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Акын",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 65,
    "character": "СЕЙТЕК АЙТАТ:",
    "speech": "Мен Семетейдин уулумун.",
    "question": "Сейтек ким?",
    "icon": "✨",
    "tag": "📜 ЭЛДИК ЭПОС",
    "options": [
      {
        "id": 1,
        "text": "1) Семетейдин уулу ⚔️",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Манастын атасы",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Жазуучу",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 66,
    "character": "АК КЕМЕ АЙТАТ:",
    "speech": "Мен Айтматовдун улуу романымын.",
    "question": "'Ак кеме' чыгармасын ким жазган?",
    "icon": "👑",
    "tag": "📚 АДАБИЯТ ТАПШЫРМАСЫ",
    "options": [
      {
        "id": 1,
        "text": "1) Чыңгыз Айтматов",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Алыкул Осмонов",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Токтогул",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 67,
    "character": "БЕТМЕ-БЕТ АЙТАТ:",
    "speech": "Мен Айтматовдун белгилүү повестимин.",
    "question": "'Бетме-бет' кимдин чыгармасы?",
    "icon": "🎭",
    "tag": "📚 АДАБИЯТ ТАПШЫРМАСЫ",
    "options": [
      {
        "id": 1,
        "text": "1) Чыңгыз Айтматов",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Манас",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Семетей",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 68,
    "character": "ТОКТОГУЛ АЙТАТ:",
    "speech": "Мен кыргыз элинин улуу акынымын.",
    "question": "Токтогул Сатылганов ким?",
    "icon": "📕",
    "tag": "📚 АДАБИЯТ ТАПШЫРМАСЫ",
    "options": [
      {
        "id": 1,
        "text": "1) Кыргыз акыны 🪕",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Прозаик",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Сурөтчү",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 69,
    "character": "АЛЫКУЛ ОСМОНОВ АЙТАТ:",
    "speech": "Мен кыргыз адабиятынын улуу акынымын.",
    "question": "Алыкул Осмонов ким?",
    "icon": "🪕",
    "tag": "📚 АДАБИЯТ ТАПШЫРМАСЫ",
    "options": [
      {
        "id": 1,
        "text": "1) Кыргыз акыны ✍️",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Прозаик гана",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Сурөтчү",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 70,
    "character": "ЭР ТӨШТҮК АЙТАТ:",
    "speech": "Мен кыргыз элдик эртегимин.",
    "question": "Эр Төштүк деген эмне?",
    "icon": "🌍",
    "tag": "📜 ЭЛДИК ЭПОС",
    "options": [
      {
        "id": 1,
        "text": "1) Кыргыз элдик эртегиси 🐎",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Роман",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Повест",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 71,
    "character": "ПОЭЗИЯ АЙТАТ:",
    "speech": "Мен ырга, ырмакка, элестерге негизделген жанр.",
    "question": "Поэзия деген эмне?",
    "icon": "🪶",
    "tag": "📚 АДАБИЯТ ТАПШЫРМАСЫ",
    "options": [
      {
        "id": 1,
        "text": "1) Ырга негизделген жанр",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Проза гана",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Драма гана",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 72,
    "character": "ПРОЗА АЙТАТ:",
    "speech": "Мен роман, повест, аңгеме сыяктуу жанрлар.",
    "question": "Проза деген эмне?",
    "icon": "📚",
    "tag": "📚 АДАБИЯТ ТАПШЫРМАСЫ",
    "options": [
      {
        "id": 1,
        "text": "1) Роман, повест, аңгеме",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Ыр гана",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Эпос гана",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 73,
    "character": "ДРАМА АЙТАТ:",
    "speech": "Мен сахнада көрсөтүлүүчү чыгарма.",
    "question": "Драма деген эмне?",
    "icon": "📜",
    "tag": "📚 АДАБИЯТ ТАПШЫРМАСЫ",
    "options": [
      {
        "id": 1,
        "text": "1) Сахнада көрсөтүлүүчү чыгарма",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Элдик ыр",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Карта",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 74,
    "character": "КААРМАН АЙТАТ:",
    "speech": "Мен чыгарманын негизги каарманымын.",
    "question": "Каарман деген эмне?",
    "icon": "📖",
    "tag": "📚 АДАБИЯТ ТАПШЫРМАСЫ",
    "options": [
      {
        "id": 1,
        "text": "1) Чыгарманын негизги каарманы",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Автор",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Китептин мукабасы",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 75,
    "character": "АВТОР АЙТАТ:",
    "speech": "Мен чыгарманы жазгам.",
    "question": "Автор деген эмне?",
    "icon": "✨",
    "tag": "📚 АДАБИЯТ ТАПШЫРМАСЫ",
    "options": [
      {
        "id": 1,
        "text": "1) Чыгарманы жазган адам",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Окуучу",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Басма",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 76,
    "character": "ЭПОС АЙТАТ:",
    "speech": "Мен улуу баатырдык чыгарма.",
    "question": "Эпос деген эмне?",
    "icon": "👑",
    "tag": "📜 ЭЛДИК ЭПОС",
    "options": [
      {
        "id": 1,
        "text": "1) Улуу баатырдык чыгарма",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Кыска аңгеме",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Карта",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 77,
    "character": "АНГЕМЕ АЙТАТ:",
    "speech": "Мен кыска прозалык чыгарма.",
    "question": "Аңгеме деген эмне?",
    "icon": "🎭",
    "tag": "📚 АДАБИЯТ ТАПШЫРМАСЫ",
    "options": [
      {
        "id": 1,
        "text": "1) Кыска прозалык чыгарма",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Эпос",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Ыр",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 78,
    "character": "РОМАН АЙТАТ:",
    "speech": "Мен узун прозалык чыгарма.",
    "question": "Роман деген эмне?",
    "icon": "📕",
    "tag": "📚 АДАБИЯТ ТАПШЫРМАСЫ",
    "options": [
      {
        "id": 1,
        "text": "1) Узун прозалык чыгарма",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Кыска ыр",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Элдик эртеги",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 79,
    "character": "ПОВЕСТ АЙТАТ:",
    "speech": "Мен орто көлөмдүү прозалык чыгарма.",
    "question": "Повест деген эмне?",
    "icon": "🪕",
    "tag": "📚 АДАБИЯТ ТАПШЫРМАСЫ",
    "options": [
      {
        "id": 1,
        "text": "1) Орто көлөмдүү проза",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Эпос",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Карта",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 80,
    "character": "КЫРГЫЗ АДАБИЯТЫ АЙТАТ:",
    "speech": "Мен кыргыз элинин сөз өнөрүнүн мурасы.",
    "question": "Кыргыз адабияты деген эмне?",
    "icon": "🌍",
    "tag": "📚 АДАБИЯТ ТАПШЫРМАСЫ",
    "options": [
      {
        "id": 1,
        "text": "1) Кыргыз элинин сөз өнөрү 🇰🇬",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) География",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Физика",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 81,
    "character": "АКЫЛДУУ КУШ КАНАТ АЙТАТ:",
    "speech": "Кыргыз адабияты — дүйнөдөгү эң чоң поэтикалык эпостордун бири. Бул чыгармада кыргыз элинин баатырдыгы камтылган.",
    "question": "Дүйнөдөгү эң көлөмдүү жана улуу кыргыз элдик баатырдык эпосу кайсы?",
    "icon": "🪶",
    "tag": "📚 АДАБИЯТ ТАПШЫРМАСЫ",
    "options": [
      {
        "id": 1,
        "text": "1) Манас эпосу (Үч илтикти камтыйт) 👑",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Семетей эпосу 🏹",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Эр Төштүк 🐎",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 82,
    "character": "ДҮЙНӨЛҮК ЖАЗУУЧУ АЙТАТ:",
    "speech": "'Ак кеме', 'Бетме-бет', 'Саманчынын жолу' сыяктуу чыгармаларды жазган улуу кыргыз жазуучусу ким?",
    "question": "Кыргыз эл жазуучусу, дүйнөгө белгилүү прозаик ким?",
    "icon": "📚",
    "tag": "📚 АДАБИЯТ ТАПШЫРМАСЫ",
    "options": [
      {
        "id": 1,
        "text": "1) Чыңгыз Айтматов 🌍",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Алыкул Осмонов ✍️",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Токтогул Сатылганов 🪕",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 83,
    "character": "МАНАС АЙТАТ:",
    "speech": "Мен кыргыз элинин улуу баатырымын.",
    "question": "Манас эпосунун негизги каарманы ким?",
    "icon": "📜",
    "tag": "📜 ЭЛДИК ЭПОС",
    "options": [
      {
        "id": 1,
        "text": "1) Манас баатыр 👑",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Чыңгыз Айтматов",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Токтогул",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 84,
    "character": "СЕМЕТЕЙ АЙТАТ:",
    "speech": "Мен Манастын уулумун.",
    "question": "Семетей ким?",
    "icon": "📖",
    "tag": "📜 ЭЛДИК ЭПОС",
    "options": [
      {
        "id": 1,
        "text": "1) Манастын уулу 🏹",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Айтматовдун каарманы",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Акын",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 85,
    "character": "СЕЙТЕК АЙТАТ:",
    "speech": "Мен Семетейдин уулумун.",
    "question": "Сейтек ким?",
    "icon": "✨",
    "tag": "📜 ЭЛДИК ЭПОС",
    "options": [
      {
        "id": 1,
        "text": "1) Семетейдин уулу ⚔️",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Манастын атасы",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Жазуучу",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 86,
    "character": "АК КЕМЕ АЙТАТ:",
    "speech": "Мен Айтматовдун улуу романымын.",
    "question": "'Ак кеме' чыгармасын ким жазган?",
    "icon": "👑",
    "tag": "📚 АДАБИЯТ ТАПШЫРМАСЫ",
    "options": [
      {
        "id": 1,
        "text": "1) Чыңгыз Айтматов",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Алыкул Осмонов",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Токтогул",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 87,
    "character": "БЕТМЕ-БЕТ АЙТАТ:",
    "speech": "Мен Айтматовдун белгилүү повестимин.",
    "question": "'Бетме-бет' кимдин чыгармасы?",
    "icon": "🎭",
    "tag": "📚 АДАБИЯТ ТАПШЫРМАСЫ",
    "options": [
      {
        "id": 1,
        "text": "1) Чыңгыз Айтматов",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Манас",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Семетей",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 88,
    "character": "ТОКТОГУЛ АЙТАТ:",
    "speech": "Мен кыргыз элинин улуу акынымын.",
    "question": "Токтогул Сатылганов ким?",
    "icon": "📕",
    "tag": "📚 АДАБИЯТ ТАПШЫРМАСЫ",
    "options": [
      {
        "id": 1,
        "text": "1) Кыргыз акыны 🪕",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Прозаик",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Сурөтчү",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 89,
    "character": "АЛЫКУЛ ОСМОНОВ АЙТАТ:",
    "speech": "Мен кыргыз адабиятынын улуу акынымын.",
    "question": "Алыкул Осмонов ким?",
    "icon": "🪕",
    "tag": "📚 АДАБИЯТ ТАПШЫРМАСЫ",
    "options": [
      {
        "id": 1,
        "text": "1) Кыргыз акыны ✍️",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Прозаик гана",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Сурөтчү",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 90,
    "character": "ЭР ТӨШТҮК АЙТАТ:",
    "speech": "Мен кыргыз элдик эртегимин.",
    "question": "Эр Төштүк деген эмне?",
    "icon": "🌍",
    "tag": "📜 ЭЛДИК ЭПОС",
    "options": [
      {
        "id": 1,
        "text": "1) Кыргыз элдик эртегиси 🐎",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Роман",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Повест",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 91,
    "character": "ПОЭЗИЯ АЙТАТ:",
    "speech": "Мен ырга, ырмакка, элестерге негизделген жанр.",
    "question": "Поэзия деген эмне?",
    "icon": "🪶",
    "tag": "📚 АДАБИЯТ ТАПШЫРМАСЫ",
    "options": [
      {
        "id": 1,
        "text": "1) Ырга негизделген жанр",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Проза гана",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Драма гана",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 92,
    "character": "ПРОЗА АЙТАТ:",
    "speech": "Мен роман, повест, аңгеме сыяктуу жанрлар.",
    "question": "Проза деген эмне?",
    "icon": "📚",
    "tag": "📚 АДАБИЯТ ТАПШЫРМАСЫ",
    "options": [
      {
        "id": 1,
        "text": "1) Роман, повест, аңгеме",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Ыр гана",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Эпос гана",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 93,
    "character": "ДРАМА АЙТАТ:",
    "speech": "Мен сахнада көрсөтүлүүчү чыгарма.",
    "question": "Драма деген эмне?",
    "icon": "📜",
    "tag": "📚 АДАБИЯТ ТАПШЫРМАСЫ",
    "options": [
      {
        "id": 1,
        "text": "1) Сахнада көрсөтүлүүчү чыгарма",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Элдик ыр",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Карта",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 94,
    "character": "КААРМАН АЙТАТ:",
    "speech": "Мен чыгарманын негизги каарманымын.",
    "question": "Каарман деген эмне?",
    "icon": "📖",
    "tag": "📚 АДАБИЯТ ТАПШЫРМАСЫ",
    "options": [
      {
        "id": 1,
        "text": "1) Чыгарманын негизги каарманы",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Автор",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Китептин мукабасы",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 95,
    "character": "АВТОР АЙТАТ:",
    "speech": "Мен чыгарманы жазгам.",
    "question": "Автор деген эмне?",
    "icon": "✨",
    "tag": "📚 АДАБИЯТ ТАПШЫРМАСЫ",
    "options": [
      {
        "id": 1,
        "text": "1) Чыгарманы жазган адам",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Окуучу",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Басма",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 96,
    "character": "ЭПОС АЙТАТ:",
    "speech": "Мен улуу баатырдык чыгарма.",
    "question": "Эпос деген эмне?",
    "icon": "👑",
    "tag": "📜 ЭЛДИК ЭПОС",
    "options": [
      {
        "id": 1,
        "text": "1) Улуу баатырдык чыгарма",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Кыска аңгеме",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Карта",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 97,
    "character": "АНГЕМЕ АЙТАТ:",
    "speech": "Мен кыска прозалык чыгарма.",
    "question": "Аңгеме деген эмне?",
    "icon": "🎭",
    "tag": "📚 АДАБИЯТ ТАПШЫРМАСЫ",
    "options": [
      {
        "id": 1,
        "text": "1) Кыска прозалык чыгарма",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Эпос",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Ыр",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 98,
    "character": "РОМАН АЙТАТ:",
    "speech": "Мен узун прозалык чыгарма.",
    "question": "Роман деген эмне?",
    "icon": "📕",
    "tag": "📚 АДАБИЯТ ТАПШЫРМАСЫ",
    "options": [
      {
        "id": 1,
        "text": "1) Узун прозалык чыгарма",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Кыска ыр",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Элдик эртеги",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 99,
    "character": "ПОВЕСТ АЙТАТ:",
    "speech": "Мен орто көлөмдүү прозалык чыгарма.",
    "question": "Повест деген эмне?",
    "icon": "🪕",
    "tag": "📚 АДАБИЯТ ТАПШЫРМАСЫ",
    "options": [
      {
        "id": 1,
        "text": "1) Орто көлөмдүү проза",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Эпос",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Карта",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 100,
    "character": "КЫРГЫЗ АДАБИЯТЫ АЙТАТ:",
    "speech": "Мен кыргыз элинин сөз өнөрүнүн мурасы.",
    "question": "Кыргыз адабияты деген эмне?",
    "icon": "🌍",
    "tag": "📚 АДАБИЯТ ТАПШЫРМАСЫ",
    "options": [
      {
        "id": 1,
        "text": "1) Кыргыз элинин сөз өнөрү 🇰🇬",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) География",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Физика",
        "isCorrect": false
      }
    ]
  }
];
