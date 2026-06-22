import { writeFileSync } from "fs";

const POOL = [
  ["MR. BIG BEN SAYS:", "When we talk about an action happening right now, we use the Present Continuous tense.", "Which sentence is written in the Present Continuous tense?", "🇬🇧", "🔤 GRAMMAR TASK", ["I am reading a book right now. 📖", "I read a book yesterday. 🕒", "I will read a book tomorrow. 🚀"], 0],
  ["SHERLOCK THE CAT SAYS:", "Animals have specific names for their young ones. Do you know what we call a baby dog?", "What is the correct English word for a baby dog?", "🐶", "📚 VOCABULARY", ["Puppy 🐾", "Kitten 🐱", "Calf 🐮"], 0],
  ["TEACHER EMMA SAYS:", "The past tense of 'go' is irregular.", "What is the past tense of 'go'?", "🚶", "🔤 GRAMMAR TASK", ["went", "goed", "gone"], 0],
  ["LONDON BUS SAYS:", "We use 'a' before consonant sounds and 'an' before vowel sounds.", "Which is correct?", "🚌", "🔤 GRAMMAR TASK", ["an apple 🍎", "a apple", "an book"], 0],
  ["BIG BEN SAYS:", "The plural of 'child' is irregular.", "What is the plural of 'child'?", "👶", "📚 VOCABULARY", ["children", "childs", "childes"], 0],
  ["SHERLOCK SAYS:", "A baby cat is called a kitten.", "What is a baby cat called?", "🐱", "📚 VOCABULARY", ["kitten 🐱", "puppy", "calf"], 0],
  ["TEACHER EMMA SAYS:", "We use 'will' for future actions.", "Which sentence is in the Future Simple?", "🚀", "🔤 GRAMMAR TASK", ["I will travel tomorrow.", "I am traveling now.", "I traveled yesterday."], 0],
  ["MR. BIG BEN SAYS:", "The opposite of 'hot' is 'cold'.", "What is the opposite of 'big'?", "📏", "📚 VOCABULARY", ["small", "tall", "long"], 0],
  ["LONDON BUS SAYS:", "Colors in English: red, blue, green.", "What color is the sky on a sunny day?", "🌤️", "📚 VOCABULARY", ["blue", "green", "red"], 0],
  ["SHERLOCK SAYS:", "A person who teaches is a teacher.", "What do we call a person who flies a plane?", "✈️", "📚 VOCABULARY", ["pilot", "driver", "cook"], 0],
  ["TEACHER EMMA SAYS:", "Subject + verb + object is a basic sentence.", "Which word is a verb?", "✍️", "🔤 GRAMMAR TASK", ["run", "book", "happy"], 0],
  ["MR. BIG BEN SAYS:", "We say 'I have' not 'I has'.", "Which is correct?", "👤", "🔤 GRAMMAR TASK", ["I have a pen.", "I has a pen.", "He have a pen."], 0],
  ["LONDON BUS SAYS:", "Days of the week start with Sunday or Monday.", "How many days are in a week?", "📅", "📚 VOCABULARY", ["7 days", "5 days", "10 days"], 0],
  ["SHERLOCK SAYS:", "A baby cow is called a calf.", "What is a baby cow called?", "🐮", "📚 VOCABULARY", ["calf 🐮", "puppy", "kitten"], 0],
  ["TEACHER EMMA SAYS:", "Adjectives describe nouns.", "Which word is an adjective?", "🎨", "🔤 GRAMMAR TASK", ["beautiful", "run", "table"], 0],
  ["MR. BIG BEN SAYS:", "The capital of the UK is London.", "What is the capital of the United Kingdom?", "🏛️", "🌍 CULTURE", ["London 🇬🇧", "Paris", "New York"], 0],
  ["LONDON BUS SAYS:", "We greet with 'Hello' or 'Hi'.", "How do you say 'Салам' in English?", "👋", "📚 VOCABULARY", ["Hello 👋", "Goodbye", "Thank you"], 0],
  ["SHERLOCK SAYS:", "'Thank you' shows gratitude.", "How do you say 'Рахмат' in English?", "🙏", "📚 VOCABULARY", ["Thank you 🙏", "Sorry", "Please"], 0],
  ["TEACHER EMMA SAYS:", "Present Simple describes habits.", "Which sentence is Present Simple?", "⏰", "🔤 GRAMMAR TASK", ["I play football every day.", "I am playing now.", "I played yesterday."], 0],
  ["MR. BIG BEN SAYS:", "English is spoken all over the world.", "English is an international ___?", "🌐", "🌍 CULTURE", ["language", "mountain", "food"], 0],
];

const icons = ["🇬🇧", "🚌", "📖", "🔤", "✨", "🐶", "🐱", "🚀", "👋", "🌐"];

const levels = [];
for (let i = 0; i < 100; i++) {
  const src = POOL[i % POOL.length];
  const [character, speech, question, , tag, opts, correct] = src;
  levels.push({
    id: i + 1,
    character,
    speech,
    question,
    icon: icons[i % icons.length],
    tag,
    options: opts.map((text, idx) => ({
      id: idx + 1,
      text: `${idx + 1}) ${text}`,
      isCorrect: idx === correct,
    })),
  });
}

const out = `export interface EnglishGameOption {
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

export const englishGameLevels: EnglishGameLevel[] = ${JSON.stringify(levels, null, 2)};
`;

writeFileSync("src/data/englishGameLevels.ts", out);
console.log("Generated", levels.length, "english levels");
