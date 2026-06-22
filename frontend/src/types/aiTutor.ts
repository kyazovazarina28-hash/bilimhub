export interface ChatMessage {
  id?: number;
  role: "user" | "assistant";
  content: string;
  created_at?: string;
}

export interface ChatRequest {
  message: string;
  history: Pick<ChatMessage, "role" | "content">[];
}

export interface ChatResponse {
  reply: string;
  message_id?: number;
}

export interface ChatHistoryResponse {
  messages: ChatMessage[];
}

export interface PromptTemplate {
  id: string;
  label: string;
  prompt: string;
  icon: string;
}

export const PROMPT_TEMPLATES: PromptTemplate[] = [
  {
    id: "math_help",
    label: "Математика",
    prompt: "Математикадан квадрат теңдемелер темасын жөнөкөй мисал менен түшүндүр.",
    icon: "calculator",
  },
  {
    id: "physics",
    label: "Физика",
    prompt: "Ньютонун экинчи мыйзамын кыргыз тилинде түшүндүр.",
    icon: "atom",
  },
  {
    id: "kyrgyz",
    label: "Кыргыз тили",
    prompt: "Кыргыз тилинин грамматикасынан ажыратуу тамгаларды мисал менен түшүндүр.",
    icon: "book",
  },
  {
    id: "exam",
    label: "Тестке даярдануу",
    prompt: "Мен тестке даярданып жатам. Мага эффективдүү окуу ыкмаларын сунушта.",
    icon: "target",
  },
  {
    id: "homework",
    label: "Үй тапшырması",
    prompt: "Үй тапшырмамды чечүүгө кантип жакшы даярданам?",
    icon: "pen",
  },
  {
    id: "motivation",
    label: "Мотивация",
    prompt: "Окууга мотивациям төмөндеди. Мага кошумча сөз айт.",
    icon: "heart",
  },
];
