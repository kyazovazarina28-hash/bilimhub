export interface EnglishGameOption {
  id: number;
  text: string;
  isCorrect: boolean;
}

export interface EnglishGameLevel {
  id: number;
  character: string;
  speech: string;
  question: string;
  icon: string;
  tag: string;
  options: EnglishGameOption[];
}

export const englishGameLevels: EnglishGameLevel[] = [
  {
    "id": 1,
    "character": "MR. BIG BEN SAYS:",
    "speech": "When we talk about an action happening right now, we use the Present Continuous tense.",
    "question": "Which sentence is written in the Present Continuous tense?",
    "icon": "🇬🇧",
    "tag": "🔤 GRAMMAR TASK",
    "options": [
      {
        "id": 1,
        "text": "1) I am reading a book right now. 📖",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) I read a book yesterday. 🕒",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) I will read a book tomorrow. 🚀",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 2,
    "character": "SHERLOCK THE CAT SAYS:",
    "speech": "Animals have specific names for their young ones. Do you know what we call a baby dog?",
    "question": "What is the correct English word for a baby dog?",
    "icon": "🚌",
    "tag": "📚 VOCABULARY",
    "options": [
      {
        "id": 1,
        "text": "1) Puppy 🐾",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Kitten 🐱",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Calf 🐮",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 3,
    "character": "TEACHER EMMA SAYS:",
    "speech": "The past tense of 'go' is irregular.",
    "question": "What is the past tense of 'go'?",
    "icon": "📖",
    "tag": "🔤 GRAMMAR TASK",
    "options": [
      {
        "id": 1,
        "text": "1) went",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) goed",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) gone",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 4,
    "character": "LONDON BUS SAYS:",
    "speech": "We use 'a' before consonant sounds and 'an' before vowel sounds.",
    "question": "Which is correct?",
    "icon": "🔤",
    "tag": "🔤 GRAMMAR TASK",
    "options": [
      {
        "id": 1,
        "text": "1) an apple 🍎",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) a apple",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) an book",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 5,
    "character": "BIG BEN SAYS:",
    "speech": "The plural of 'child' is irregular.",
    "question": "What is the plural of 'child'?",
    "icon": "✨",
    "tag": "📚 VOCABULARY",
    "options": [
      {
        "id": 1,
        "text": "1) children",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) childs",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) childes",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 6,
    "character": "SHERLOCK SAYS:",
    "speech": "A baby cat is called a kitten.",
    "question": "What is a baby cat called?",
    "icon": "🐶",
    "tag": "📚 VOCABULARY",
    "options": [
      {
        "id": 1,
        "text": "1) kitten 🐱",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) puppy",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) calf",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 7,
    "character": "TEACHER EMMA SAYS:",
    "speech": "We use 'will' for future actions.",
    "question": "Which sentence is in the Future Simple?",
    "icon": "🐱",
    "tag": "🔤 GRAMMAR TASK",
    "options": [
      {
        "id": 1,
        "text": "1) I will travel tomorrow.",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) I am traveling now.",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) I traveled yesterday.",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 8,
    "character": "MR. BIG BEN SAYS:",
    "speech": "The opposite of 'hot' is 'cold'.",
    "question": "What is the opposite of 'big'?",
    "icon": "🚀",
    "tag": "📚 VOCABULARY",
    "options": [
      {
        "id": 1,
        "text": "1) small",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) tall",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) long",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 9,
    "character": "LONDON BUS SAYS:",
    "speech": "Colors in English: red, blue, green.",
    "question": "What color is the sky on a sunny day?",
    "icon": "👋",
    "tag": "📚 VOCABULARY",
    "options": [
      {
        "id": 1,
        "text": "1) blue",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) green",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) red",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 10,
    "character": "SHERLOCK SAYS:",
    "speech": "A person who teaches is a teacher.",
    "question": "What do we call a person who flies a plane?",
    "icon": "🌐",
    "tag": "📚 VOCABULARY",
    "options": [
      {
        "id": 1,
        "text": "1) pilot",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) driver",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) cook",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 11,
    "character": "TEACHER EMMA SAYS:",
    "speech": "Subject + verb + object is a basic sentence.",
    "question": "Which word is a verb?",
    "icon": "🇬🇧",
    "tag": "🔤 GRAMMAR TASK",
    "options": [
      {
        "id": 1,
        "text": "1) run",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) book",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) happy",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 12,
    "character": "MR. BIG BEN SAYS:",
    "speech": "We say 'I have' not 'I has'.",
    "question": "Which is correct?",
    "icon": "🚌",
    "tag": "🔤 GRAMMAR TASK",
    "options": [
      {
        "id": 1,
        "text": "1) I have a pen.",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) I has a pen.",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) He have a pen.",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 13,
    "character": "LONDON BUS SAYS:",
    "speech": "Days of the week start with Sunday or Monday.",
    "question": "How many days are in a week?",
    "icon": "📖",
    "tag": "📚 VOCABULARY",
    "options": [
      {
        "id": 1,
        "text": "1) 7 days",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) 5 days",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) 10 days",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 14,
    "character": "SHERLOCK SAYS:",
    "speech": "A baby cow is called a calf.",
    "question": "What is a baby cow called?",
    "icon": "🔤",
    "tag": "📚 VOCABULARY",
    "options": [
      {
        "id": 1,
        "text": "1) calf 🐮",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) puppy",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) kitten",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 15,
    "character": "TEACHER EMMA SAYS:",
    "speech": "Adjectives describe nouns.",
    "question": "Which word is an adjective?",
    "icon": "✨",
    "tag": "🔤 GRAMMAR TASK",
    "options": [
      {
        "id": 1,
        "text": "1) beautiful",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) run",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) table",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 16,
    "character": "MR. BIG BEN SAYS:",
    "speech": "The capital of the UK is London.",
    "question": "What is the capital of the United Kingdom?",
    "icon": "🐶",
    "tag": "🌍 CULTURE",
    "options": [
      {
        "id": 1,
        "text": "1) London 🇬🇧",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Paris",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) New York",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 17,
    "character": "LONDON BUS SAYS:",
    "speech": "We greet with 'Hello' or 'Hi'.",
    "question": "How do you say 'Салам' in English?",
    "icon": "🐱",
    "tag": "📚 VOCABULARY",
    "options": [
      {
        "id": 1,
        "text": "1) Hello 👋",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Goodbye",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Thank you",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 18,
    "character": "SHERLOCK SAYS:",
    "speech": "'Thank you' shows gratitude.",
    "question": "How do you say 'Рахмат' in English?",
    "icon": "🚀",
    "tag": "📚 VOCABULARY",
    "options": [
      {
        "id": 1,
        "text": "1) Thank you 🙏",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Sorry",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Please",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 19,
    "character": "TEACHER EMMA SAYS:",
    "speech": "Present Simple describes habits.",
    "question": "Which sentence is Present Simple?",
    "icon": "👋",
    "tag": "🔤 GRAMMAR TASK",
    "options": [
      {
        "id": 1,
        "text": "1) I play football every day.",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) I am playing now.",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) I played yesterday.",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 20,
    "character": "MR. BIG BEN SAYS:",
    "speech": "English is spoken all over the world.",
    "question": "English is an international ___?",
    "icon": "🌐",
    "tag": "🌍 CULTURE",
    "options": [
      {
        "id": 1,
        "text": "1) language",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) mountain",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) food",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 21,
    "character": "MR. BIG BEN SAYS:",
    "speech": "When we talk about an action happening right now, we use the Present Continuous tense.",
    "question": "Which sentence is written in the Present Continuous tense?",
    "icon": "🇬🇧",
    "tag": "🔤 GRAMMAR TASK",
    "options": [
      {
        "id": 1,
        "text": "1) I am reading a book right now. 📖",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) I read a book yesterday. 🕒",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) I will read a book tomorrow. 🚀",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 22,
    "character": "SHERLOCK THE CAT SAYS:",
    "speech": "Animals have specific names for their young ones. Do you know what we call a baby dog?",
    "question": "What is the correct English word for a baby dog?",
    "icon": "🚌",
    "tag": "📚 VOCABULARY",
    "options": [
      {
        "id": 1,
        "text": "1) Puppy 🐾",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Kitten 🐱",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Calf 🐮",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 23,
    "character": "TEACHER EMMA SAYS:",
    "speech": "The past tense of 'go' is irregular.",
    "question": "What is the past tense of 'go'?",
    "icon": "📖",
    "tag": "🔤 GRAMMAR TASK",
    "options": [
      {
        "id": 1,
        "text": "1) went",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) goed",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) gone",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 24,
    "character": "LONDON BUS SAYS:",
    "speech": "We use 'a' before consonant sounds and 'an' before vowel sounds.",
    "question": "Which is correct?",
    "icon": "🔤",
    "tag": "🔤 GRAMMAR TASK",
    "options": [
      {
        "id": 1,
        "text": "1) an apple 🍎",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) a apple",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) an book",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 25,
    "character": "BIG BEN SAYS:",
    "speech": "The plural of 'child' is irregular.",
    "question": "What is the plural of 'child'?",
    "icon": "✨",
    "tag": "📚 VOCABULARY",
    "options": [
      {
        "id": 1,
        "text": "1) children",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) childs",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) childes",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 26,
    "character": "SHERLOCK SAYS:",
    "speech": "A baby cat is called a kitten.",
    "question": "What is a baby cat called?",
    "icon": "🐶",
    "tag": "📚 VOCABULARY",
    "options": [
      {
        "id": 1,
        "text": "1) kitten 🐱",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) puppy",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) calf",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 27,
    "character": "TEACHER EMMA SAYS:",
    "speech": "We use 'will' for future actions.",
    "question": "Which sentence is in the Future Simple?",
    "icon": "🐱",
    "tag": "🔤 GRAMMAR TASK",
    "options": [
      {
        "id": 1,
        "text": "1) I will travel tomorrow.",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) I am traveling now.",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) I traveled yesterday.",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 28,
    "character": "MR. BIG BEN SAYS:",
    "speech": "The opposite of 'hot' is 'cold'.",
    "question": "What is the opposite of 'big'?",
    "icon": "🚀",
    "tag": "📚 VOCABULARY",
    "options": [
      {
        "id": 1,
        "text": "1) small",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) tall",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) long",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 29,
    "character": "LONDON BUS SAYS:",
    "speech": "Colors in English: red, blue, green.",
    "question": "What color is the sky on a sunny day?",
    "icon": "👋",
    "tag": "📚 VOCABULARY",
    "options": [
      {
        "id": 1,
        "text": "1) blue",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) green",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) red",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 30,
    "character": "SHERLOCK SAYS:",
    "speech": "A person who teaches is a teacher.",
    "question": "What do we call a person who flies a plane?",
    "icon": "🌐",
    "tag": "📚 VOCABULARY",
    "options": [
      {
        "id": 1,
        "text": "1) pilot",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) driver",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) cook",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 31,
    "character": "TEACHER EMMA SAYS:",
    "speech": "Subject + verb + object is a basic sentence.",
    "question": "Which word is a verb?",
    "icon": "🇬🇧",
    "tag": "🔤 GRAMMAR TASK",
    "options": [
      {
        "id": 1,
        "text": "1) run",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) book",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) happy",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 32,
    "character": "MR. BIG BEN SAYS:",
    "speech": "We say 'I have' not 'I has'.",
    "question": "Which is correct?",
    "icon": "🚌",
    "tag": "🔤 GRAMMAR TASK",
    "options": [
      {
        "id": 1,
        "text": "1) I have a pen.",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) I has a pen.",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) He have a pen.",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 33,
    "character": "LONDON BUS SAYS:",
    "speech": "Days of the week start with Sunday or Monday.",
    "question": "How many days are in a week?",
    "icon": "📖",
    "tag": "📚 VOCABULARY",
    "options": [
      {
        "id": 1,
        "text": "1) 7 days",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) 5 days",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) 10 days",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 34,
    "character": "SHERLOCK SAYS:",
    "speech": "A baby cow is called a calf.",
    "question": "What is a baby cow called?",
    "icon": "🔤",
    "tag": "📚 VOCABULARY",
    "options": [
      {
        "id": 1,
        "text": "1) calf 🐮",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) puppy",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) kitten",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 35,
    "character": "TEACHER EMMA SAYS:",
    "speech": "Adjectives describe nouns.",
    "question": "Which word is an adjective?",
    "icon": "✨",
    "tag": "🔤 GRAMMAR TASK",
    "options": [
      {
        "id": 1,
        "text": "1) beautiful",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) run",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) table",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 36,
    "character": "MR. BIG BEN SAYS:",
    "speech": "The capital of the UK is London.",
    "question": "What is the capital of the United Kingdom?",
    "icon": "🐶",
    "tag": "🌍 CULTURE",
    "options": [
      {
        "id": 1,
        "text": "1) London 🇬🇧",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Paris",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) New York",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 37,
    "character": "LONDON BUS SAYS:",
    "speech": "We greet with 'Hello' or 'Hi'.",
    "question": "How do you say 'Салам' in English?",
    "icon": "🐱",
    "tag": "📚 VOCABULARY",
    "options": [
      {
        "id": 1,
        "text": "1) Hello 👋",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Goodbye",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Thank you",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 38,
    "character": "SHERLOCK SAYS:",
    "speech": "'Thank you' shows gratitude.",
    "question": "How do you say 'Рахмат' in English?",
    "icon": "🚀",
    "tag": "📚 VOCABULARY",
    "options": [
      {
        "id": 1,
        "text": "1) Thank you 🙏",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Sorry",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Please",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 39,
    "character": "TEACHER EMMA SAYS:",
    "speech": "Present Simple describes habits.",
    "question": "Which sentence is Present Simple?",
    "icon": "👋",
    "tag": "🔤 GRAMMAR TASK",
    "options": [
      {
        "id": 1,
        "text": "1) I play football every day.",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) I am playing now.",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) I played yesterday.",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 40,
    "character": "MR. BIG BEN SAYS:",
    "speech": "English is spoken all over the world.",
    "question": "English is an international ___?",
    "icon": "🌐",
    "tag": "🌍 CULTURE",
    "options": [
      {
        "id": 1,
        "text": "1) language",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) mountain",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) food",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 41,
    "character": "MR. BIG BEN SAYS:",
    "speech": "When we talk about an action happening right now, we use the Present Continuous tense.",
    "question": "Which sentence is written in the Present Continuous tense?",
    "icon": "🇬🇧",
    "tag": "🔤 GRAMMAR TASK",
    "options": [
      {
        "id": 1,
        "text": "1) I am reading a book right now. 📖",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) I read a book yesterday. 🕒",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) I will read a book tomorrow. 🚀",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 42,
    "character": "SHERLOCK THE CAT SAYS:",
    "speech": "Animals have specific names for their young ones. Do you know what we call a baby dog?",
    "question": "What is the correct English word for a baby dog?",
    "icon": "🚌",
    "tag": "📚 VOCABULARY",
    "options": [
      {
        "id": 1,
        "text": "1) Puppy 🐾",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Kitten 🐱",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Calf 🐮",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 43,
    "character": "TEACHER EMMA SAYS:",
    "speech": "The past tense of 'go' is irregular.",
    "question": "What is the past tense of 'go'?",
    "icon": "📖",
    "tag": "🔤 GRAMMAR TASK",
    "options": [
      {
        "id": 1,
        "text": "1) went",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) goed",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) gone",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 44,
    "character": "LONDON BUS SAYS:",
    "speech": "We use 'a' before consonant sounds and 'an' before vowel sounds.",
    "question": "Which is correct?",
    "icon": "🔤",
    "tag": "🔤 GRAMMAR TASK",
    "options": [
      {
        "id": 1,
        "text": "1) an apple 🍎",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) a apple",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) an book",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 45,
    "character": "BIG BEN SAYS:",
    "speech": "The plural of 'child' is irregular.",
    "question": "What is the plural of 'child'?",
    "icon": "✨",
    "tag": "📚 VOCABULARY",
    "options": [
      {
        "id": 1,
        "text": "1) children",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) childs",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) childes",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 46,
    "character": "SHERLOCK SAYS:",
    "speech": "A baby cat is called a kitten.",
    "question": "What is a baby cat called?",
    "icon": "🐶",
    "tag": "📚 VOCABULARY",
    "options": [
      {
        "id": 1,
        "text": "1) kitten 🐱",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) puppy",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) calf",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 47,
    "character": "TEACHER EMMA SAYS:",
    "speech": "We use 'will' for future actions.",
    "question": "Which sentence is in the Future Simple?",
    "icon": "🐱",
    "tag": "🔤 GRAMMAR TASK",
    "options": [
      {
        "id": 1,
        "text": "1) I will travel tomorrow.",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) I am traveling now.",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) I traveled yesterday.",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 48,
    "character": "MR. BIG BEN SAYS:",
    "speech": "The opposite of 'hot' is 'cold'.",
    "question": "What is the opposite of 'big'?",
    "icon": "🚀",
    "tag": "📚 VOCABULARY",
    "options": [
      {
        "id": 1,
        "text": "1) small",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) tall",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) long",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 49,
    "character": "LONDON BUS SAYS:",
    "speech": "Colors in English: red, blue, green.",
    "question": "What color is the sky on a sunny day?",
    "icon": "👋",
    "tag": "📚 VOCABULARY",
    "options": [
      {
        "id": 1,
        "text": "1) blue",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) green",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) red",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 50,
    "character": "SHERLOCK SAYS:",
    "speech": "A person who teaches is a teacher.",
    "question": "What do we call a person who flies a plane?",
    "icon": "🌐",
    "tag": "📚 VOCABULARY",
    "options": [
      {
        "id": 1,
        "text": "1) pilot",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) driver",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) cook",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 51,
    "character": "TEACHER EMMA SAYS:",
    "speech": "Subject + verb + object is a basic sentence.",
    "question": "Which word is a verb?",
    "icon": "🇬🇧",
    "tag": "🔤 GRAMMAR TASK",
    "options": [
      {
        "id": 1,
        "text": "1) run",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) book",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) happy",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 52,
    "character": "MR. BIG BEN SAYS:",
    "speech": "We say 'I have' not 'I has'.",
    "question": "Which is correct?",
    "icon": "🚌",
    "tag": "🔤 GRAMMAR TASK",
    "options": [
      {
        "id": 1,
        "text": "1) I have a pen.",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) I has a pen.",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) He have a pen.",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 53,
    "character": "LONDON BUS SAYS:",
    "speech": "Days of the week start with Sunday or Monday.",
    "question": "How many days are in a week?",
    "icon": "📖",
    "tag": "📚 VOCABULARY",
    "options": [
      {
        "id": 1,
        "text": "1) 7 days",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) 5 days",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) 10 days",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 54,
    "character": "SHERLOCK SAYS:",
    "speech": "A baby cow is called a calf.",
    "question": "What is a baby cow called?",
    "icon": "🔤",
    "tag": "📚 VOCABULARY",
    "options": [
      {
        "id": 1,
        "text": "1) calf 🐮",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) puppy",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) kitten",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 55,
    "character": "TEACHER EMMA SAYS:",
    "speech": "Adjectives describe nouns.",
    "question": "Which word is an adjective?",
    "icon": "✨",
    "tag": "🔤 GRAMMAR TASK",
    "options": [
      {
        "id": 1,
        "text": "1) beautiful",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) run",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) table",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 56,
    "character": "MR. BIG BEN SAYS:",
    "speech": "The capital of the UK is London.",
    "question": "What is the capital of the United Kingdom?",
    "icon": "🐶",
    "tag": "🌍 CULTURE",
    "options": [
      {
        "id": 1,
        "text": "1) London 🇬🇧",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Paris",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) New York",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 57,
    "character": "LONDON BUS SAYS:",
    "speech": "We greet with 'Hello' or 'Hi'.",
    "question": "How do you say 'Салам' in English?",
    "icon": "🐱",
    "tag": "📚 VOCABULARY",
    "options": [
      {
        "id": 1,
        "text": "1) Hello 👋",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Goodbye",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Thank you",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 58,
    "character": "SHERLOCK SAYS:",
    "speech": "'Thank you' shows gratitude.",
    "question": "How do you say 'Рахмат' in English?",
    "icon": "🚀",
    "tag": "📚 VOCABULARY",
    "options": [
      {
        "id": 1,
        "text": "1) Thank you 🙏",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Sorry",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Please",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 59,
    "character": "TEACHER EMMA SAYS:",
    "speech": "Present Simple describes habits.",
    "question": "Which sentence is Present Simple?",
    "icon": "👋",
    "tag": "🔤 GRAMMAR TASK",
    "options": [
      {
        "id": 1,
        "text": "1) I play football every day.",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) I am playing now.",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) I played yesterday.",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 60,
    "character": "MR. BIG BEN SAYS:",
    "speech": "English is spoken all over the world.",
    "question": "English is an international ___?",
    "icon": "🌐",
    "tag": "🌍 CULTURE",
    "options": [
      {
        "id": 1,
        "text": "1) language",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) mountain",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) food",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 61,
    "character": "MR. BIG BEN SAYS:",
    "speech": "When we talk about an action happening right now, we use the Present Continuous tense.",
    "question": "Which sentence is written in the Present Continuous tense?",
    "icon": "🇬🇧",
    "tag": "🔤 GRAMMAR TASK",
    "options": [
      {
        "id": 1,
        "text": "1) I am reading a book right now. 📖",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) I read a book yesterday. 🕒",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) I will read a book tomorrow. 🚀",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 62,
    "character": "SHERLOCK THE CAT SAYS:",
    "speech": "Animals have specific names for their young ones. Do you know what we call a baby dog?",
    "question": "What is the correct English word for a baby dog?",
    "icon": "🚌",
    "tag": "📚 VOCABULARY",
    "options": [
      {
        "id": 1,
        "text": "1) Puppy 🐾",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Kitten 🐱",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Calf 🐮",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 63,
    "character": "TEACHER EMMA SAYS:",
    "speech": "The past tense of 'go' is irregular.",
    "question": "What is the past tense of 'go'?",
    "icon": "📖",
    "tag": "🔤 GRAMMAR TASK",
    "options": [
      {
        "id": 1,
        "text": "1) went",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) goed",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) gone",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 64,
    "character": "LONDON BUS SAYS:",
    "speech": "We use 'a' before consonant sounds and 'an' before vowel sounds.",
    "question": "Which is correct?",
    "icon": "🔤",
    "tag": "🔤 GRAMMAR TASK",
    "options": [
      {
        "id": 1,
        "text": "1) an apple 🍎",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) a apple",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) an book",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 65,
    "character": "BIG BEN SAYS:",
    "speech": "The plural of 'child' is irregular.",
    "question": "What is the plural of 'child'?",
    "icon": "✨",
    "tag": "📚 VOCABULARY",
    "options": [
      {
        "id": 1,
        "text": "1) children",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) childs",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) childes",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 66,
    "character": "SHERLOCK SAYS:",
    "speech": "A baby cat is called a kitten.",
    "question": "What is a baby cat called?",
    "icon": "🐶",
    "tag": "📚 VOCABULARY",
    "options": [
      {
        "id": 1,
        "text": "1) kitten 🐱",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) puppy",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) calf",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 67,
    "character": "TEACHER EMMA SAYS:",
    "speech": "We use 'will' for future actions.",
    "question": "Which sentence is in the Future Simple?",
    "icon": "🐱",
    "tag": "🔤 GRAMMAR TASK",
    "options": [
      {
        "id": 1,
        "text": "1) I will travel tomorrow.",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) I am traveling now.",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) I traveled yesterday.",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 68,
    "character": "MR. BIG BEN SAYS:",
    "speech": "The opposite of 'hot' is 'cold'.",
    "question": "What is the opposite of 'big'?",
    "icon": "🚀",
    "tag": "📚 VOCABULARY",
    "options": [
      {
        "id": 1,
        "text": "1) small",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) tall",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) long",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 69,
    "character": "LONDON BUS SAYS:",
    "speech": "Colors in English: red, blue, green.",
    "question": "What color is the sky on a sunny day?",
    "icon": "👋",
    "tag": "📚 VOCABULARY",
    "options": [
      {
        "id": 1,
        "text": "1) blue",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) green",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) red",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 70,
    "character": "SHERLOCK SAYS:",
    "speech": "A person who teaches is a teacher.",
    "question": "What do we call a person who flies a plane?",
    "icon": "🌐",
    "tag": "📚 VOCABULARY",
    "options": [
      {
        "id": 1,
        "text": "1) pilot",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) driver",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) cook",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 71,
    "character": "TEACHER EMMA SAYS:",
    "speech": "Subject + verb + object is a basic sentence.",
    "question": "Which word is a verb?",
    "icon": "🇬🇧",
    "tag": "🔤 GRAMMAR TASK",
    "options": [
      {
        "id": 1,
        "text": "1) run",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) book",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) happy",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 72,
    "character": "MR. BIG BEN SAYS:",
    "speech": "We say 'I have' not 'I has'.",
    "question": "Which is correct?",
    "icon": "🚌",
    "tag": "🔤 GRAMMAR TASK",
    "options": [
      {
        "id": 1,
        "text": "1) I have a pen.",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) I has a pen.",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) He have a pen.",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 73,
    "character": "LONDON BUS SAYS:",
    "speech": "Days of the week start with Sunday or Monday.",
    "question": "How many days are in a week?",
    "icon": "📖",
    "tag": "📚 VOCABULARY",
    "options": [
      {
        "id": 1,
        "text": "1) 7 days",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) 5 days",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) 10 days",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 74,
    "character": "SHERLOCK SAYS:",
    "speech": "A baby cow is called a calf.",
    "question": "What is a baby cow called?",
    "icon": "🔤",
    "tag": "📚 VOCABULARY",
    "options": [
      {
        "id": 1,
        "text": "1) calf 🐮",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) puppy",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) kitten",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 75,
    "character": "TEACHER EMMA SAYS:",
    "speech": "Adjectives describe nouns.",
    "question": "Which word is an adjective?",
    "icon": "✨",
    "tag": "🔤 GRAMMAR TASK",
    "options": [
      {
        "id": 1,
        "text": "1) beautiful",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) run",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) table",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 76,
    "character": "MR. BIG BEN SAYS:",
    "speech": "The capital of the UK is London.",
    "question": "What is the capital of the United Kingdom?",
    "icon": "🐶",
    "tag": "🌍 CULTURE",
    "options": [
      {
        "id": 1,
        "text": "1) London 🇬🇧",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Paris",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) New York",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 77,
    "character": "LONDON BUS SAYS:",
    "speech": "We greet with 'Hello' or 'Hi'.",
    "question": "How do you say 'Салам' in English?",
    "icon": "🐱",
    "tag": "📚 VOCABULARY",
    "options": [
      {
        "id": 1,
        "text": "1) Hello 👋",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Goodbye",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Thank you",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 78,
    "character": "SHERLOCK SAYS:",
    "speech": "'Thank you' shows gratitude.",
    "question": "How do you say 'Рахмат' in English?",
    "icon": "🚀",
    "tag": "📚 VOCABULARY",
    "options": [
      {
        "id": 1,
        "text": "1) Thank you 🙏",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Sorry",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Please",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 79,
    "character": "TEACHER EMMA SAYS:",
    "speech": "Present Simple describes habits.",
    "question": "Which sentence is Present Simple?",
    "icon": "👋",
    "tag": "🔤 GRAMMAR TASK",
    "options": [
      {
        "id": 1,
        "text": "1) I play football every day.",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) I am playing now.",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) I played yesterday.",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 80,
    "character": "MR. BIG BEN SAYS:",
    "speech": "English is spoken all over the world.",
    "question": "English is an international ___?",
    "icon": "🌐",
    "tag": "🌍 CULTURE",
    "options": [
      {
        "id": 1,
        "text": "1) language",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) mountain",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) food",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 81,
    "character": "MR. BIG BEN SAYS:",
    "speech": "When we talk about an action happening right now, we use the Present Continuous tense.",
    "question": "Which sentence is written in the Present Continuous tense?",
    "icon": "🇬🇧",
    "tag": "🔤 GRAMMAR TASK",
    "options": [
      {
        "id": 1,
        "text": "1) I am reading a book right now. 📖",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) I read a book yesterday. 🕒",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) I will read a book tomorrow. 🚀",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 82,
    "character": "SHERLOCK THE CAT SAYS:",
    "speech": "Animals have specific names for their young ones. Do you know what we call a baby dog?",
    "question": "What is the correct English word for a baby dog?",
    "icon": "🚌",
    "tag": "📚 VOCABULARY",
    "options": [
      {
        "id": 1,
        "text": "1) Puppy 🐾",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Kitten 🐱",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Calf 🐮",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 83,
    "character": "TEACHER EMMA SAYS:",
    "speech": "The past tense of 'go' is irregular.",
    "question": "What is the past tense of 'go'?",
    "icon": "📖",
    "tag": "🔤 GRAMMAR TASK",
    "options": [
      {
        "id": 1,
        "text": "1) went",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) goed",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) gone",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 84,
    "character": "LONDON BUS SAYS:",
    "speech": "We use 'a' before consonant sounds and 'an' before vowel sounds.",
    "question": "Which is correct?",
    "icon": "🔤",
    "tag": "🔤 GRAMMAR TASK",
    "options": [
      {
        "id": 1,
        "text": "1) an apple 🍎",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) a apple",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) an book",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 85,
    "character": "BIG BEN SAYS:",
    "speech": "The plural of 'child' is irregular.",
    "question": "What is the plural of 'child'?",
    "icon": "✨",
    "tag": "📚 VOCABULARY",
    "options": [
      {
        "id": 1,
        "text": "1) children",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) childs",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) childes",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 86,
    "character": "SHERLOCK SAYS:",
    "speech": "A baby cat is called a kitten.",
    "question": "What is a baby cat called?",
    "icon": "🐶",
    "tag": "📚 VOCABULARY",
    "options": [
      {
        "id": 1,
        "text": "1) kitten 🐱",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) puppy",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) calf",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 87,
    "character": "TEACHER EMMA SAYS:",
    "speech": "We use 'will' for future actions.",
    "question": "Which sentence is in the Future Simple?",
    "icon": "🐱",
    "tag": "🔤 GRAMMAR TASK",
    "options": [
      {
        "id": 1,
        "text": "1) I will travel tomorrow.",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) I am traveling now.",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) I traveled yesterday.",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 88,
    "character": "MR. BIG BEN SAYS:",
    "speech": "The opposite of 'hot' is 'cold'.",
    "question": "What is the opposite of 'big'?",
    "icon": "🚀",
    "tag": "📚 VOCABULARY",
    "options": [
      {
        "id": 1,
        "text": "1) small",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) tall",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) long",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 89,
    "character": "LONDON BUS SAYS:",
    "speech": "Colors in English: red, blue, green.",
    "question": "What color is the sky on a sunny day?",
    "icon": "👋",
    "tag": "📚 VOCABULARY",
    "options": [
      {
        "id": 1,
        "text": "1) blue",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) green",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) red",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 90,
    "character": "SHERLOCK SAYS:",
    "speech": "A person who teaches is a teacher.",
    "question": "What do we call a person who flies a plane?",
    "icon": "🌐",
    "tag": "📚 VOCABULARY",
    "options": [
      {
        "id": 1,
        "text": "1) pilot",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) driver",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) cook",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 91,
    "character": "TEACHER EMMA SAYS:",
    "speech": "Subject + verb + object is a basic sentence.",
    "question": "Which word is a verb?",
    "icon": "🇬🇧",
    "tag": "🔤 GRAMMAR TASK",
    "options": [
      {
        "id": 1,
        "text": "1) run",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) book",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) happy",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 92,
    "character": "MR. BIG BEN SAYS:",
    "speech": "We say 'I have' not 'I has'.",
    "question": "Which is correct?",
    "icon": "🚌",
    "tag": "🔤 GRAMMAR TASK",
    "options": [
      {
        "id": 1,
        "text": "1) I have a pen.",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) I has a pen.",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) He have a pen.",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 93,
    "character": "LONDON BUS SAYS:",
    "speech": "Days of the week start with Sunday or Monday.",
    "question": "How many days are in a week?",
    "icon": "📖",
    "tag": "📚 VOCABULARY",
    "options": [
      {
        "id": 1,
        "text": "1) 7 days",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) 5 days",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) 10 days",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 94,
    "character": "SHERLOCK SAYS:",
    "speech": "A baby cow is called a calf.",
    "question": "What is a baby cow called?",
    "icon": "🔤",
    "tag": "📚 VOCABULARY",
    "options": [
      {
        "id": 1,
        "text": "1) calf 🐮",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) puppy",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) kitten",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 95,
    "character": "TEACHER EMMA SAYS:",
    "speech": "Adjectives describe nouns.",
    "question": "Which word is an adjective?",
    "icon": "✨",
    "tag": "🔤 GRAMMAR TASK",
    "options": [
      {
        "id": 1,
        "text": "1) beautiful",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) run",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) table",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 96,
    "character": "MR. BIG BEN SAYS:",
    "speech": "The capital of the UK is London.",
    "question": "What is the capital of the United Kingdom?",
    "icon": "🐶",
    "tag": "🌍 CULTURE",
    "options": [
      {
        "id": 1,
        "text": "1) London 🇬🇧",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Paris",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) New York",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 97,
    "character": "LONDON BUS SAYS:",
    "speech": "We greet with 'Hello' or 'Hi'.",
    "question": "How do you say 'Салам' in English?",
    "icon": "🐱",
    "tag": "📚 VOCABULARY",
    "options": [
      {
        "id": 1,
        "text": "1) Hello 👋",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Goodbye",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Thank you",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 98,
    "character": "SHERLOCK SAYS:",
    "speech": "'Thank you' shows gratitude.",
    "question": "How do you say 'Рахмат' in English?",
    "icon": "🚀",
    "tag": "📚 VOCABULARY",
    "options": [
      {
        "id": 1,
        "text": "1) Thank you 🙏",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) Sorry",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) Please",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 99,
    "character": "TEACHER EMMA SAYS:",
    "speech": "Present Simple describes habits.",
    "question": "Which sentence is Present Simple?",
    "icon": "👋",
    "tag": "🔤 GRAMMAR TASK",
    "options": [
      {
        "id": 1,
        "text": "1) I play football every day.",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) I am playing now.",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) I played yesterday.",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 100,
    "character": "MR. BIG BEN SAYS:",
    "speech": "English is spoken all over the world.",
    "question": "English is an international ___?",
    "icon": "🌐",
    "tag": "🌍 CULTURE",
    "options": [
      {
        "id": 1,
        "text": "1) language",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "2) mountain",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "3) food",
        "isCorrect": false
      }
    ]
  }
];
