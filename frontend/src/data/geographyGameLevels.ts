export interface GeographyGameOption {
  id: number;
  text: string;
  isCorrect: boolean;
}

export interface GeographyGameLevel {
  id: number;
  character: string;
  speech: string;
  question: string;
  icon: string;
  tag: string;
  options: GeographyGameOption[];
}

export const geographyGameLevels: GeographyGameLevel[] = [
  {
    "id": 1,
    "character": "АКЫЛДУУ ЖЕР ШАРЫ АЙТАТ:",
    "speech": "Салам, жаш саякатчы! Менин бетимдин 71%ын суу каптап жатат. Эң чоң аянтты ээлеген материк кайсы?",
    "question": "Жер шарындагы эң чоң материк (континент) кайсы?",
    "icon": "🌍",
    "tag": "🗺️ ГЕОГРАФИЯЛЫК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Евразия (Биз жашаган материк) ⛰️",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Африка (Эң ысык материк) 🏜️",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Түндүк Америка 🗺️",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 2,
    "character": "ЭСКИ КОМПАС АЙТАТ:",
    "speech": "Менин жебем дайыма Түндүктү көрсөтүп турат. Күн кайсы тараптан атаарын билесиңби?",
    "question": "Күн Жердин кайсы тарабынан чыгат (атат)?",
    "icon": "🧭",
    "tag": "🗺️ ГЕОГРАФИЯЛЫК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Чыгыштан 🌅",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Батыштан 🌇",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Түштүктөн ☀️",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 3,
    "character": "ТЫНЧ ОКЕАН АЙТАТ:",
    "speech": "Мен Жер шарындагы эң чоң океанмын.",
    "question": "Эң чоң океан кайсы?",
    "icon": "🗺️",
    "tag": "🗺️ ГЕОГРАФИЯЛЫК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Тынч океан 🌊",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Атлантика океаны",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Индия океаны",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 4,
    "character": "ЭВЕРЕСТ АЙТАТ:",
    "speech": "Мен Жердеги эң бийик чокумун.",
    "question": "Эң бийик чоку кайсы?",
    "icon": "⛰️",
    "tag": "🗺️ ГЕОГРАФИЯЛЫК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Эверест ⛰️",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Килиманджаро",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Монблан",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 5,
    "character": "КЫРГЫЗСТАН АЙТАТ:",
    "speech": "Мен Борбор Азияда жайгашкан тоолуу өлкөмүн.",
    "question": "Кыргызстандын борбору кайсы?",
    "icon": "🌊",
    "tag": "🇰🇬 КЫРГЫЗСТАН",
    "options": [
      {
        "id": 1,
        "text": "1) Бишкек 🇰🇬",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Ош гана",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Алматы",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 6,
    "character": "ЭКВАТОР АЙТАТ:",
    "speech": "Мен Жер шарын тең бөлүп турам.",
    "question": "Экватор деген эмне?",
    "icon": "🏜️",
    "tag": "🗺️ ГЕОГРАФИЯЛЫК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Жер шарын тең бөлгөн сызык",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Эң бийик тоо",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Чоң дарыя",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 7,
    "character": "САХАРА АЙТАТ:",
    "speech": "Мен Африкадагы эң чоң чөлмүн.",
    "question": "Сахара чөлү кайда жайгашкан?",
    "icon": "🌅",
    "tag": "🗺️ ГЕОГРАФИЯЛЫК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Африкада 🏜️",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Австралияда",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Азияда",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 8,
    "character": "АМАЗОНКА АЙТАТ:",
    "speech": "Мен дүйнөдөгү эң чоң дарыя болуп саналам.",
    "question": "Эң чоң дарыя кайсы?",
    "icon": "🇰🇬",
    "tag": "🗺️ ГЕОГРАФИЯЛЫК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Амазонка 🌿",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Нил",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Дунай",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 9,
    "character": "АВСТРАЛИЯ АЙТАТ:",
    "speech": "Мен эң кичинекей материкмин.",
    "question": "Эң кичинекей материк кайсы?",
    "icon": "🎈",
    "tag": "🗺️ ГЕОГРАФИЯЛЫК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Австралия 🦘",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Евразия",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Антарктида гана",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 10,
    "character": "АНТАРКТИДА АЙТАТ:",
    "speech": "Мен эң муздак материкмин.",
    "question": "Антарктида кайда жайгашкан?",
    "icon": "🌿",
    "tag": "🗺️ ГЕОГРАФИЯЛЫК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Түштүк полюста 🧊",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Түндүк полюста",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Экватордо",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 11,
    "character": "ТҮНДҮК ПОЛЮС АЙТАТ:",
    "speech": "Мен Жердин түндүк чекити.",
    "question": "Түндүк полюс кайда?",
    "icon": "🌍",
    "tag": "🗺️ ГЕОГРАФИЯЛЫК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Түндүктө",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Түштүктө",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Чыгышта",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 12,
    "character": "ИССЫК-КӨЛ АЙТАТ:",
    "speech": "Мен Кыргызстандын эң чоң көлүмүн.",
    "question": "Иссык-Көл кайда?",
    "icon": "🧭",
    "tag": "🇰🇬 КЫРГЫЗСТАН",
    "options": [
      {
        "id": 1,
        "text": "1) Кыргызстанда 💧",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Казакстанда гана",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Россияда",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 13,
    "character": "ТИАНЬ-ШААНЬ АЙТАТ:",
    "speech": "Мен Кытайдагы улуу дарыя.",
    "question": "Тянь-Шань тоолору кайда?",
    "icon": "🗺️",
    "tag": "🗺️ ГЕОГРАФИЯЛЫК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Борбор Азияда ⛰️",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Африкада",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Австралияда",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 14,
    "character": "КЛИМАТ АЙТАТ:",
    "speech": "Мен аймактардын абанын узак мезгилдик абалы.",
    "question": "Климат деген эмне?",
    "icon": "⛰️",
    "tag": "🗺️ ГЕОГРАФИЯЛЫК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Абанын узак мезгилдик абалы",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Бүгүнкү температура гана",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Жер титремеси",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 15,
    "character": "КАРТА АЙТАТ:",
    "speech": "Мен Жер бетин кичирейтип көрсөтөм.",
    "question": "Географиялык карта эмне?",
    "icon": "🌊",
    "tag": "🗺️ ГЕОГРАФИЯЛЫК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Жер бетинин модели",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Сүрөт гана",
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
    "id": 16,
    "character": "МАСШТАБ АЙТАТ:",
    "speech": "Мен картанын тактыгын көрсөтөм.",
    "question": "Картанын масштабы деген эмне?",
    "icon": "🏜️",
    "tag": "🗺️ ГЕОГРАФИЯЛЫК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Чоңдукту кичирейтүү коэффициенти",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Түстүн аты",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Деңиз тереңдиги",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 17,
    "character": "РЕЛЬЕФ АЙТАТ:",
    "speech": "Мен Жер бетинин формасын сүрөттөйм.",
    "question": "Рельеф деген эмне?",
    "icon": "🌅",
    "tag": "🗺️ ГЕОГРАФИЯЛЫК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Жер бетинин формасы",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Аба ысык",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Дарыя ылдамдыгы",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 18,
    "character": "ВУЛКАН АЙТАТ:",
    "speech": "Мен тоодон лава чыгарам.",
    "question": "Вулкан деген эмне?",
    "icon": "🇰🇬",
    "tag": "🗺️ ГЕОГРАФИЯЛЫК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Лава чыгарган тоо",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Көл",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Чөл",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 19,
    "character": "ЦУНАМИ АЙТАТ:",
    "speech": "Мен деңиздеги ири толкунмун.",
    "question": "Цунами эмне?",
    "icon": "🎈",
    "tag": "🗺️ ГЕОГРАФИЯЛЫК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Деңиздеги ири толкун",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Жер титреме",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Кар көчкүсү",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 20,
    "character": "ОАЗИС АЙТАТ:",
    "speech": "Мен чөлдөгү суу жана жашыл жермин.",
    "question": "Оазис деген эмне?",
    "icon": "🌿",
    "tag": "🗺️ ГЕОГРАФИЯЛЫК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Чөлдөгү суу жана жашыл жер",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Тоо чокусу",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Муз аймагы",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 21,
    "character": "АКЫЛДУУ ЖЕР ШАРЫ АЙТАТ:",
    "speech": "Салам, жаш саякатчы! Менин бетимдин 71%ын суу каптап жатат. Эң чоң аянтты ээлеген материк кайсы?",
    "question": "Жер шарындагы эң чоң материк (континент) кайсы?",
    "icon": "🌍",
    "tag": "🗺️ ГЕОГРАФИЯЛЫК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Евразия (Биз жашаган материк) ⛰️",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Африка (Эң ысык материк) 🏜️",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Түндүк Америка 🗺️",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 22,
    "character": "ЭСКИ КОМПАС АЙТАТ:",
    "speech": "Менин жебем дайыма Түндүктү көрсөтүп турат. Күн кайсы тараптан атаарын билесиңби?",
    "question": "Күн Жердин кайсы тарабынан чыгат (атат)?",
    "icon": "🧭",
    "tag": "🗺️ ГЕОГРАФИЯЛЫК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Чыгыштан 🌅",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Батыштан 🌇",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Түштүктөн ☀️",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 23,
    "character": "ТЫНЧ ОКЕАН АЙТАТ:",
    "speech": "Мен Жер шарындагы эң чоң океанмын.",
    "question": "Эң чоң океан кайсы?",
    "icon": "🗺️",
    "tag": "🗺️ ГЕОГРАФИЯЛЫК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Тынч океан 🌊",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Атлантика океаны",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Индия океаны",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 24,
    "character": "ЭВЕРЕСТ АЙТАТ:",
    "speech": "Мен Жердеги эң бийик чокумун.",
    "question": "Эң бийик чоку кайсы?",
    "icon": "⛰️",
    "tag": "🗺️ ГЕОГРАФИЯЛЫК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Эверест ⛰️",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Килиманджаро",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Монблан",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 25,
    "character": "КЫРГЫЗСТАН АЙТАТ:",
    "speech": "Мен Борбор Азияда жайгашкан тоолуу өлкөмүн.",
    "question": "Кыргызстандын борбору кайсы?",
    "icon": "🌊",
    "tag": "🇰🇬 КЫРГЫЗСТАН",
    "options": [
      {
        "id": 1,
        "text": "1) Бишкек 🇰🇬",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Ош гана",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Алматы",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 26,
    "character": "ЭКВАТОР АЙТАТ:",
    "speech": "Мен Жер шарын тең бөлүп турам.",
    "question": "Экватор деген эмне?",
    "icon": "🏜️",
    "tag": "🗺️ ГЕОГРАФИЯЛЫК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Жер шарын тең бөлгөн сызык",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Эң бийик тоо",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Чоң дарыя",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 27,
    "character": "САХАРА АЙТАТ:",
    "speech": "Мен Африкадагы эң чоң чөлмүн.",
    "question": "Сахара чөлү кайда жайгашкан?",
    "icon": "🌅",
    "tag": "🗺️ ГЕОГРАФИЯЛЫК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Африкада 🏜️",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Австралияда",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Азияда",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 28,
    "character": "АМАЗОНКА АЙТАТ:",
    "speech": "Мен дүйнөдөгү эң чоң дарыя болуп саналам.",
    "question": "Эң чоң дарыя кайсы?",
    "icon": "🇰🇬",
    "tag": "🗺️ ГЕОГРАФИЯЛЫК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Амазонка 🌿",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Нил",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Дунай",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 29,
    "character": "АВСТРАЛИЯ АЙТАТ:",
    "speech": "Мен эң кичинекей материкмин.",
    "question": "Эң кичинекей материк кайсы?",
    "icon": "🎈",
    "tag": "🗺️ ГЕОГРАФИЯЛЫК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Австралия 🦘",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Евразия",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Антарктида гана",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 30,
    "character": "АНТАРКТИДА АЙТАТ:",
    "speech": "Мен эң муздак материкмин.",
    "question": "Антарктида кайда жайгашкан?",
    "icon": "🌿",
    "tag": "🗺️ ГЕОГРАФИЯЛЫК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Түштүк полюста 🧊",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Түндүк полюста",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Экватордо",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 31,
    "character": "ТҮНДҮК ПОЛЮС АЙТАТ:",
    "speech": "Мен Жердин түндүк чекити.",
    "question": "Түндүк полюс кайда?",
    "icon": "🌍",
    "tag": "🗺️ ГЕОГРАФИЯЛЫК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Түндүктө",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Түштүктө",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Чыгышта",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 32,
    "character": "ИССЫК-КӨЛ АЙТАТ:",
    "speech": "Мен Кыргызстандын эң чоң көлүмүн.",
    "question": "Иссык-Көл кайда?",
    "icon": "🧭",
    "tag": "🇰🇬 КЫРГЫЗСТАН",
    "options": [
      {
        "id": 1,
        "text": "1) Кыргызстанда 💧",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Казакстанда гана",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Россияда",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 33,
    "character": "ТИАНЬ-ШААНЬ АЙТАТ:",
    "speech": "Мен Кытайдагы улуу дарыя.",
    "question": "Тянь-Шань тоолору кайда?",
    "icon": "🗺️",
    "tag": "🗺️ ГЕОГРАФИЯЛЫК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Борбор Азияда ⛰️",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Африкада",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Австралияда",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 34,
    "character": "КЛИМАТ АЙТАТ:",
    "speech": "Мен аймактардын абанын узак мезгилдик абалы.",
    "question": "Климат деген эмне?",
    "icon": "⛰️",
    "tag": "🗺️ ГЕОГРАФИЯЛЫК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Абанын узак мезгилдик абалы",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Бүгүнкү температура гана",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Жер титремеси",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 35,
    "character": "КАРТА АЙТАТ:",
    "speech": "Мен Жер бетин кичирейтип көрсөтөм.",
    "question": "Географиялык карта эмне?",
    "icon": "🌊",
    "tag": "🗺️ ГЕОГРАФИЯЛЫК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Жер бетинин модели",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Сүрөт гана",
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
    "id": 36,
    "character": "МАСШТАБ АЙТАТ:",
    "speech": "Мен картанын тактыгын көрсөтөм.",
    "question": "Картанын масштабы деген эмне?",
    "icon": "🏜️",
    "tag": "🗺️ ГЕОГРАФИЯЛЫК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Чоңдукту кичирейтүү коэффициенти",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Түстүн аты",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Деңиз тереңдиги",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 37,
    "character": "РЕЛЬЕФ АЙТАТ:",
    "speech": "Мен Жер бетинин формасын сүрөттөйм.",
    "question": "Рельеф деген эмне?",
    "icon": "🌅",
    "tag": "🗺️ ГЕОГРАФИЯЛЫК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Жер бетинин формасы",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Аба ысык",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Дарыя ылдамдыгы",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 38,
    "character": "ВУЛКАН АЙТАТ:",
    "speech": "Мен тоодон лава чыгарам.",
    "question": "Вулкан деген эмне?",
    "icon": "🇰🇬",
    "tag": "🗺️ ГЕОГРАФИЯЛЫК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Лава чыгарган тоо",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Көл",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Чөл",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 39,
    "character": "ЦУНАМИ АЙТАТ:",
    "speech": "Мен деңиздеги ири толкунмун.",
    "question": "Цунами эмне?",
    "icon": "🎈",
    "tag": "🗺️ ГЕОГРАФИЯЛЫК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Деңиздеги ири толкун",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Жер титреме",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Кар көчкүсү",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 40,
    "character": "ОАЗИС АЙТАТ:",
    "speech": "Мен чөлдөгү суу жана жашыл жермин.",
    "question": "Оазис деген эмне?",
    "icon": "🌿",
    "tag": "🗺️ ГЕОГРАФИЯЛЫК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Чөлдөгү суу жана жашыл жер",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Тоо чокусу",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Муз аймагы",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 41,
    "character": "АКЫЛДУУ ЖЕР ШАРЫ АЙТАТ:",
    "speech": "Салам, жаш саякатчы! Менин бетимдин 71%ын суу каптап жатат. Эң чоң аянтты ээлеген материк кайсы?",
    "question": "Жер шарындагы эң чоң материк (континент) кайсы?",
    "icon": "🌍",
    "tag": "🗺️ ГЕОГРАФИЯЛЫК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Евразия (Биз жашаган материк) ⛰️",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Африка (Эң ысык материк) 🏜️",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Түндүк Америка 🗺️",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 42,
    "character": "ЭСКИ КОМПАС АЙТАТ:",
    "speech": "Менин жебем дайыма Түндүктү көрсөтүп турат. Күн кайсы тараптан атаарын билесиңби?",
    "question": "Күн Жердин кайсы тарабынан чыгат (атат)?",
    "icon": "🧭",
    "tag": "🗺️ ГЕОГРАФИЯЛЫК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Чыгыштан 🌅",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Батыштан 🌇",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Түштүктөн ☀️",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 43,
    "character": "ТЫНЧ ОКЕАН АЙТАТ:",
    "speech": "Мен Жер шарындагы эң чоң океанмын.",
    "question": "Эң чоң океан кайсы?",
    "icon": "🗺️",
    "tag": "🗺️ ГЕОГРАФИЯЛЫК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Тынч океан 🌊",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Атлантика океаны",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Индия океаны",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 44,
    "character": "ЭВЕРЕСТ АЙТАТ:",
    "speech": "Мен Жердеги эң бийик чокумун.",
    "question": "Эң бийик чоку кайсы?",
    "icon": "⛰️",
    "tag": "🗺️ ГЕОГРАФИЯЛЫК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Эверест ⛰️",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Килиманджаро",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Монблан",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 45,
    "character": "КЫРГЫЗСТАН АЙТАТ:",
    "speech": "Мен Борбор Азияда жайгашкан тоолуу өлкөмүн.",
    "question": "Кыргызстандын борбору кайсы?",
    "icon": "🌊",
    "tag": "🇰🇬 КЫРГЫЗСТАН",
    "options": [
      {
        "id": 1,
        "text": "1) Бишкек 🇰🇬",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Ош гана",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Алматы",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 46,
    "character": "ЭКВАТОР АЙТАТ:",
    "speech": "Мен Жер шарын тең бөлүп турам.",
    "question": "Экватор деген эмне?",
    "icon": "🏜️",
    "tag": "🗺️ ГЕОГРАФИЯЛЫК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Жер шарын тең бөлгөн сызык",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Эң бийик тоо",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Чоң дарыя",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 47,
    "character": "САХАРА АЙТАТ:",
    "speech": "Мен Африкадагы эң чоң чөлмүн.",
    "question": "Сахара чөлү кайда жайгашкан?",
    "icon": "🌅",
    "tag": "🗺️ ГЕОГРАФИЯЛЫК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Африкада 🏜️",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Австралияда",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Азияда",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 48,
    "character": "АМАЗОНКА АЙТАТ:",
    "speech": "Мен дүйнөдөгү эң чоң дарыя болуп саналам.",
    "question": "Эң чоң дарыя кайсы?",
    "icon": "🇰🇬",
    "tag": "🗺️ ГЕОГРАФИЯЛЫК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Амазонка 🌿",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Нил",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Дунай",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 49,
    "character": "АВСТРАЛИЯ АЙТАТ:",
    "speech": "Мен эң кичинекей материкмин.",
    "question": "Эң кичинекей материк кайсы?",
    "icon": "🎈",
    "tag": "🗺️ ГЕОГРАФИЯЛЫК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Австралия 🦘",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Евразия",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Антарктида гана",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 50,
    "character": "АНТАРКТИДА АЙТАТ:",
    "speech": "Мен эң муздак материкмин.",
    "question": "Антарктида кайда жайгашкан?",
    "icon": "🌿",
    "tag": "🗺️ ГЕОГРАФИЯЛЫК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Түштүк полюста 🧊",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Түндүк полюста",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Экватордо",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 51,
    "character": "ТҮНДҮК ПОЛЮС АЙТАТ:",
    "speech": "Мен Жердин түндүк чекити.",
    "question": "Түндүк полюс кайда?",
    "icon": "🌍",
    "tag": "🗺️ ГЕОГРАФИЯЛЫК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Түндүктө",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Түштүктө",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Чыгышта",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 52,
    "character": "ИССЫК-КӨЛ АЙТАТ:",
    "speech": "Мен Кыргызстандын эң чоң көлүмүн.",
    "question": "Иссык-Көл кайда?",
    "icon": "🧭",
    "tag": "🇰🇬 КЫРГЫЗСТАН",
    "options": [
      {
        "id": 1,
        "text": "1) Кыргызстанда 💧",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Казакстанда гана",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Россияда",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 53,
    "character": "ТИАНЬ-ШААНЬ АЙТАТ:",
    "speech": "Мен Кытайдагы улуу дарыя.",
    "question": "Тянь-Шань тоолору кайда?",
    "icon": "🗺️",
    "tag": "🗺️ ГЕОГРАФИЯЛЫК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Борбор Азияда ⛰️",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Африкада",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Австралияда",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 54,
    "character": "КЛИМАТ АЙТАТ:",
    "speech": "Мен аймактардын абанын узак мезгилдик абалы.",
    "question": "Климат деген эмне?",
    "icon": "⛰️",
    "tag": "🗺️ ГЕОГРАФИЯЛЫК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Абанын узак мезгилдик абалы",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Бүгүнкү температура гана",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Жер титремеси",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 55,
    "character": "КАРТА АЙТАТ:",
    "speech": "Мен Жер бетин кичирейтип көрсөтөм.",
    "question": "Географиялык карта эмне?",
    "icon": "🌊",
    "tag": "🗺️ ГЕОГРАФИЯЛЫК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Жер бетинин модели",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Сүрөт гана",
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
    "id": 56,
    "character": "МАСШТАБ АЙТАТ:",
    "speech": "Мен картанын тактыгын көрсөтөм.",
    "question": "Картанын масштабы деген эмне?",
    "icon": "🏜️",
    "tag": "🗺️ ГЕОГРАФИЯЛЫК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Чоңдукту кичирейтүү коэффициенти",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Түстүн аты",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Деңиз тереңдиги",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 57,
    "character": "РЕЛЬЕФ АЙТАТ:",
    "speech": "Мен Жер бетинин формасын сүрөттөйм.",
    "question": "Рельеф деген эмне?",
    "icon": "🌅",
    "tag": "🗺️ ГЕОГРАФИЯЛЫК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Жер бетинин формасы",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Аба ысык",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Дарыя ылдамдыгы",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 58,
    "character": "ВУЛКАН АЙТАТ:",
    "speech": "Мен тоодон лава чыгарам.",
    "question": "Вулкан деген эмне?",
    "icon": "🇰🇬",
    "tag": "🗺️ ГЕОГРАФИЯЛЫК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Лава чыгарган тоо",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Көл",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Чөл",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 59,
    "character": "ЦУНАМИ АЙТАТ:",
    "speech": "Мен деңиздеги ири толкунмун.",
    "question": "Цунами эмне?",
    "icon": "🎈",
    "tag": "🗺️ ГЕОГРАФИЯЛЫК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Деңиздеги ири толкун",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Жер титреме",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Кар көчкүсү",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 60,
    "character": "ОАЗИС АЙТАТ:",
    "speech": "Мен чөлдөгү суу жана жашыл жермин.",
    "question": "Оазис деген эмне?",
    "icon": "🌿",
    "tag": "🗺️ ГЕОГРАФИЯЛЫК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Чөлдөгү суу жана жашыл жер",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Тоо чокусу",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Муз аймагы",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 61,
    "character": "АКЫЛДУУ ЖЕР ШАРЫ АЙТАТ:",
    "speech": "Салам, жаш саякатчы! Менин бетимдин 71%ын суу каптап жатат. Эң чоң аянтты ээлеген материк кайсы?",
    "question": "Жер шарындагы эң чоң материк (континент) кайсы?",
    "icon": "🌍",
    "tag": "🗺️ ГЕОГРАФИЯЛЫК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Евразия (Биз жашаган материк) ⛰️",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Африка (Эң ысык материк) 🏜️",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Түндүк Америка 🗺️",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 62,
    "character": "ЭСКИ КОМПАС АЙТАТ:",
    "speech": "Менин жебем дайыма Түндүктү көрсөтүп турат. Күн кайсы тараптан атаарын билесиңби?",
    "question": "Күн Жердин кайсы тарабынан чыгат (атат)?",
    "icon": "🧭",
    "tag": "🗺️ ГЕОГРАФИЯЛЫК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Чыгыштан 🌅",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Батыштан 🌇",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Түштүктөн ☀️",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 63,
    "character": "ТЫНЧ ОКЕАН АЙТАТ:",
    "speech": "Мен Жер шарындагы эң чоң океанмын.",
    "question": "Эң чоң океан кайсы?",
    "icon": "🗺️",
    "tag": "🗺️ ГЕОГРАФИЯЛЫК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Тынч океан 🌊",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Атлантика океаны",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Индия океаны",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 64,
    "character": "ЭВЕРЕСТ АЙТАТ:",
    "speech": "Мен Жердеги эң бийик чокумун.",
    "question": "Эң бийик чоку кайсы?",
    "icon": "⛰️",
    "tag": "🗺️ ГЕОГРАФИЯЛЫК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Эверест ⛰️",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Килиманджаро",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Монблан",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 65,
    "character": "КЫРГЫЗСТАН АЙТАТ:",
    "speech": "Мен Борбор Азияда жайгашкан тоолуу өлкөмүн.",
    "question": "Кыргызстандын борбору кайсы?",
    "icon": "🌊",
    "tag": "🇰🇬 КЫРГЫЗСТАН",
    "options": [
      {
        "id": 1,
        "text": "1) Бишкек 🇰🇬",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Ош гана",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Алматы",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 66,
    "character": "ЭКВАТОР АЙТАТ:",
    "speech": "Мен Жер шарын тең бөлүп турам.",
    "question": "Экватор деген эмне?",
    "icon": "🏜️",
    "tag": "🗺️ ГЕОГРАФИЯЛЫК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Жер шарын тең бөлгөн сызык",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Эң бийик тоо",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Чоң дарыя",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 67,
    "character": "САХАРА АЙТАТ:",
    "speech": "Мен Африкадагы эң чоң чөлмүн.",
    "question": "Сахара чөлү кайда жайгашкан?",
    "icon": "🌅",
    "tag": "🗺️ ГЕОГРАФИЯЛЫК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Африкада 🏜️",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Австралияда",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Азияда",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 68,
    "character": "АМАЗОНКА АЙТАТ:",
    "speech": "Мен дүйнөдөгү эң чоң дарыя болуп саналам.",
    "question": "Эң чоң дарыя кайсы?",
    "icon": "🇰🇬",
    "tag": "🗺️ ГЕОГРАФИЯЛЫК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Амазонка 🌿",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Нил",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Дунай",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 69,
    "character": "АВСТРАЛИЯ АЙТАТ:",
    "speech": "Мен эң кичинекей материкмин.",
    "question": "Эң кичинекей материк кайсы?",
    "icon": "🎈",
    "tag": "🗺️ ГЕОГРАФИЯЛЫК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Австралия 🦘",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Евразия",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Антарктида гана",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 70,
    "character": "АНТАРКТИДА АЙТАТ:",
    "speech": "Мен эң муздак материкмин.",
    "question": "Антарктида кайда жайгашкан?",
    "icon": "🌿",
    "tag": "🗺️ ГЕОГРАФИЯЛЫК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Түштүк полюста 🧊",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Түндүк полюста",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Экватордо",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 71,
    "character": "ТҮНДҮК ПОЛЮС АЙТАТ:",
    "speech": "Мен Жердин түндүк чекити.",
    "question": "Түндүк полюс кайда?",
    "icon": "🌍",
    "tag": "🗺️ ГЕОГРАФИЯЛЫК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Түндүктө",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Түштүктө",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Чыгышта",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 72,
    "character": "ИССЫК-КӨЛ АЙТАТ:",
    "speech": "Мен Кыргызстандын эң чоң көлүмүн.",
    "question": "Иссык-Көл кайда?",
    "icon": "🧭",
    "tag": "🇰🇬 КЫРГЫЗСТАН",
    "options": [
      {
        "id": 1,
        "text": "1) Кыргызстанда 💧",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Казакстанда гана",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Россияда",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 73,
    "character": "ТИАНЬ-ШААНЬ АЙТАТ:",
    "speech": "Мен Кытайдагы улуу дарыя.",
    "question": "Тянь-Шань тоолору кайда?",
    "icon": "🗺️",
    "tag": "🗺️ ГЕОГРАФИЯЛЫК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Борбор Азияда ⛰️",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Африкада",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Австралияда",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 74,
    "character": "КЛИМАТ АЙТАТ:",
    "speech": "Мен аймактардын абанын узак мезгилдик абалы.",
    "question": "Климат деген эмне?",
    "icon": "⛰️",
    "tag": "🗺️ ГЕОГРАФИЯЛЫК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Абанын узак мезгилдик абалы",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Бүгүнкү температура гана",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Жер титремеси",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 75,
    "character": "КАРТА АЙТАТ:",
    "speech": "Мен Жер бетин кичирейтип көрсөтөм.",
    "question": "Географиялык карта эмне?",
    "icon": "🌊",
    "tag": "🗺️ ГЕОГРАФИЯЛЫК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Жер бетинин модели",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Сүрөт гана",
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
    "id": 76,
    "character": "МАСШТАБ АЙТАТ:",
    "speech": "Мен картанын тактыгын көрсөтөм.",
    "question": "Картанын масштабы деген эмне?",
    "icon": "🏜️",
    "tag": "🗺️ ГЕОГРАФИЯЛЫК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Чоңдукту кичирейтүү коэффициенти",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Түстүн аты",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Деңиз тереңдиги",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 77,
    "character": "РЕЛЬЕФ АЙТАТ:",
    "speech": "Мен Жер бетинин формасын сүрөттөйм.",
    "question": "Рельеф деген эмне?",
    "icon": "🌅",
    "tag": "🗺️ ГЕОГРАФИЯЛЫК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Жер бетинин формасы",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Аба ысык",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Дарыя ылдамдыгы",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 78,
    "character": "ВУЛКАН АЙТАТ:",
    "speech": "Мен тоодон лава чыгарам.",
    "question": "Вулкан деген эмне?",
    "icon": "🇰🇬",
    "tag": "🗺️ ГЕОГРАФИЯЛЫК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Лава чыгарган тоо",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Көл",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Чөл",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 79,
    "character": "ЦУНАМИ АЙТАТ:",
    "speech": "Мен деңиздеги ири толкунмун.",
    "question": "Цунами эмне?",
    "icon": "🎈",
    "tag": "🗺️ ГЕОГРАФИЯЛЫК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Деңиздеги ири толкун",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Жер титреме",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Кар көчкүсү",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 80,
    "character": "ОАЗИС АЙТАТ:",
    "speech": "Мен чөлдөгү суу жана жашыл жермин.",
    "question": "Оазис деген эмне?",
    "icon": "🌿",
    "tag": "🗺️ ГЕОГРАФИЯЛЫК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Чөлдөгү суу жана жашыл жер",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Тоо чокусу",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Муз аймагы",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 81,
    "character": "АКЫЛДУУ ЖЕР ШАРЫ АЙТАТ:",
    "speech": "Салам, жаш саякатчы! Менин бетимдин 71%ын суу каптап жатат. Эң чоң аянтты ээлеген материк кайсы?",
    "question": "Жер шарындагы эң чоң материк (континент) кайсы?",
    "icon": "🌍",
    "tag": "🗺️ ГЕОГРАФИЯЛЫК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Евразия (Биз жашаган материк) ⛰️",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Африка (Эң ысык материк) 🏜️",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Түндүк Америка 🗺️",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 82,
    "character": "ЭСКИ КОМПАС АЙТАТ:",
    "speech": "Менин жебем дайыма Түндүктү көрсөтүп турат. Күн кайсы тараптан атаарын билесиңби?",
    "question": "Күн Жердин кайсы тарабынан чыгат (атат)?",
    "icon": "🧭",
    "tag": "🗺️ ГЕОГРАФИЯЛЫК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Чыгыштан 🌅",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Батыштан 🌇",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Түштүктөн ☀️",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 83,
    "character": "ТЫНЧ ОКЕАН АЙТАТ:",
    "speech": "Мен Жер шарындагы эң чоң океанмын.",
    "question": "Эң чоң океан кайсы?",
    "icon": "🗺️",
    "tag": "🗺️ ГЕОГРАФИЯЛЫК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Тынч океан 🌊",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Атлантика океаны",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Индия океаны",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 84,
    "character": "ЭВЕРЕСТ АЙТАТ:",
    "speech": "Мен Жердеги эң бийик чокумун.",
    "question": "Эң бийик чоку кайсы?",
    "icon": "⛰️",
    "tag": "🗺️ ГЕОГРАФИЯЛЫК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Эверест ⛰️",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Килиманджаро",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Монблан",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 85,
    "character": "КЫРГЫЗСТАН АЙТАТ:",
    "speech": "Мен Борбор Азияда жайгашкан тоолуу өлкөмүн.",
    "question": "Кыргызстандын борбору кайсы?",
    "icon": "🌊",
    "tag": "🇰🇬 КЫРГЫЗСТАН",
    "options": [
      {
        "id": 1,
        "text": "1) Бишкек 🇰🇬",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Ош гана",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Алматы",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 86,
    "character": "ЭКВАТОР АЙТАТ:",
    "speech": "Мен Жер шарын тең бөлүп турам.",
    "question": "Экватор деген эмне?",
    "icon": "🏜️",
    "tag": "🗺️ ГЕОГРАФИЯЛЫК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Жер шарын тең бөлгөн сызык",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Эң бийик тоо",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Чоң дарыя",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 87,
    "character": "САХАРА АЙТАТ:",
    "speech": "Мен Африкадагы эң чоң чөлмүн.",
    "question": "Сахара чөлү кайда жайгашкан?",
    "icon": "🌅",
    "tag": "🗺️ ГЕОГРАФИЯЛЫК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Африкада 🏜️",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Австралияда",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Азияда",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 88,
    "character": "АМАЗОНКА АЙТАТ:",
    "speech": "Мен дүйнөдөгү эң чоң дарыя болуп саналам.",
    "question": "Эң чоң дарыя кайсы?",
    "icon": "🇰🇬",
    "tag": "🗺️ ГЕОГРАФИЯЛЫК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Амазонка 🌿",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Нил",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Дунай",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 89,
    "character": "АВСТРАЛИЯ АЙТАТ:",
    "speech": "Мен эң кичинекей материкмин.",
    "question": "Эң кичинекей материк кайсы?",
    "icon": "🎈",
    "tag": "🗺️ ГЕОГРАФИЯЛЫК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Австралия 🦘",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Евразия",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Антарктида гана",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 90,
    "character": "АНТАРКТИДА АЙТАТ:",
    "speech": "Мен эң муздак материкмин.",
    "question": "Антарктида кайда жайгашкан?",
    "icon": "🌿",
    "tag": "🗺️ ГЕОГРАФИЯЛЫК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Түштүк полюста 🧊",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Түндүк полюста",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Экватордо",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 91,
    "character": "ТҮНДҮК ПОЛЮС АЙТАТ:",
    "speech": "Мен Жердин түндүк чекити.",
    "question": "Түндүк полюс кайда?",
    "icon": "🌍",
    "tag": "🗺️ ГЕОГРАФИЯЛЫК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Түндүктө",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Түштүктө",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Чыгышта",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 92,
    "character": "ИССЫК-КӨЛ АЙТАТ:",
    "speech": "Мен Кыргызстандын эң чоң көлүмүн.",
    "question": "Иссык-Көл кайда?",
    "icon": "🧭",
    "tag": "🇰🇬 КЫРГЫЗСТАН",
    "options": [
      {
        "id": 1,
        "text": "1) Кыргызстанда 💧",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Казакстанда гана",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Россияда",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 93,
    "character": "ТИАНЬ-ШААНЬ АЙТАТ:",
    "speech": "Мен Кытайдагы улуу дарыя.",
    "question": "Тянь-Шань тоолору кайда?",
    "icon": "🗺️",
    "tag": "🗺️ ГЕОГРАФИЯЛЫК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Борбор Азияда ⛰️",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Африкада",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Австралияда",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 94,
    "character": "КЛИМАТ АЙТАТ:",
    "speech": "Мен аймактардын абанын узак мезгилдик абалы.",
    "question": "Климат деген эмне?",
    "icon": "⛰️",
    "tag": "🗺️ ГЕОГРАФИЯЛЫК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Абанын узак мезгилдик абалы",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Бүгүнкү температура гана",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Жер титремеси",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 95,
    "character": "КАРТА АЙТАТ:",
    "speech": "Мен Жер бетин кичирейтип көрсөтөм.",
    "question": "Географиялык карта эмне?",
    "icon": "🌊",
    "tag": "🗺️ ГЕОГРАФИЯЛЫК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Жер бетинин модели",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Сүрөт гана",
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
    "id": 96,
    "character": "МАСШТАБ АЙТАТ:",
    "speech": "Мен картанын тактыгын көрсөтөм.",
    "question": "Картанын масштабы деген эмне?",
    "icon": "🏜️",
    "tag": "🗺️ ГЕОГРАФИЯЛЫК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Чоңдукту кичирейтүү коэффициенти",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Түстүн аты",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Деңиз тереңдиги",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 97,
    "character": "РЕЛЬЕФ АЙТАТ:",
    "speech": "Мен Жер бетинин формасын сүрөттөйм.",
    "question": "Рельеф деген эмне?",
    "icon": "🌅",
    "tag": "🗺️ ГЕОГРАФИЯЛЫК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Жер бетинин формасы",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Аба ысык",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Дарыя ылдамдыгы",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 98,
    "character": "ВУЛКАН АЙТАТ:",
    "speech": "Мен тоодон лава чыгарам.",
    "question": "Вулкан деген эмне?",
    "icon": "🇰🇬",
    "tag": "🗺️ ГЕОГРАФИЯЛЫК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Лава чыгарган тоо",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Көл",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Чөл",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 99,
    "character": "ЦУНАМИ АЙТАТ:",
    "speech": "Мен деңиздеги ири толкунмун.",
    "question": "Цунами эмне?",
    "icon": "🎈",
    "tag": "🗺️ ГЕОГРАФИЯЛЫК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Деңиздеги ири толкун",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Жер титреме",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Кар көчкүсү",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 100,
    "character": "ОАЗИС АЙТАТ:",
    "speech": "Мен чөлдөгү суу жана жашыл жермин.",
    "question": "Оазис деген эмне?",
    "icon": "🌿",
    "tag": "🗺️ ГЕОГРАФИЯЛЫК ТАПШЫРМА",
    "options": [
      {
        "id": 1,
        "text": "1) Чөлдөгү суу жана жашыл жер",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Тоо чокусу",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Муз аймагы",
        "isCorrect": false
      }
    ]
  }
];
