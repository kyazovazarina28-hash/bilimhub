export interface KyrgyzLanguageGameOption {
  id: number;
  text: string;
  isCorrect: boolean;
}

export interface KyrgyzLanguageGameLevel {
  id: number;
  character: string;
  speech: string;
  question: string;
  icon: string;
  tag: string;
  options: KyrgyzLanguageGameOption[];
}

export const kyrgyzLanguageGameLevels: KyrgyzLanguageGameLevel[] = [
  {
    "id": 1,
    "character": "АКЫЛДУУ КИТЕП АЙТАТ:",
    "speech": "Кыргыз тилде созулма үндүү тыбыштар жазууда эки бирдей үндүү тамга менен белгиленет.",
    "question": "Кайсы сөздө созулма үндүү тыбыш туура колдонулган?",
    "icon": "📖",
    "tag": "✍️ ТИЛДИК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Тоо (Бийик чоку) 🏔️",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Төн 🧥",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Нан 🍞",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 2,
    "character": "СЫЙКЫРДУУ КАЛЕМ АЙТАТ:",
    "speech": "Сүйлөмдүн ээси — ким? эмне? деген суроолорго жооп берет.",
    "question": "Сүйлөмдө ким? эмне? деген суроолорго жооп берген баш мүчө кайсы?",
    "icon": "✍️",
    "tag": "✍️ ТИЛДИК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Ээ (Сүйлөмдүн ээси) 👤",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Баяндооч 🎬",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Аныктооч 🔍",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 3,
    "character": "АЛФАВИТ АЙТАТ:",
    "speech": "Мен кыргыз тилинин негизги тамгаларымын.",
    "question": "Кыргыз алфавитинде канча тамга бар?",
    "icon": "🅰️",
    "tag": "🇰🇬 КЫРГЫЗ ТИЛИ",
    "options": [
      {
        "id": 1,
        "text": "1) 36 тамга",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) 26 тамга",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) 33 тамга",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 4,
    "character": "БАЯНДООЧ АЙТАТ:",
    "speech": "Мен сүйлөмдө иш-аракетти билдирем.",
    "question": "Баяндооч деген эмне?",
    "icon": "🇰🇬",
    "tag": "✍️ ТИЛДИК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Иш-аракетти билдирген сүйлөм мүчөсү",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Сүйлөмдүн ээси",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Ат атооч сөз",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 5,
    "character": "АНЫКТООЧ АЙТАТ:",
    "speech": "Мен сүйлөм мүчөсүн тактап, аныктайм.",
    "question": "Аныктооч деген эмне?",
    "icon": "💫",
    "tag": "✍️ ТИЛДИК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Сүйлөм мүчөсүн тактаган сөз",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Сүйлөмдүн ээси",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Сан атооч",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 6,
    "character": "АТ АТООЧ АЙТАТ:",
    "speech": "Мен заттын атын билдирем.",
    "question": "Ат атооч сөз деген эмне?",
    "icon": "📚",
    "tag": "✍️ ТИЛДИК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Заттын атын билдирген сөз",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Иш-аракетти билдирген сөз",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Санын билдирген сөз",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 7,
    "character": "САН АТООЧ АЙТАТ:",
    "speech": "Мен санын билдирем.",
    "question": "Сан атооч сөз деген эмне?",
    "icon": "💬",
    "tag": "✍️ ТИЛДИК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Санын билдирген сөз",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Заттын атын билдирген сөз",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Сүрөттөмө сөз",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 8,
    "character": "СҮРӨТТӨМӨ АЙТАТ:",
    "speech": "Мен заттын белгисин, касиетин билдирем.",
    "question": "Сүрөттөмө сөз деген эмне?",
    "icon": "🔤",
    "tag": "✍️ ТИЛДИК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Заттын белгисин билдирген сөз",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Иш-аракетти билдирген сөз",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Ат атооч сөз",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 9,
    "character": "ЖЫЛДЫМДЫК АЙТАТ:",
    "speech": "Мен иш-аракеттин ылдамдыгын көрсөтөм.",
    "question": "Жылдымдык сөз деген эмне?",
    "icon": "✨",
    "tag": "✍️ ТИЛДИК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Иш-аракеттин ылдамдыгын билдирген сөз",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Сан атооч",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Ат атооч",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 10,
    "character": "СҮЙЛӨМ АЙТАТ:",
    "speech": "Мен ойду толук билдирем.",
    "question": "Сүйлөм деген эмне?",
    "icon": "📜",
    "tag": "✍️ ТИЛДИК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Ойду толук билдирген сөз тобу",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Бир сөз",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Эки тамга",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 11,
    "character": "ЖАК АЙТАТ:",
    "speech": "Мен сүйлөмдүн ким же эмне жөнүндө экенин көрсөтөм.",
    "question": "Жак деген эмне?",
    "icon": "📖",
    "tag": "✍️ ТИЛДИК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Сүйлөмдүн ким/эмне жөнүндө экенин көрсөткөн форма",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Сан атооч",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Ат атооч",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 12,
    "character": "ЧЫЛДЫРАК АЙТАТ:",
    "speech": "Мен сүйлөмдүн иш-аракет кайсы убакытта болгонун көрсөтөм.",
    "question": "Чылдырак деген эмне?",
    "icon": "✍️",
    "tag": "✍️ ТИЛДИК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Убакытты билдирген сүйлөм мүчөсү",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Сүйлөмдүн ээси",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Ат атооч",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 13,
    "character": "ТЫНЫШ АЙТАТ:",
    "speech": "Мен сүйлөмдүн аягындагы белгини билдирем.",
    "question": "Тыныш белгилери кайсы?",
    "icon": "🅰️",
    "tag": "✍️ ТИЛДИК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) . , ! ? — тыныш белгилери",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Алфавит тамгалары",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Сандар гана",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 14,
    "character": "ҮНДҮҮ АЙТАТ:",
    "speech": "Мен сөздүн негизги үнүн билдирем.",
    "question": "Үндүү тамга деген эмне?",
    "icon": "🇰🇬",
    "tag": "🇰🇬 КЫРГЫЗ ТИЛИ",
    "options": [
      {
        "id": 1,
        "text": "1) Үн чыгарган тамга",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Үн чыгарбаган тамга",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Тыныш белгиси",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 15,
    "character": "ҮНСҮЗ АЙТАТ:",
    "speech": "Мен үн чыгарбаган тамгалармын.",
    "question": "Үнсүз тамга деген эмне?",
    "icon": "💫",
    "tag": "🇰🇬 КЫРГЫЗ ТИЛИ",
    "options": [
      {
        "id": 1,
        "text": "1) Үн чыгарбаган тамга",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Үндүү тамга",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Сан",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 16,
    "character": "МЭЭНИ АЙТАТ:",
    "speech": "Мен сөздүн маанисин билдирем.",
    "question": "Сөздүн мээниси деген эмне?",
    "icon": "📚",
    "tag": "✍️ ТИЛДИК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Сөздүн билдирген ою",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Тамганын түсү",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Сүйлөмдүн узундугу",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 17,
    "character": "ЭРЕЖЕ АЙТАТ:",
    "speech": "Мен тилдин мыйзамын сактайм.",
    "question": "Тил эрежеси деген эмне?",
    "icon": "💬",
    "tag": "✍️ ТИЛДИК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Тилдин жазуу жана сүйлөө мыйзамы",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Сан эсеби",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Географиялык карта",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 18,
    "character": "МЭТИН АЙТАТ:",
    "speech": "Мен бир нече сүйлөмдөн турган чоң ой.",
    "question": "Мәтин деген эмне?",
    "icon": "🔤",
    "tag": "✍️ ТИЛДИК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Бир нече сүйлөмдөн турган ой",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Бир сөз",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Бир тамга",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 19,
    "character": "КЫРГЫЗ ТИЛИ АЙТАТ:",
    "speech": "Мен Кыргызстандын мамлекеттик тилимин.",
    "question": "Кыргыз тили кайсы тил тобусуна кирет?",
    "icon": "✨",
    "tag": "🇰🇬 КЫРГЫЗ ТИЛИ",
    "options": [
      {
        "id": 1,
        "text": "1) Түрк тилдери тобу",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Роман тилдери",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Славян тилдери",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 20,
    "character": "МАНАС АЙТАТ:",
    "speech": "Мен кыргыз тилинин улуу эпосумун.",
    "question": "Манас эпосу кайсы тилде жазылган?",
    "icon": "📜",
    "tag": "🇰🇬 КЫРГЫЗ ТИЛИ",
    "options": [
      {
        "id": 1,
        "text": "1) Кыргыз тилинде 🇰🇬",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Англис тилинде",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Орус тилинде гана",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 21,
    "character": "АКЫЛДУУ КИТЕП АЙТАТ:",
    "speech": "Кыргыз тилде созулма үндүү тыбыштар жазууда эки бирдей үндүү тамга менен белгиленет.",
    "question": "Кайсы сөздө созулма үндүү тыбыш туура колдонулган?",
    "icon": "📖",
    "tag": "✍️ ТИЛДИК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Тоо (Бийик чоку) 🏔️",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Төн 🧥",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Нан 🍞",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 22,
    "character": "СЫЙКЫРДУУ КАЛЕМ АЙТАТ:",
    "speech": "Сүйлөмдүн ээси — ким? эмне? деген суроолорго жооп берет.",
    "question": "Сүйлөмдө ким? эмне? деген суроолорго жооп берген баш мүчө кайсы?",
    "icon": "✍️",
    "tag": "✍️ ТИЛДИК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Ээ (Сүйлөмдүн ээси) 👤",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Баяндооч 🎬",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Аныктооч 🔍",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 23,
    "character": "АЛФАВИТ АЙТАТ:",
    "speech": "Мен кыргыз тилинин негизги тамгаларымын.",
    "question": "Кыргыз алфавитинде канча тамга бар?",
    "icon": "🅰️",
    "tag": "🇰🇬 КЫРГЫЗ ТИЛИ",
    "options": [
      {
        "id": 1,
        "text": "1) 36 тамга",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) 26 тамга",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) 33 тамга",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 24,
    "character": "БАЯНДООЧ АЙТАТ:",
    "speech": "Мен сүйлөмдө иш-аракетти билдирем.",
    "question": "Баяндооч деген эмне?",
    "icon": "🇰🇬",
    "tag": "✍️ ТИЛДИК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Иш-аракетти билдирген сүйлөм мүчөсү",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Сүйлөмдүн ээси",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Ат атооч сөз",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 25,
    "character": "АНЫКТООЧ АЙТАТ:",
    "speech": "Мен сүйлөм мүчөсүн тактап, аныктайм.",
    "question": "Аныктооч деген эмне?",
    "icon": "💫",
    "tag": "✍️ ТИЛДИК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Сүйлөм мүчөсүн тактаган сөз",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Сүйлөмдүн ээси",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Сан атооч",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 26,
    "character": "АТ АТООЧ АЙТАТ:",
    "speech": "Мен заттын атын билдирем.",
    "question": "Ат атооч сөз деген эмне?",
    "icon": "📚",
    "tag": "✍️ ТИЛДИК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Заттын атын билдирген сөз",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Иш-аракетти билдирген сөз",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Санын билдирген сөз",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 27,
    "character": "САН АТООЧ АЙТАТ:",
    "speech": "Мен санын билдирем.",
    "question": "Сан атооч сөз деген эмне?",
    "icon": "💬",
    "tag": "✍️ ТИЛДИК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Санын билдирген сөз",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Заттын атын билдирген сөз",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Сүрөттөмө сөз",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 28,
    "character": "СҮРӨТТӨМӨ АЙТАТ:",
    "speech": "Мен заттын белгисин, касиетин билдирем.",
    "question": "Сүрөттөмө сөз деген эмне?",
    "icon": "🔤",
    "tag": "✍️ ТИЛДИК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Заттын белгисин билдирген сөз",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Иш-аракетти билдирген сөз",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Ат атооч сөз",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 29,
    "character": "ЖЫЛДЫМДЫК АЙТАТ:",
    "speech": "Мен иш-аракеттин ылдамдыгын көрсөтөм.",
    "question": "Жылдымдык сөз деген эмне?",
    "icon": "✨",
    "tag": "✍️ ТИЛДИК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Иш-аракеттин ылдамдыгын билдирген сөз",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Сан атооч",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Ат атооч",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 30,
    "character": "СҮЙЛӨМ АЙТАТ:",
    "speech": "Мен ойду толук билдирем.",
    "question": "Сүйлөм деген эмне?",
    "icon": "📜",
    "tag": "✍️ ТИЛДИК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Ойду толук билдирген сөз тобу",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Бир сөз",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Эки тамга",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 31,
    "character": "ЖАК АЙТАТ:",
    "speech": "Мен сүйлөмдүн ким же эмне жөнүндө экенин көрсөтөм.",
    "question": "Жак деген эмне?",
    "icon": "📖",
    "tag": "✍️ ТИЛДИК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Сүйлөмдүн ким/эмне жөнүндө экенин көрсөткөн форма",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Сан атооч",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Ат атооч",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 32,
    "character": "ЧЫЛДЫРАК АЙТАТ:",
    "speech": "Мен сүйлөмдүн иш-аракет кайсы убакытта болгонун көрсөтөм.",
    "question": "Чылдырак деген эмне?",
    "icon": "✍️",
    "tag": "✍️ ТИЛДИК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Убакытты билдирген сүйлөм мүчөсү",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Сүйлөмдүн ээси",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Ат атооч",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 33,
    "character": "ТЫНЫШ АЙТАТ:",
    "speech": "Мен сүйлөмдүн аягындагы белгини билдирем.",
    "question": "Тыныш белгилери кайсы?",
    "icon": "🅰️",
    "tag": "✍️ ТИЛДИК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) . , ! ? — тыныш белгилери",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Алфавит тамгалары",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Сандар гана",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 34,
    "character": "ҮНДҮҮ АЙТАТ:",
    "speech": "Мен сөздүн негизги үнүн билдирем.",
    "question": "Үндүү тамга деген эмне?",
    "icon": "🇰🇬",
    "tag": "🇰🇬 КЫРГЫЗ ТИЛИ",
    "options": [
      {
        "id": 1,
        "text": "1) Үн чыгарган тамга",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Үн чыгарбаган тамга",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Тыныш белгиси",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 35,
    "character": "ҮНСҮЗ АЙТАТ:",
    "speech": "Мен үн чыгарбаган тамгалармын.",
    "question": "Үнсүз тамга деген эмне?",
    "icon": "💫",
    "tag": "🇰🇬 КЫРГЫЗ ТИЛИ",
    "options": [
      {
        "id": 1,
        "text": "1) Үн чыгарбаган тамга",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Үндүү тамга",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Сан",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 36,
    "character": "МЭЭНИ АЙТАТ:",
    "speech": "Мен сөздүн маанисин билдирем.",
    "question": "Сөздүн мээниси деген эмне?",
    "icon": "📚",
    "tag": "✍️ ТИЛДИК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Сөздүн билдирген ою",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Тамганын түсү",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Сүйлөмдүн узундугу",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 37,
    "character": "ЭРЕЖЕ АЙТАТ:",
    "speech": "Мен тилдин мыйзамын сактайм.",
    "question": "Тил эрежеси деген эмне?",
    "icon": "💬",
    "tag": "✍️ ТИЛДИК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Тилдин жазуу жана сүйлөө мыйзамы",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Сан эсеби",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Географиялык карта",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 38,
    "character": "МЭТИН АЙТАТ:",
    "speech": "Мен бир нече сүйлөмдөн турган чоң ой.",
    "question": "Мәтин деген эмне?",
    "icon": "🔤",
    "tag": "✍️ ТИЛДИК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Бир нече сүйлөмдөн турган ой",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Бир сөз",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Бир тамга",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 39,
    "character": "КЫРГЫЗ ТИЛИ АЙТАТ:",
    "speech": "Мен Кыргызстандын мамлекеттик тилимин.",
    "question": "Кыргыз тили кайсы тил тобусуна кирет?",
    "icon": "✨",
    "tag": "🇰🇬 КЫРГЫЗ ТИЛИ",
    "options": [
      {
        "id": 1,
        "text": "1) Түрк тилдери тобу",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Роман тилдери",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Славян тилдери",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 40,
    "character": "МАНАС АЙТАТ:",
    "speech": "Мен кыргыз тилинин улуу эпосумун.",
    "question": "Манас эпосу кайсы тилде жазылган?",
    "icon": "📜",
    "tag": "🇰🇬 КЫРГЫЗ ТИЛИ",
    "options": [
      {
        "id": 1,
        "text": "1) Кыргыз тилинде 🇰🇬",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Англис тилинде",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Орус тилинде гана",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 41,
    "character": "АКЫЛДУУ КИТЕП АЙТАТ:",
    "speech": "Кыргыз тилде созулма үндүү тыбыштар жазууда эки бирдей үндүү тамга менен белгиленет.",
    "question": "Кайсы сөздө созулма үндүү тыбыш туура колдонулган?",
    "icon": "📖",
    "tag": "✍️ ТИЛДИК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Тоо (Бийик чоку) 🏔️",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Төн 🧥",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Нан 🍞",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 42,
    "character": "СЫЙКЫРДУУ КАЛЕМ АЙТАТ:",
    "speech": "Сүйлөмдүн ээси — ким? эмне? деген суроолорго жооп берет.",
    "question": "Сүйлөмдө ким? эмне? деген суроолорго жооп берген баш мүчө кайсы?",
    "icon": "✍️",
    "tag": "✍️ ТИЛДИК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Ээ (Сүйлөмдүн ээси) 👤",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Баяндооч 🎬",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Аныктооч 🔍",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 43,
    "character": "АЛФАВИТ АЙТАТ:",
    "speech": "Мен кыргыз тилинин негизги тамгаларымын.",
    "question": "Кыргыз алфавитинде канча тамга бар?",
    "icon": "🅰️",
    "tag": "🇰🇬 КЫРГЫЗ ТИЛИ",
    "options": [
      {
        "id": 1,
        "text": "1) 36 тамга",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) 26 тамга",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) 33 тамга",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 44,
    "character": "БАЯНДООЧ АЙТАТ:",
    "speech": "Мен сүйлөмдө иш-аракетти билдирем.",
    "question": "Баяндооч деген эмне?",
    "icon": "🇰🇬",
    "tag": "✍️ ТИЛДИК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Иш-аракетти билдирген сүйлөм мүчөсү",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Сүйлөмдүн ээси",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Ат атооч сөз",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 45,
    "character": "АНЫКТООЧ АЙТАТ:",
    "speech": "Мен сүйлөм мүчөсүн тактап, аныктайм.",
    "question": "Аныктооч деген эмне?",
    "icon": "💫",
    "tag": "✍️ ТИЛДИК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Сүйлөм мүчөсүн тактаган сөз",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Сүйлөмдүн ээси",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Сан атооч",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 46,
    "character": "АТ АТООЧ АЙТАТ:",
    "speech": "Мен заттын атын билдирем.",
    "question": "Ат атооч сөз деген эмне?",
    "icon": "📚",
    "tag": "✍️ ТИЛДИК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Заттын атын билдирген сөз",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Иш-аракетти билдирген сөз",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Санын билдирген сөз",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 47,
    "character": "САН АТООЧ АЙТАТ:",
    "speech": "Мен санын билдирем.",
    "question": "Сан атооч сөз деген эмне?",
    "icon": "💬",
    "tag": "✍️ ТИЛДИК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Санын билдирген сөз",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Заттын атын билдирген сөз",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Сүрөттөмө сөз",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 48,
    "character": "СҮРӨТТӨМӨ АЙТАТ:",
    "speech": "Мен заттын белгисин, касиетин билдирем.",
    "question": "Сүрөттөмө сөз деген эмне?",
    "icon": "🔤",
    "tag": "✍️ ТИЛДИК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Заттын белгисин билдирген сөз",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Иш-аракетти билдирген сөз",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Ат атооч сөз",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 49,
    "character": "ЖЫЛДЫМДЫК АЙТАТ:",
    "speech": "Мен иш-аракеттин ылдамдыгын көрсөтөм.",
    "question": "Жылдымдык сөз деген эмне?",
    "icon": "✨",
    "tag": "✍️ ТИЛДИК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Иш-аракеттин ылдамдыгын билдирген сөз",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Сан атооч",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Ат атооч",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 50,
    "character": "СҮЙЛӨМ АЙТАТ:",
    "speech": "Мен ойду толук билдирем.",
    "question": "Сүйлөм деген эмне?",
    "icon": "📜",
    "tag": "✍️ ТИЛДИК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Ойду толук билдирген сөз тобу",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Бир сөз",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Эки тамга",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 51,
    "character": "ЖАК АЙТАТ:",
    "speech": "Мен сүйлөмдүн ким же эмне жөнүндө экенин көрсөтөм.",
    "question": "Жак деген эмне?",
    "icon": "📖",
    "tag": "✍️ ТИЛДИК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Сүйлөмдүн ким/эмне жөнүндө экенин көрсөткөн форма",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Сан атооч",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Ат атооч",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 52,
    "character": "ЧЫЛДЫРАК АЙТАТ:",
    "speech": "Мен сүйлөмдүн иш-аракет кайсы убакытта болгонун көрсөтөм.",
    "question": "Чылдырак деген эмне?",
    "icon": "✍️",
    "tag": "✍️ ТИЛДИК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Убакытты билдирген сүйлөм мүчөсү",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Сүйлөмдүн ээси",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Ат атооч",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 53,
    "character": "ТЫНЫШ АЙТАТ:",
    "speech": "Мен сүйлөмдүн аягындагы белгини билдирем.",
    "question": "Тыныш белгилери кайсы?",
    "icon": "🅰️",
    "tag": "✍️ ТИЛДИК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) . , ! ? — тыныш белгилери",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Алфавит тамгалары",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Сандар гана",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 54,
    "character": "ҮНДҮҮ АЙТАТ:",
    "speech": "Мен сөздүн негизги үнүн билдирем.",
    "question": "Үндүү тамга деген эмне?",
    "icon": "🇰🇬",
    "tag": "🇰🇬 КЫРГЫЗ ТИЛИ",
    "options": [
      {
        "id": 1,
        "text": "1) Үн чыгарган тамга",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Үн чыгарбаган тамга",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Тыныш белгиси",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 55,
    "character": "ҮНСҮЗ АЙТАТ:",
    "speech": "Мен үн чыгарбаган тамгалармын.",
    "question": "Үнсүз тамга деген эмне?",
    "icon": "💫",
    "tag": "🇰🇬 КЫРГЫЗ ТИЛИ",
    "options": [
      {
        "id": 1,
        "text": "1) Үн чыгарбаган тамга",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Үндүү тамга",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Сан",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 56,
    "character": "МЭЭНИ АЙТАТ:",
    "speech": "Мен сөздүн маанисин билдирем.",
    "question": "Сөздүн мээниси деген эмне?",
    "icon": "📚",
    "tag": "✍️ ТИЛДИК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Сөздүн билдирген ою",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Тамганын түсү",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Сүйлөмдүн узундугу",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 57,
    "character": "ЭРЕЖЕ АЙТАТ:",
    "speech": "Мен тилдин мыйзамын сактайм.",
    "question": "Тил эрежеси деген эмне?",
    "icon": "💬",
    "tag": "✍️ ТИЛДИК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Тилдин жазуу жана сүйлөө мыйзамы",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Сан эсеби",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Географиялык карта",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 58,
    "character": "МЭТИН АЙТАТ:",
    "speech": "Мен бир нече сүйлөмдөн турган чоң ой.",
    "question": "Мәтин деген эмне?",
    "icon": "🔤",
    "tag": "✍️ ТИЛДИК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Бир нече сүйлөмдөн турган ой",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Бир сөз",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Бир тамга",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 59,
    "character": "КЫРГЫЗ ТИЛИ АЙТАТ:",
    "speech": "Мен Кыргызстандын мамлекеттик тилимин.",
    "question": "Кыргыз тили кайсы тил тобусуна кирет?",
    "icon": "✨",
    "tag": "🇰🇬 КЫРГЫЗ ТИЛИ",
    "options": [
      {
        "id": 1,
        "text": "1) Түрк тилдери тобу",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Роман тилдери",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Славян тилдери",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 60,
    "character": "МАНАС АЙТАТ:",
    "speech": "Мен кыргыз тилинин улуу эпосумун.",
    "question": "Манас эпосу кайсы тилде жазылган?",
    "icon": "📜",
    "tag": "🇰🇬 КЫРГЫЗ ТИЛИ",
    "options": [
      {
        "id": 1,
        "text": "1) Кыргыз тилинде 🇰🇬",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Англис тилинде",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Орус тилинде гана",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 61,
    "character": "АКЫЛДУУ КИТЕП АЙТАТ:",
    "speech": "Кыргыз тилде созулма үндүү тыбыштар жазууда эки бирдей үндүү тамга менен белгиленет.",
    "question": "Кайсы сөздө созулма үндүү тыбыш туура колдонулган?",
    "icon": "📖",
    "tag": "✍️ ТИЛДИК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Тоо (Бийик чоку) 🏔️",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Төн 🧥",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Нан 🍞",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 62,
    "character": "СЫЙКЫРДУУ КАЛЕМ АЙТАТ:",
    "speech": "Сүйлөмдүн ээси — ким? эмне? деген суроолорго жооп берет.",
    "question": "Сүйлөмдө ким? эмне? деген суроолорго жооп берген баш мүчө кайсы?",
    "icon": "✍️",
    "tag": "✍️ ТИЛДИК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Ээ (Сүйлөмдүн ээси) 👤",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Баяндооч 🎬",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Аныктооч 🔍",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 63,
    "character": "АЛФАВИТ АЙТАТ:",
    "speech": "Мен кыргыз тилинин негизги тамгаларымын.",
    "question": "Кыргыз алфавитинде канча тамга бар?",
    "icon": "🅰️",
    "tag": "🇰🇬 КЫРГЫЗ ТИЛИ",
    "options": [
      {
        "id": 1,
        "text": "1) 36 тамга",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) 26 тамга",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) 33 тамга",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 64,
    "character": "БАЯНДООЧ АЙТАТ:",
    "speech": "Мен сүйлөмдө иш-аракетти билдирем.",
    "question": "Баяндооч деген эмне?",
    "icon": "🇰🇬",
    "tag": "✍️ ТИЛДИК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Иш-аракетти билдирген сүйлөм мүчөсү",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Сүйлөмдүн ээси",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Ат атооч сөз",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 65,
    "character": "АНЫКТООЧ АЙТАТ:",
    "speech": "Мен сүйлөм мүчөсүн тактап, аныктайм.",
    "question": "Аныктооч деген эмне?",
    "icon": "💫",
    "tag": "✍️ ТИЛДИК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Сүйлөм мүчөсүн тактаган сөз",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Сүйлөмдүн ээси",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Сан атооч",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 66,
    "character": "АТ АТООЧ АЙТАТ:",
    "speech": "Мен заттын атын билдирем.",
    "question": "Ат атооч сөз деген эмне?",
    "icon": "📚",
    "tag": "✍️ ТИЛДИК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Заттын атын билдирген сөз",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Иш-аракетти билдирген сөз",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Санын билдирген сөз",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 67,
    "character": "САН АТООЧ АЙТАТ:",
    "speech": "Мен санын билдирем.",
    "question": "Сан атооч сөз деген эмне?",
    "icon": "💬",
    "tag": "✍️ ТИЛДИК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Санын билдирген сөз",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Заттын атын билдирген сөз",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Сүрөттөмө сөз",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 68,
    "character": "СҮРӨТТӨМӨ АЙТАТ:",
    "speech": "Мен заттын белгисин, касиетин билдирем.",
    "question": "Сүрөттөмө сөз деген эмне?",
    "icon": "🔤",
    "tag": "✍️ ТИЛДИК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Заттын белгисин билдирген сөз",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Иш-аракетти билдирген сөз",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Ат атооч сөз",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 69,
    "character": "ЖЫЛДЫМДЫК АЙТАТ:",
    "speech": "Мен иш-аракеттин ылдамдыгын көрсөтөм.",
    "question": "Жылдымдык сөз деген эмне?",
    "icon": "✨",
    "tag": "✍️ ТИЛДИК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Иш-аракеттин ылдамдыгын билдирген сөз",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Сан атооч",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Ат атооч",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 70,
    "character": "СҮЙЛӨМ АЙТАТ:",
    "speech": "Мен ойду толук билдирем.",
    "question": "Сүйлөм деген эмне?",
    "icon": "📜",
    "tag": "✍️ ТИЛДИК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Ойду толук билдирген сөз тобу",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Бир сөз",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Эки тамга",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 71,
    "character": "ЖАК АЙТАТ:",
    "speech": "Мен сүйлөмдүн ким же эмне жөнүндө экенин көрсөтөм.",
    "question": "Жак деген эмне?",
    "icon": "📖",
    "tag": "✍️ ТИЛДИК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Сүйлөмдүн ким/эмне жөнүндө экенин көрсөткөн форма",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Сан атооч",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Ат атооч",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 72,
    "character": "ЧЫЛДЫРАК АЙТАТ:",
    "speech": "Мен сүйлөмдүн иш-аракет кайсы убакытта болгонун көрсөтөм.",
    "question": "Чылдырак деген эмне?",
    "icon": "✍️",
    "tag": "✍️ ТИЛДИК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Убакытты билдирген сүйлөм мүчөсү",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Сүйлөмдүн ээси",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Ат атооч",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 73,
    "character": "ТЫНЫШ АЙТАТ:",
    "speech": "Мен сүйлөмдүн аягындагы белгини билдирем.",
    "question": "Тыныш белгилери кайсы?",
    "icon": "🅰️",
    "tag": "✍️ ТИЛДИК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) . , ! ? — тыныш белгилери",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Алфавит тамгалары",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Сандар гана",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 74,
    "character": "ҮНДҮҮ АЙТАТ:",
    "speech": "Мен сөздүн негизги үнүн билдирем.",
    "question": "Үндүү тамга деген эмне?",
    "icon": "🇰🇬",
    "tag": "🇰🇬 КЫРГЫЗ ТИЛИ",
    "options": [
      {
        "id": 1,
        "text": "1) Үн чыгарган тамга",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Үн чыгарбаган тамга",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Тыныш белгиси",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 75,
    "character": "ҮНСҮЗ АЙТАТ:",
    "speech": "Мен үн чыгарбаган тамгалармын.",
    "question": "Үнсүз тамга деген эмне?",
    "icon": "💫",
    "tag": "🇰🇬 КЫРГЫЗ ТИЛИ",
    "options": [
      {
        "id": 1,
        "text": "1) Үн чыгарбаган тамга",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Үндүү тамга",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Сан",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 76,
    "character": "МЭЭНИ АЙТАТ:",
    "speech": "Мен сөздүн маанисин билдирем.",
    "question": "Сөздүн мээниси деген эмне?",
    "icon": "📚",
    "tag": "✍️ ТИЛДИК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Сөздүн билдирген ою",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Тамганын түсү",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Сүйлөмдүн узундугу",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 77,
    "character": "ЭРЕЖЕ АЙТАТ:",
    "speech": "Мен тилдин мыйзамын сактайм.",
    "question": "Тил эрежеси деген эмне?",
    "icon": "💬",
    "tag": "✍️ ТИЛДИК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Тилдин жазуу жана сүйлөө мыйзамы",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Сан эсеби",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Географиялык карта",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 78,
    "character": "МЭТИН АЙТАТ:",
    "speech": "Мен бир нече сүйлөмдөн турган чоң ой.",
    "question": "Мәтин деген эмне?",
    "icon": "🔤",
    "tag": "✍️ ТИЛДИК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Бир нече сүйлөмдөн турган ой",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Бир сөз",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Бир тамга",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 79,
    "character": "КЫРГЫЗ ТИЛИ АЙТАТ:",
    "speech": "Мен Кыргызстандын мамлекеттик тилимин.",
    "question": "Кыргыз тили кайсы тил тобусуна кирет?",
    "icon": "✨",
    "tag": "🇰🇬 КЫРГЫЗ ТИЛИ",
    "options": [
      {
        "id": 1,
        "text": "1) Түрк тилдери тобу",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Роман тилдери",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Славян тилдери",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 80,
    "character": "МАНАС АЙТАТ:",
    "speech": "Мен кыргыз тилинин улуу эпосумун.",
    "question": "Манас эпосу кайсы тилде жазылган?",
    "icon": "📜",
    "tag": "🇰🇬 КЫРГЫЗ ТИЛИ",
    "options": [
      {
        "id": 1,
        "text": "1) Кыргыз тилинде 🇰🇬",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Англис тилинде",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Орус тилинде гана",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 81,
    "character": "АКЫЛДУУ КИТЕП АЙТАТ:",
    "speech": "Кыргыз тилде созулма үндүү тыбыштар жазууда эки бирдей үндүү тамга менен белгиленет.",
    "question": "Кайсы сөздө созулма үндүү тыбыш туура колдонулган?",
    "icon": "📖",
    "tag": "✍️ ТИЛДИК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Тоо (Бийик чоку) 🏔️",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Төн 🧥",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Нан 🍞",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 82,
    "character": "СЫЙКЫРДУУ КАЛЕМ АЙТАТ:",
    "speech": "Сүйлөмдүн ээси — ким? эмне? деген суроолорго жооп берет.",
    "question": "Сүйлөмдө ким? эмне? деген суроолорго жооп берген баш мүчө кайсы?",
    "icon": "✍️",
    "tag": "✍️ ТИЛДИК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Ээ (Сүйлөмдүн ээси) 👤",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Баяндооч 🎬",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Аныктооч 🔍",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 83,
    "character": "АЛФАВИТ АЙТАТ:",
    "speech": "Мен кыргыз тилинин негизги тамгаларымын.",
    "question": "Кыргыз алфавитинде канча тамга бар?",
    "icon": "🅰️",
    "tag": "🇰🇬 КЫРГЫЗ ТИЛИ",
    "options": [
      {
        "id": 1,
        "text": "1) 36 тамга",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) 26 тамга",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) 33 тамга",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 84,
    "character": "БАЯНДООЧ АЙТАТ:",
    "speech": "Мен сүйлөмдө иш-аракетти билдирем.",
    "question": "Баяндооч деген эмне?",
    "icon": "🇰🇬",
    "tag": "✍️ ТИЛДИК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Иш-аракетти билдирген сүйлөм мүчөсү",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Сүйлөмдүн ээси",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Ат атооч сөз",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 85,
    "character": "АНЫКТООЧ АЙТАТ:",
    "speech": "Мен сүйлөм мүчөсүн тактап, аныктайм.",
    "question": "Аныктооч деген эмне?",
    "icon": "💫",
    "tag": "✍️ ТИЛДИК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Сүйлөм мүчөсүн тактаган сөз",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Сүйлөмдүн ээси",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Сан атооч",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 86,
    "character": "АТ АТООЧ АЙТАТ:",
    "speech": "Мен заттын атын билдирем.",
    "question": "Ат атооч сөз деген эмне?",
    "icon": "📚",
    "tag": "✍️ ТИЛДИК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Заттын атын билдирген сөз",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Иш-аракетти билдирген сөз",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Санын билдирген сөз",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 87,
    "character": "САН АТООЧ АЙТАТ:",
    "speech": "Мен санын билдирем.",
    "question": "Сан атооч сөз деген эмне?",
    "icon": "💬",
    "tag": "✍️ ТИЛДИК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Санын билдирген сөз",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Заттын атын билдирген сөз",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Сүрөттөмө сөз",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 88,
    "character": "СҮРӨТТӨМӨ АЙТАТ:",
    "speech": "Мен заттын белгисин, касиетин билдирем.",
    "question": "Сүрөттөмө сөз деген эмне?",
    "icon": "🔤",
    "tag": "✍️ ТИЛДИК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Заттын белгисин билдирген сөз",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Иш-аракетти билдирген сөз",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Ат атооч сөз",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 89,
    "character": "ЖЫЛДЫМДЫК АЙТАТ:",
    "speech": "Мен иш-аракеттин ылдамдыгын көрсөтөм.",
    "question": "Жылдымдык сөз деген эмне?",
    "icon": "✨",
    "tag": "✍️ ТИЛДИК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Иш-аракеттин ылдамдыгын билдирген сөз",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Сан атооч",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Ат атооч",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 90,
    "character": "СҮЙЛӨМ АЙТАТ:",
    "speech": "Мен ойду толук билдирем.",
    "question": "Сүйлөм деген эмне?",
    "icon": "📜",
    "tag": "✍️ ТИЛДИК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Ойду толук билдирген сөз тобу",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Бир сөз",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Эки тамга",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 91,
    "character": "ЖАК АЙТАТ:",
    "speech": "Мен сүйлөмдүн ким же эмне жөнүндө экенин көрсөтөм.",
    "question": "Жак деген эмне?",
    "icon": "📖",
    "tag": "✍️ ТИЛДИК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Сүйлөмдүн ким/эмне жөнүндө экенин көрсөткөн форма",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Сан атооч",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Ат атооч",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 92,
    "character": "ЧЫЛДЫРАК АЙТАТ:",
    "speech": "Мен сүйлөмдүн иш-аракет кайсы убакытта болгонун көрсөтөм.",
    "question": "Чылдырак деген эмне?",
    "icon": "✍️",
    "tag": "✍️ ТИЛДИК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Убакытты билдирген сүйлөм мүчөсү",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Сүйлөмдүн ээси",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Ат атооч",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 93,
    "character": "ТЫНЫШ АЙТАТ:",
    "speech": "Мен сүйлөмдүн аягындагы белгини билдирем.",
    "question": "Тыныш белгилери кайсы?",
    "icon": "🅰️",
    "tag": "✍️ ТИЛДИК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) . , ! ? — тыныш белгилери",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Алфавит тамгалары",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Сандар гана",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 94,
    "character": "ҮНДҮҮ АЙТАТ:",
    "speech": "Мен сөздүн негизги үнүн билдирем.",
    "question": "Үндүү тамга деген эмне?",
    "icon": "🇰🇬",
    "tag": "🇰🇬 КЫРГЫЗ ТИЛИ",
    "options": [
      {
        "id": 1,
        "text": "1) Үн чыгарган тамга",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Үн чыгарбаган тамга",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Тыныш белгиси",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 95,
    "character": "ҮНСҮЗ АЙТАТ:",
    "speech": "Мен үн чыгарбаган тамгалармын.",
    "question": "Үнсүз тамга деген эмне?",
    "icon": "💫",
    "tag": "🇰🇬 КЫРГЫЗ ТИЛИ",
    "options": [
      {
        "id": 1,
        "text": "1) Үн чыгарбаган тамга",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Үндүү тамга",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Сан",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 96,
    "character": "МЭЭНИ АЙТАТ:",
    "speech": "Мен сөздүн маанисин билдирем.",
    "question": "Сөздүн мээниси деген эмне?",
    "icon": "📚",
    "tag": "✍️ ТИЛДИК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Сөздүн билдирген ою",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Тамганын түсү",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Сүйлөмдүн узундугу",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 97,
    "character": "ЭРЕЖЕ АЙТАТ:",
    "speech": "Мен тилдин мыйзамын сактайм.",
    "question": "Тил эрежеси деген эмне?",
    "icon": "💬",
    "tag": "✍️ ТИЛДИК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Тилдин жазуу жана сүйлөө мыйзамы",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Сан эсеби",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Географиялык карта",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 98,
    "character": "МЭТИН АЙТАТ:",
    "speech": "Мен бир нече сүйлөмдөн турган чоң ой.",
    "question": "Мәтин деген эмне?",
    "icon": "🔤",
    "tag": "✍️ ТИЛДИК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Бир нече сүйлөмдөн турган ой",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Бир сөз",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Бир тамга",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 99,
    "character": "КЫРГЫЗ ТИЛИ АЙТАТ:",
    "speech": "Мен Кыргызстандын мамлекеттик тилимин.",
    "question": "Кыргыз тили кайсы тил тобусуна кирет?",
    "icon": "✨",
    "tag": "🇰🇬 КЫРГЫЗ ТИЛИ",
    "options": [
      {
        "id": 1,
        "text": "1) Түрк тилдери тобу",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Роман тилдери",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Славян тилдери",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 100,
    "character": "МАНАС АЙТАТ:",
    "speech": "Мен кыргыз тилинин улуу эпосумун.",
    "question": "Манас эпосу кайсы тилде жазылган?",
    "icon": "📜",
    "tag": "🇰🇬 КЫРГЫЗ ТИЛИ",
    "options": [
      {
        "id": 1,
        "text": "1) Кыргыз тилинде 🇰🇬",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Англис тилинде",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Орус тилинде гана",
        "isCorrect": false
      }
    ]
  }
];
