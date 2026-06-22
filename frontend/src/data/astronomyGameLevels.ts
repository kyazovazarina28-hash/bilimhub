export interface AstronomyGameOption {
  id: number;
  text: string;
  isCorrect: boolean;
}

export interface AstronomyGameLevel {
  id: number;
  character: string;
  speech: string;
  question: string;
  icon: string;
  tag: string;
  options: AstronomyGameOption[];
}

export const astronomyGameLevels: AstronomyGameLevel[] = [
  {
    "id": 1,
    "character": "КОСМОС ТЕМИР КЕЙПЕК АЙТАТ:",
    "speech": "Күн тутумунун борборунда зор жарык жана жылуулук берүүчү жалгыз жылдыз жайгашкан. Бардык планеталар ушул жылдызды айланышат.",
    "question": "Күн тутумунун борборунда жайгашкан эң башкы жана жалгыз жылдыз кайсы?",
    "icon": "🚀",
    "tag": "🌌 КОСМОСТУК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Күн (The Sun) ☀️",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Марс (Mars) 🔴",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Ай (The Moon) 🌙",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 2,
    "character": "АКЫЛДУУ ТЕЛЕСКОП АЙТАТ:",
    "speech": "Биздин Күн тутумубуз миллиардаган жылдыздардын зор системасында жайгашкан.",
    "question": "Биздин Күн тутуму жана Жер планетасы кайсы галактикада жайгашкан?",
    "icon": "⭐",
    "tag": "🌌 КОСМОСТУК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Саманчынын Жолу (Milky Way) 🌌",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Андромеда (Andromeda) 🌀",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Альфа Центавра (Alpha Centauri) ✨",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 3,
    "character": "ЖЕР АЙТАТ:",
    "speech": "Мен Күн тутумундагы үчүнчү планетамын.",
    "question": "Жер планетасы кайсы тутумдун мүчөсү?",
    "icon": "🪐",
    "tag": "🪐 ПЛАНЕТАЛАР",
    "options": [
      {
        "id": 1,
        "text": "1) Күн тутумунун 🌍",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Андромеда",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Ай тутуму",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 4,
    "character": "АЙ АЙТАТ:",
    "speech": "Мен Жердин жанында айланам.",
    "question": "Ай деген эмне?",
    "icon": "🌌",
    "tag": "🪐 ПЛАНЕТАЛАР",
    "options": [
      {
        "id": 1,
        "text": "1) Жердин жандуу спутниги 🌙",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Жылдыз",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Галактика",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 5,
    "character": "МАРС АЙТАТ:",
    "speech": "Мен 'Кызыл планета' деп аталам.",
    "question": "Марс планетасы кандай түстө?",
    "icon": "🛸",
    "tag": "🪐 ПЛАНЕТАЛАР",
    "options": [
      {
        "id": 1,
        "text": "1) Кызыл 🔴",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Көк",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Жашыл",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 6,
    "character": "ЮПИТЕР АЙТАТ:",
    "speech": "Мен Күн тутумундагы эң чоң планетамын.",
    "question": "Эң чоң планета кайсы?",
    "icon": "☀️",
    "tag": "🪐 ПЛАНЕТАЛАР",
    "options": [
      {
        "id": 1,
        "text": "1) Юпитер 🪐",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Жер",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Марс",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 7,
    "character": "САТУРН АЙТАТ:",
    "speech": "Менин айлана тегерегимде шакек бар.",
    "question": "Шакектери менен белгилүү планета кайсы?",
    "icon": "🌙",
    "tag": "🪐 ПЛАНЕТАЛАР",
    "options": [
      {
        "id": 1,
        "text": "1) Сатурн 💫",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Меркурий",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Венера",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 8,
    "character": "ВЕНЕРА АЙТАТ:",
    "speech": "Мен Күнгө эң жакын планеталардын биримин.",
    "question": "Күнгө эң жакын планета кайсы?",
    "icon": "🔴",
    "tag": "🪐 ПЛАНЕТАЛАР",
    "options": [
      {
        "id": 1,
        "text": "1) Меркурий",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Юпитер",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Нептун",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 9,
    "character": "НЕПТУН АЙТАТ:",
    "speech": "Мен Күн тутумундагы эң алыскы планеталардын биримин.",
    "question": "Күн тутумундагы эң алыскы планета кайсы?",
    "icon": "🔭",
    "tag": "🪐 ПЛАНЕТАЛАР",
    "options": [
      {
        "id": 1,
        "text": "1) Нептун 🌊",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Марс",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Жер",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 10,
    "character": "ЖЫЛДЫЗ АЙТАТ:",
    "speech": "Мен өзүнүн жарыгы менен жаркырам.",
    "question": "Жылдыз деген эмне?",
    "icon": "👨‍🚀",
    "tag": "⭐ ЖЫЛДЫЗДАР",
    "options": [
      {
        "id": 1,
        "text": "1) Өзүнүн жарыгы менен жаркыраган асман денеси",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Планета",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Ай",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 11,
    "character": "ГАЛАКТИКА АЙТАТ:",
    "speech": "Мен миллиарддаган жылдыздардын системасымын.",
    "question": "Галактика деген эмне?",
    "icon": "🚀",
    "tag": "🌌 КОСМОСТУК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Жылдыздардын чоң системасы",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Бир планета",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Ай гана",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 12,
    "character": "КОМЕТА АЙТАТ:",
    "speech": "Мен асманда хвосту менен учам.",
    "question": "Комета деген эмне?",
    "icon": "⭐",
    "tag": "🌌 КОСМОСТУК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Хвосту бар асман денеси",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Жылдыз",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Планета гана",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 13,
    "character": "МЕТЕОР АЙТАТ:",
    "speech": "Мен атмосферага киргенде жанып калам.",
    "question": "Жылдыз түшүм деген эмне?",
    "icon": "🪐",
    "tag": "🌌 КОСМОСТУК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Атмосферага кирген метеор",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Жылдыз чыгышы",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Ай",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 14,
    "character": "ТЕЛЕСКОП АЙТАТ:",
    "speech": "Мен алыскы объектилерди көрсөтөм.",
    "question": "Телескоп деген эмне?",
    "icon": "🌌",
    "tag": "🔭 АСТРОНОМИЯ",
    "options": [
      {
        "id": 1,
        "text": "1) Алыскы объектилерди көргөн прибор",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Карта",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Компас",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 15,
    "character": "АСТРОНОМ АЙТАТ:",
    "speech": "Мен асман денелерин изилдейм.",
    "question": "Астрономия деген эмне?",
    "icon": "🛸",
    "tag": "🔭 АСТРОНОМИЯ",
    "options": [
      {
        "id": 1,
        "text": "1) Асман денелерин изилдөө илими",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) География",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Биология",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 16,
    "character": "КҮН ТУТУМУ АЙТАТ:",
    "speech": "Мен Күн жана аны айланган планеталардан туром.",
    "question": "Күн тутуму деген эмне?",
    "icon": "☀️",
    "tag": "🌌 КОСМОСТУК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Күн жана планеталар системасы",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Галактика гана",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Ай гана",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 17,
    "character": "СПУТНИК АЙТАТ:",
    "speech": "Мен планетаны айланып жүрөм.",
    "question": "Спутник деген эмне?",
    "icon": "🌙",
    "tag": "🪐 ПЛАНЕТАЛАР",
    "options": [
      {
        "id": 1,
        "text": "1) Планетаны айланган дене",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Жылдыз",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Галактика",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 18,
    "character": "КОСМОНАВТ АЙТАТ:",
    "speech": "Мен космосто учам.",
    "question": "Космонавт деген эмне?",
    "icon": "🔴",
    "tag": "🔭 АСТРОНОМИЯ",
    "options": [
      {
        "id": 1,
        "text": "1) Космосто учкан адам",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Акын",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Мугалим",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 19,
    "character": "ОРБИТА АЙТАТ:",
    "speech": "Мен планетанын айлануу жолу.",
    "question": "Орбита деген эмне?",
    "icon": "🔭",
    "tag": "🪐 ПЛАНЕТАЛАР",
    "options": [
      {
        "id": 1,
        "text": "1) Планетанын айлануу жолу",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Жылдыз",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Ай гана",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 20,
    "character": "ПЛАНЕТА АЙТАТ:",
    "speech": "Мен жылдызды айланып жүрөм.",
    "question": "Планета деген эмне?",
    "icon": "👨‍🚀",
    "tag": "🪐 ПЛАНЕТАЛАР",
    "options": [
      {
        "id": 1,
        "text": "1) Жылдызды айланган асман денеси",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Жылдыз",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Комета гана",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 21,
    "character": "КОСМОС ТЕМИР КЕЙПЕК АЙТАТ:",
    "speech": "Күн тутумунун борборунда зор жарык жана жылуулук берүүчү жалгыз жылдыз жайгашкан. Бардык планеталар ушул жылдызды айланышат.",
    "question": "Күн тутумунун борборунда жайгашкан эң башкы жана жалгыз жылдыз кайсы?",
    "icon": "🚀",
    "tag": "🌌 КОСМОСТУК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Күн (The Sun) ☀️",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Марс (Mars) 🔴",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Ай (The Moon) 🌙",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 22,
    "character": "АКЫЛДУУ ТЕЛЕСКОП АЙТАТ:",
    "speech": "Биздин Күн тутумубуз миллиардаган жылдыздардын зор системасында жайгашкан.",
    "question": "Биздин Күн тутуму жана Жер планетасы кайсы галактикада жайгашкан?",
    "icon": "⭐",
    "tag": "🌌 КОСМОСТУК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Саманчынын Жолу (Milky Way) 🌌",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Андромеда (Andromeda) 🌀",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Альфа Центавра (Alpha Centauri) ✨",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 23,
    "character": "ЖЕР АЙТАТ:",
    "speech": "Мен Күн тутумундагы үчүнчү планетамын.",
    "question": "Жер планетасы кайсы тутумдун мүчөсү?",
    "icon": "🪐",
    "tag": "🪐 ПЛАНЕТАЛАР",
    "options": [
      {
        "id": 1,
        "text": "1) Күн тутумунун 🌍",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Андромеда",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Ай тутуму",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 24,
    "character": "АЙ АЙТАТ:",
    "speech": "Мен Жердин жанында айланам.",
    "question": "Ай деген эмне?",
    "icon": "🌌",
    "tag": "🪐 ПЛАНЕТАЛАР",
    "options": [
      {
        "id": 1,
        "text": "1) Жердин жандуу спутниги 🌙",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Жылдыз",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Галактика",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 25,
    "character": "МАРС АЙТАТ:",
    "speech": "Мен 'Кызыл планета' деп аталам.",
    "question": "Марс планетасы кандай түстө?",
    "icon": "🛸",
    "tag": "🪐 ПЛАНЕТАЛАР",
    "options": [
      {
        "id": 1,
        "text": "1) Кызыл 🔴",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Көк",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Жашыл",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 26,
    "character": "ЮПИТЕР АЙТАТ:",
    "speech": "Мен Күн тутумундагы эң чоң планетамын.",
    "question": "Эң чоң планета кайсы?",
    "icon": "☀️",
    "tag": "🪐 ПЛАНЕТАЛАР",
    "options": [
      {
        "id": 1,
        "text": "1) Юпитер 🪐",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Жер",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Марс",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 27,
    "character": "САТУРН АЙТАТ:",
    "speech": "Менин айлана тегерегимде шакек бар.",
    "question": "Шакектери менен белгилүү планета кайсы?",
    "icon": "🌙",
    "tag": "🪐 ПЛАНЕТАЛАР",
    "options": [
      {
        "id": 1,
        "text": "1) Сатурн 💫",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Меркурий",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Венера",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 28,
    "character": "ВЕНЕРА АЙТАТ:",
    "speech": "Мен Күнгө эң жакын планеталардын биримин.",
    "question": "Күнгө эң жакын планета кайсы?",
    "icon": "🔴",
    "tag": "🪐 ПЛАНЕТАЛАР",
    "options": [
      {
        "id": 1,
        "text": "1) Меркурий",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Юпитер",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Нептун",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 29,
    "character": "НЕПТУН АЙТАТ:",
    "speech": "Мен Күн тутумундагы эң алыскы планеталардын биримин.",
    "question": "Күн тутумундагы эң алыскы планета кайсы?",
    "icon": "🔭",
    "tag": "🪐 ПЛАНЕТАЛАР",
    "options": [
      {
        "id": 1,
        "text": "1) Нептун 🌊",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Марс",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Жер",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 30,
    "character": "ЖЫЛДЫЗ АЙТАТ:",
    "speech": "Мен өзүнүн жарыгы менен жаркырам.",
    "question": "Жылдыз деген эмне?",
    "icon": "👨‍🚀",
    "tag": "⭐ ЖЫЛДЫЗДАР",
    "options": [
      {
        "id": 1,
        "text": "1) Өзүнүн жарыгы менен жаркыраган асман денеси",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Планета",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Ай",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 31,
    "character": "ГАЛАКТИКА АЙТАТ:",
    "speech": "Мен миллиарддаган жылдыздардын системасымын.",
    "question": "Галактика деген эмне?",
    "icon": "🚀",
    "tag": "🌌 КОСМОСТУК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Жылдыздардын чоң системасы",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Бир планета",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Ай гана",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 32,
    "character": "КОМЕТА АЙТАТ:",
    "speech": "Мен асманда хвосту менен учам.",
    "question": "Комета деген эмне?",
    "icon": "⭐",
    "tag": "🌌 КОСМОСТУК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Хвосту бар асман денеси",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Жылдыз",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Планета гана",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 33,
    "character": "МЕТЕОР АЙТАТ:",
    "speech": "Мен атмосферага киргенде жанып калам.",
    "question": "Жылдыз түшүм деген эмне?",
    "icon": "🪐",
    "tag": "🌌 КОСМОСТУК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Атмосферага кирген метеор",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Жылдыз чыгышы",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Ай",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 34,
    "character": "ТЕЛЕСКОП АЙТАТ:",
    "speech": "Мен алыскы объектилерди көрсөтөм.",
    "question": "Телескоп деген эмне?",
    "icon": "🌌",
    "tag": "🔭 АСТРОНОМИЯ",
    "options": [
      {
        "id": 1,
        "text": "1) Алыскы объектилерди көргөн прибор",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Карта",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Компас",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 35,
    "character": "АСТРОНОМ АЙТАТ:",
    "speech": "Мен асман денелерин изилдейм.",
    "question": "Астрономия деген эмне?",
    "icon": "🛸",
    "tag": "🔭 АСТРОНОМИЯ",
    "options": [
      {
        "id": 1,
        "text": "1) Асман денелерин изилдөө илими",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) География",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Биология",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 36,
    "character": "КҮН ТУТУМУ АЙТАТ:",
    "speech": "Мен Күн жана аны айланган планеталардан туром.",
    "question": "Күн тутуму деген эмне?",
    "icon": "☀️",
    "tag": "🌌 КОСМОСТУК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Күн жана планеталар системасы",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Галактика гана",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Ай гана",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 37,
    "character": "СПУТНИК АЙТАТ:",
    "speech": "Мен планетаны айланып жүрөм.",
    "question": "Спутник деген эмне?",
    "icon": "🌙",
    "tag": "🪐 ПЛАНЕТАЛАР",
    "options": [
      {
        "id": 1,
        "text": "1) Планетаны айланган дене",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Жылдыз",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Галактика",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 38,
    "character": "КОСМОНАВТ АЙТАТ:",
    "speech": "Мен космосто учам.",
    "question": "Космонавт деген эмне?",
    "icon": "🔴",
    "tag": "🔭 АСТРОНОМИЯ",
    "options": [
      {
        "id": 1,
        "text": "1) Космосто учкан адам",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Акын",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Мугалим",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 39,
    "character": "ОРБИТА АЙТАТ:",
    "speech": "Мен планетанын айлануу жолу.",
    "question": "Орбита деген эмне?",
    "icon": "🔭",
    "tag": "🪐 ПЛАНЕТАЛАР",
    "options": [
      {
        "id": 1,
        "text": "1) Планетанын айлануу жолу",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Жылдыз",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Ай гана",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 40,
    "character": "ПЛАНЕТА АЙТАТ:",
    "speech": "Мен жылдызды айланып жүрөм.",
    "question": "Планета деген эмне?",
    "icon": "👨‍🚀",
    "tag": "🪐 ПЛАНЕТАЛАР",
    "options": [
      {
        "id": 1,
        "text": "1) Жылдызды айланган асман денеси",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Жылдыз",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Комета гана",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 41,
    "character": "КОСМОС ТЕМИР КЕЙПЕК АЙТАТ:",
    "speech": "Күн тутумунун борборунда зор жарык жана жылуулук берүүчү жалгыз жылдыз жайгашкан. Бардык планеталар ушул жылдызды айланышат.",
    "question": "Күн тутумунун борборунда жайгашкан эң башкы жана жалгыз жылдыз кайсы?",
    "icon": "🚀",
    "tag": "🌌 КОСМОСТУК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Күн (The Sun) ☀️",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Марс (Mars) 🔴",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Ай (The Moon) 🌙",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 42,
    "character": "АКЫЛДУУ ТЕЛЕСКОП АЙТАТ:",
    "speech": "Биздин Күн тутумубуз миллиардаган жылдыздардын зор системасында жайгашкан.",
    "question": "Биздин Күн тутуму жана Жер планетасы кайсы галактикада жайгашкан?",
    "icon": "⭐",
    "tag": "🌌 КОСМОСТУК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Саманчынын Жолу (Milky Way) 🌌",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Андромеда (Andromeda) 🌀",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Альфа Центавра (Alpha Centauri) ✨",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 43,
    "character": "ЖЕР АЙТАТ:",
    "speech": "Мен Күн тутумундагы үчүнчү планетамын.",
    "question": "Жер планетасы кайсы тутумдун мүчөсү?",
    "icon": "🪐",
    "tag": "🪐 ПЛАНЕТАЛАР",
    "options": [
      {
        "id": 1,
        "text": "1) Күн тутумунун 🌍",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Андромеда",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Ай тутуму",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 44,
    "character": "АЙ АЙТАТ:",
    "speech": "Мен Жердин жанында айланам.",
    "question": "Ай деген эмне?",
    "icon": "🌌",
    "tag": "🪐 ПЛАНЕТАЛАР",
    "options": [
      {
        "id": 1,
        "text": "1) Жердин жандуу спутниги 🌙",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Жылдыз",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Галактика",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 45,
    "character": "МАРС АЙТАТ:",
    "speech": "Мен 'Кызыл планета' деп аталам.",
    "question": "Марс планетасы кандай түстө?",
    "icon": "🛸",
    "tag": "🪐 ПЛАНЕТАЛАР",
    "options": [
      {
        "id": 1,
        "text": "1) Кызыл 🔴",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Көк",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Жашыл",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 46,
    "character": "ЮПИТЕР АЙТАТ:",
    "speech": "Мен Күн тутумундагы эң чоң планетамын.",
    "question": "Эң чоң планета кайсы?",
    "icon": "☀️",
    "tag": "🪐 ПЛАНЕТАЛАР",
    "options": [
      {
        "id": 1,
        "text": "1) Юпитер 🪐",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Жер",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Марс",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 47,
    "character": "САТУРН АЙТАТ:",
    "speech": "Менин айлана тегерегимде шакек бар.",
    "question": "Шакектери менен белгилүү планета кайсы?",
    "icon": "🌙",
    "tag": "🪐 ПЛАНЕТАЛАР",
    "options": [
      {
        "id": 1,
        "text": "1) Сатурн 💫",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Меркурий",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Венера",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 48,
    "character": "ВЕНЕРА АЙТАТ:",
    "speech": "Мен Күнгө эң жакын планеталардын биримин.",
    "question": "Күнгө эң жакын планета кайсы?",
    "icon": "🔴",
    "tag": "🪐 ПЛАНЕТАЛАР",
    "options": [
      {
        "id": 1,
        "text": "1) Меркурий",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Юпитер",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Нептун",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 49,
    "character": "НЕПТУН АЙТАТ:",
    "speech": "Мен Күн тутумундагы эң алыскы планеталардын биримин.",
    "question": "Күн тутумундагы эң алыскы планета кайсы?",
    "icon": "🔭",
    "tag": "🪐 ПЛАНЕТАЛАР",
    "options": [
      {
        "id": 1,
        "text": "1) Нептун 🌊",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Марс",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Жер",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 50,
    "character": "ЖЫЛДЫЗ АЙТАТ:",
    "speech": "Мен өзүнүн жарыгы менен жаркырам.",
    "question": "Жылдыз деген эмне?",
    "icon": "👨‍🚀",
    "tag": "⭐ ЖЫЛДЫЗДАР",
    "options": [
      {
        "id": 1,
        "text": "1) Өзүнүн жарыгы менен жаркыраган асман денеси",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Планета",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Ай",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 51,
    "character": "ГАЛАКТИКА АЙТАТ:",
    "speech": "Мен миллиарддаган жылдыздардын системасымын.",
    "question": "Галактика деген эмне?",
    "icon": "🚀",
    "tag": "🌌 КОСМОСТУК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Жылдыздардын чоң системасы",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Бир планета",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Ай гана",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 52,
    "character": "КОМЕТА АЙТАТ:",
    "speech": "Мен асманда хвосту менен учам.",
    "question": "Комета деген эмне?",
    "icon": "⭐",
    "tag": "🌌 КОСМОСТУК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Хвосту бар асман денеси",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Жылдыз",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Планета гана",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 53,
    "character": "МЕТЕОР АЙТАТ:",
    "speech": "Мен атмосферага киргенде жанып калам.",
    "question": "Жылдыз түшүм деген эмне?",
    "icon": "🪐",
    "tag": "🌌 КОСМОСТУК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Атмосферага кирген метеор",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Жылдыз чыгышы",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Ай",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 54,
    "character": "ТЕЛЕСКОП АЙТАТ:",
    "speech": "Мен алыскы объектилерди көрсөтөм.",
    "question": "Телескоп деген эмне?",
    "icon": "🌌",
    "tag": "🔭 АСТРОНОМИЯ",
    "options": [
      {
        "id": 1,
        "text": "1) Алыскы объектилерди көргөн прибор",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Карта",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Компас",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 55,
    "character": "АСТРОНОМ АЙТАТ:",
    "speech": "Мен асман денелерин изилдейм.",
    "question": "Астрономия деген эмне?",
    "icon": "🛸",
    "tag": "🔭 АСТРОНОМИЯ",
    "options": [
      {
        "id": 1,
        "text": "1) Асман денелерин изилдөө илими",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) География",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Биология",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 56,
    "character": "КҮН ТУТУМУ АЙТАТ:",
    "speech": "Мен Күн жана аны айланган планеталардан туром.",
    "question": "Күн тутуму деген эмне?",
    "icon": "☀️",
    "tag": "🌌 КОСМОСТУК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Күн жана планеталар системасы",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Галактика гана",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Ай гана",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 57,
    "character": "СПУТНИК АЙТАТ:",
    "speech": "Мен планетаны айланып жүрөм.",
    "question": "Спутник деген эмне?",
    "icon": "🌙",
    "tag": "🪐 ПЛАНЕТАЛАР",
    "options": [
      {
        "id": 1,
        "text": "1) Планетаны айланган дене",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Жылдыз",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Галактика",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 58,
    "character": "КОСМОНАВТ АЙТАТ:",
    "speech": "Мен космосто учам.",
    "question": "Космонавт деген эмне?",
    "icon": "🔴",
    "tag": "🔭 АСТРОНОМИЯ",
    "options": [
      {
        "id": 1,
        "text": "1) Космосто учкан адам",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Акын",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Мугалим",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 59,
    "character": "ОРБИТА АЙТАТ:",
    "speech": "Мен планетанын айлануу жолу.",
    "question": "Орбита деген эмне?",
    "icon": "🔭",
    "tag": "🪐 ПЛАНЕТАЛАР",
    "options": [
      {
        "id": 1,
        "text": "1) Планетанын айлануу жолу",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Жылдыз",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Ай гана",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 60,
    "character": "ПЛАНЕТА АЙТАТ:",
    "speech": "Мен жылдызды айланып жүрөм.",
    "question": "Планета деген эмне?",
    "icon": "👨‍🚀",
    "tag": "🪐 ПЛАНЕТАЛАР",
    "options": [
      {
        "id": 1,
        "text": "1) Жылдызды айланган асман денеси",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Жылдыз",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Комета гана",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 61,
    "character": "КОСМОС ТЕМИР КЕЙПЕК АЙТАТ:",
    "speech": "Күн тутумунун борборунда зор жарык жана жылуулук берүүчү жалгыз жылдыз жайгашкан. Бардык планеталар ушул жылдызды айланышат.",
    "question": "Күн тутумунун борборунда жайгашкан эң башкы жана жалгыз жылдыз кайсы?",
    "icon": "🚀",
    "tag": "🌌 КОСМОСТУК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Күн (The Sun) ☀️",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Марс (Mars) 🔴",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Ай (The Moon) 🌙",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 62,
    "character": "АКЫЛДУУ ТЕЛЕСКОП АЙТАТ:",
    "speech": "Биздин Күн тутумубуз миллиардаган жылдыздардын зор системасында жайгашкан.",
    "question": "Биздин Күн тутуму жана Жер планетасы кайсы галактикада жайгашкан?",
    "icon": "⭐",
    "tag": "🌌 КОСМОСТУК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Саманчынын Жолу (Milky Way) 🌌",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Андромеда (Andromeda) 🌀",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Альфа Центавра (Alpha Centauri) ✨",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 63,
    "character": "ЖЕР АЙТАТ:",
    "speech": "Мен Күн тутумундагы үчүнчү планетамын.",
    "question": "Жер планетасы кайсы тутумдун мүчөсү?",
    "icon": "🪐",
    "tag": "🪐 ПЛАНЕТАЛАР",
    "options": [
      {
        "id": 1,
        "text": "1) Күн тутумунун 🌍",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Андромеда",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Ай тутуму",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 64,
    "character": "АЙ АЙТАТ:",
    "speech": "Мен Жердин жанында айланам.",
    "question": "Ай деген эмне?",
    "icon": "🌌",
    "tag": "🪐 ПЛАНЕТАЛАР",
    "options": [
      {
        "id": 1,
        "text": "1) Жердин жандуу спутниги 🌙",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Жылдыз",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Галактика",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 65,
    "character": "МАРС АЙТАТ:",
    "speech": "Мен 'Кызыл планета' деп аталам.",
    "question": "Марс планетасы кандай түстө?",
    "icon": "🛸",
    "tag": "🪐 ПЛАНЕТАЛАР",
    "options": [
      {
        "id": 1,
        "text": "1) Кызыл 🔴",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Көк",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Жашыл",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 66,
    "character": "ЮПИТЕР АЙТАТ:",
    "speech": "Мен Күн тутумундагы эң чоң планетамын.",
    "question": "Эң чоң планета кайсы?",
    "icon": "☀️",
    "tag": "🪐 ПЛАНЕТАЛАР",
    "options": [
      {
        "id": 1,
        "text": "1) Юпитер 🪐",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Жер",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Марс",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 67,
    "character": "САТУРН АЙТАТ:",
    "speech": "Менин айлана тегерегимде шакек бар.",
    "question": "Шакектери менен белгилүү планета кайсы?",
    "icon": "🌙",
    "tag": "🪐 ПЛАНЕТАЛАР",
    "options": [
      {
        "id": 1,
        "text": "1) Сатурн 💫",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Меркурий",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Венера",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 68,
    "character": "ВЕНЕРА АЙТАТ:",
    "speech": "Мен Күнгө эң жакын планеталардын биримин.",
    "question": "Күнгө эң жакын планета кайсы?",
    "icon": "🔴",
    "tag": "🪐 ПЛАНЕТАЛАР",
    "options": [
      {
        "id": 1,
        "text": "1) Меркурий",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Юпитер",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Нептун",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 69,
    "character": "НЕПТУН АЙТАТ:",
    "speech": "Мен Күн тутумундагы эң алыскы планеталардын биримин.",
    "question": "Күн тутумундагы эң алыскы планета кайсы?",
    "icon": "🔭",
    "tag": "🪐 ПЛАНЕТАЛАР",
    "options": [
      {
        "id": 1,
        "text": "1) Нептун 🌊",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Марс",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Жер",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 70,
    "character": "ЖЫЛДЫЗ АЙТАТ:",
    "speech": "Мен өзүнүн жарыгы менен жаркырам.",
    "question": "Жылдыз деген эмне?",
    "icon": "👨‍🚀",
    "tag": "⭐ ЖЫЛДЫЗДАР",
    "options": [
      {
        "id": 1,
        "text": "1) Өзүнүн жарыгы менен жаркыраган асман денеси",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Планета",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Ай",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 71,
    "character": "ГАЛАКТИКА АЙТАТ:",
    "speech": "Мен миллиарддаган жылдыздардын системасымын.",
    "question": "Галактика деген эмне?",
    "icon": "🚀",
    "tag": "🌌 КОСМОСТУК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Жылдыздардын чоң системасы",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Бир планета",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Ай гана",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 72,
    "character": "КОМЕТА АЙТАТ:",
    "speech": "Мен асманда хвосту менен учам.",
    "question": "Комета деген эмне?",
    "icon": "⭐",
    "tag": "🌌 КОСМОСТУК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Хвосту бар асман денеси",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Жылдыз",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Планета гана",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 73,
    "character": "МЕТЕОР АЙТАТ:",
    "speech": "Мен атмосферага киргенде жанып калам.",
    "question": "Жылдыз түшүм деген эмне?",
    "icon": "🪐",
    "tag": "🌌 КОСМОСТУК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Атмосферага кирген метеор",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Жылдыз чыгышы",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Ай",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 74,
    "character": "ТЕЛЕСКОП АЙТАТ:",
    "speech": "Мен алыскы объектилерди көрсөтөм.",
    "question": "Телескоп деген эмне?",
    "icon": "🌌",
    "tag": "🔭 АСТРОНОМИЯ",
    "options": [
      {
        "id": 1,
        "text": "1) Алыскы объектилерди көргөн прибор",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Карта",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Компас",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 75,
    "character": "АСТРОНОМ АЙТАТ:",
    "speech": "Мен асман денелерин изилдейм.",
    "question": "Астрономия деген эмне?",
    "icon": "🛸",
    "tag": "🔭 АСТРОНОМИЯ",
    "options": [
      {
        "id": 1,
        "text": "1) Асман денелерин изилдөө илими",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) География",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Биология",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 76,
    "character": "КҮН ТУТУМУ АЙТАТ:",
    "speech": "Мен Күн жана аны айланган планеталардан туром.",
    "question": "Күн тутуму деген эмне?",
    "icon": "☀️",
    "tag": "🌌 КОСМОСТУК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Күн жана планеталар системасы",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Галактика гана",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Ай гана",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 77,
    "character": "СПУТНИК АЙТАТ:",
    "speech": "Мен планетаны айланып жүрөм.",
    "question": "Спутник деген эмне?",
    "icon": "🌙",
    "tag": "🪐 ПЛАНЕТАЛАР",
    "options": [
      {
        "id": 1,
        "text": "1) Планетаны айланган дене",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Жылдыз",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Галактика",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 78,
    "character": "КОСМОНАВТ АЙТАТ:",
    "speech": "Мен космосто учам.",
    "question": "Космонавт деген эмне?",
    "icon": "🔴",
    "tag": "🔭 АСТРОНОМИЯ",
    "options": [
      {
        "id": 1,
        "text": "1) Космосто учкан адам",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Акын",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Мугалим",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 79,
    "character": "ОРБИТА АЙТАТ:",
    "speech": "Мен планетанын айлануу жолу.",
    "question": "Орбита деген эмне?",
    "icon": "🔭",
    "tag": "🪐 ПЛАНЕТАЛАР",
    "options": [
      {
        "id": 1,
        "text": "1) Планетанын айлануу жолу",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Жылдыз",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Ай гана",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 80,
    "character": "ПЛАНЕТА АЙТАТ:",
    "speech": "Мен жылдызды айланып жүрөм.",
    "question": "Планета деген эмне?",
    "icon": "👨‍🚀",
    "tag": "🪐 ПЛАНЕТАЛАР",
    "options": [
      {
        "id": 1,
        "text": "1) Жылдызды айланган асман денеси",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Жылдыз",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Комета гана",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 81,
    "character": "КОСМОС ТЕМИР КЕЙПЕК АЙТАТ:",
    "speech": "Күн тутумунун борборунда зор жарык жана жылуулук берүүчү жалгыз жылдыз жайгашкан. Бардык планеталар ушул жылдызды айланышат.",
    "question": "Күн тутумунун борборунда жайгашкан эң башкы жана жалгыз жылдыз кайсы?",
    "icon": "🚀",
    "tag": "🌌 КОСМОСТУК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Күн (The Sun) ☀️",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Марс (Mars) 🔴",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Ай (The Moon) 🌙",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 82,
    "character": "АКЫЛДУУ ТЕЛЕСКОП АЙТАТ:",
    "speech": "Биздин Күн тутумубуз миллиардаган жылдыздардын зор системасында жайгашкан.",
    "question": "Биздин Күн тутуму жана Жер планетасы кайсы галактикада жайгашкан?",
    "icon": "⭐",
    "tag": "🌌 КОСМОСТУК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Саманчынын Жолу (Milky Way) 🌌",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Андромеда (Andromeda) 🌀",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Альфа Центавра (Alpha Centauri) ✨",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 83,
    "character": "ЖЕР АЙТАТ:",
    "speech": "Мен Күн тутумундагы үчүнчү планетамын.",
    "question": "Жер планетасы кайсы тутумдун мүчөсү?",
    "icon": "🪐",
    "tag": "🪐 ПЛАНЕТАЛАР",
    "options": [
      {
        "id": 1,
        "text": "1) Күн тутумунун 🌍",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Андромеда",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Ай тутуму",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 84,
    "character": "АЙ АЙТАТ:",
    "speech": "Мен Жердин жанында айланам.",
    "question": "Ай деген эмне?",
    "icon": "🌌",
    "tag": "🪐 ПЛАНЕТАЛАР",
    "options": [
      {
        "id": 1,
        "text": "1) Жердин жандуу спутниги 🌙",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Жылдыз",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Галактика",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 85,
    "character": "МАРС АЙТАТ:",
    "speech": "Мен 'Кызыл планета' деп аталам.",
    "question": "Марс планетасы кандай түстө?",
    "icon": "🛸",
    "tag": "🪐 ПЛАНЕТАЛАР",
    "options": [
      {
        "id": 1,
        "text": "1) Кызыл 🔴",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Көк",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Жашыл",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 86,
    "character": "ЮПИТЕР АЙТАТ:",
    "speech": "Мен Күн тутумундагы эң чоң планетамын.",
    "question": "Эң чоң планета кайсы?",
    "icon": "☀️",
    "tag": "🪐 ПЛАНЕТАЛАР",
    "options": [
      {
        "id": 1,
        "text": "1) Юпитер 🪐",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Жер",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Марс",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 87,
    "character": "САТУРН АЙТАТ:",
    "speech": "Менин айлана тегерегимде шакек бар.",
    "question": "Шакектери менен белгилүү планета кайсы?",
    "icon": "🌙",
    "tag": "🪐 ПЛАНЕТАЛАР",
    "options": [
      {
        "id": 1,
        "text": "1) Сатурн 💫",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Меркурий",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Венера",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 88,
    "character": "ВЕНЕРА АЙТАТ:",
    "speech": "Мен Күнгө эң жакын планеталардын биримин.",
    "question": "Күнгө эң жакын планета кайсы?",
    "icon": "🔴",
    "tag": "🪐 ПЛАНЕТАЛАР",
    "options": [
      {
        "id": 1,
        "text": "1) Меркурий",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Юпитер",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Нептун",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 89,
    "character": "НЕПТУН АЙТАТ:",
    "speech": "Мен Күн тутумундагы эң алыскы планеталардын биримин.",
    "question": "Күн тутумундагы эң алыскы планета кайсы?",
    "icon": "🔭",
    "tag": "🪐 ПЛАНЕТАЛАР",
    "options": [
      {
        "id": 1,
        "text": "1) Нептун 🌊",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Марс",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Жер",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 90,
    "character": "ЖЫЛДЫЗ АЙТАТ:",
    "speech": "Мен өзүнүн жарыгы менен жаркырам.",
    "question": "Жылдыз деген эмне?",
    "icon": "👨‍🚀",
    "tag": "⭐ ЖЫЛДЫЗДАР",
    "options": [
      {
        "id": 1,
        "text": "1) Өзүнүн жарыгы менен жаркыраган асман денеси",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Планета",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Ай",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 91,
    "character": "ГАЛАКТИКА АЙТАТ:",
    "speech": "Мен миллиарддаган жылдыздардын системасымын.",
    "question": "Галактика деген эмне?",
    "icon": "🚀",
    "tag": "🌌 КОСМОСТУК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Жылдыздардын чоң системасы",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Бир планета",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Ай гана",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 92,
    "character": "КОМЕТА АЙТАТ:",
    "speech": "Мен асманда хвосту менен учам.",
    "question": "Комета деген эмне?",
    "icon": "⭐",
    "tag": "🌌 КОСМОСТУК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Хвосту бар асман денеси",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Жылдыз",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Планета гана",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 93,
    "character": "МЕТЕОР АЙТАТ:",
    "speech": "Мен атмосферага киргенде жанып калам.",
    "question": "Жылдыз түшүм деген эмне?",
    "icon": "🪐",
    "tag": "🌌 КОСМОСТУК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Атмосферага кирген метеор",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Жылдыз чыгышы",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Ай",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 94,
    "character": "ТЕЛЕСКОП АЙТАТ:",
    "speech": "Мен алыскы объектилерди көрсөтөм.",
    "question": "Телескоп деген эмне?",
    "icon": "🌌",
    "tag": "🔭 АСТРОНОМИЯ",
    "options": [
      {
        "id": 1,
        "text": "1) Алыскы объектилерди көргөн прибор",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Карта",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Компас",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 95,
    "character": "АСТРОНОМ АЙТАТ:",
    "speech": "Мен асман денелерин изилдейм.",
    "question": "Астрономия деген эмне?",
    "icon": "🛸",
    "tag": "🔭 АСТРОНОМИЯ",
    "options": [
      {
        "id": 1,
        "text": "1) Асман денелерин изилдөө илими",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) География",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Биология",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 96,
    "character": "КҮН ТУТУМУ АЙТАТ:",
    "speech": "Мен Күн жана аны айланган планеталардан туром.",
    "question": "Күн тутуму деген эмне?",
    "icon": "☀️",
    "tag": "🌌 КОСМОСТУК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Күн жана планеталар системасы",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Галактика гана",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Ай гана",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 97,
    "character": "СПУТНИК АЙТАТ:",
    "speech": "Мен планетаны айланып жүрөм.",
    "question": "Спутник деген эмне?",
    "icon": "🌙",
    "tag": "🪐 ПЛАНЕТАЛАР",
    "options": [
      {
        "id": 1,
        "text": "1) Планетаны айланган дене",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Жылдыз",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Галактика",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 98,
    "character": "КОСМОНАВТ АЙТАТ:",
    "speech": "Мен космосто учам.",
    "question": "Космонавт деген эмне?",
    "icon": "🔴",
    "tag": "🔭 АСТРОНОМИЯ",
    "options": [
      {
        "id": 1,
        "text": "1) Космосто учкан адам",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Акын",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Мугалим",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 99,
    "character": "ОРБИТА АЙТАТ:",
    "speech": "Мен планетанын айлануу жолу.",
    "question": "Орбита деген эмне?",
    "icon": "🔭",
    "tag": "🪐 ПЛАНЕТАЛАР",
    "options": [
      {
        "id": 1,
        "text": "1) Планетанын айлануу жолу",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Жылдыз",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Ай гана",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 100,
    "character": "ПЛАНЕТА АЙТАТ:",
    "speech": "Мен жылдызды айланып жүрөм.",
    "question": "Планета деген эмне?",
    "icon": "👨‍🚀",
    "tag": "🪐 ПЛАНЕТАЛАР",
    "options": [
      {
        "id": 1,
        "text": "1) Жылдызды айланган асман денеси",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Жылдыз",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Комета гана",
        "isCorrect": false
      }
    ]
  }
];
