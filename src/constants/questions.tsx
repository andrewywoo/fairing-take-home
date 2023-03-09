type questionType = "radio" | "checkbox" | "freeText";

type questionRule = {
  customerType?: string[];
  location?: string[];
  purchased?: string[];
};

export type question = {
  prompt: string;
  responses: string[];
  type: questionType;
  rules: questionRule;
};

export const question1: question = {
  prompt: "How did you hear about us?",
  responses: ["Facebook", "Google", "TikTok", "Instagram"],
  type: "radio",
  rules: { customerType: ["New"] },
};

export const question2: question = {
  prompt: "Do you own any of the following?",
  responses: ["Dumbbells", "Medicine Ball", "Jump Rope", "Stationary Bike"],
  type: "checkbox",
  rules: { customerType: ["Returning"], location: ["Idaho", "Wisconsin"] },
};

export const question3: question = {
  prompt: "What made you decide to buy the Black Jeans today?",
  responses: [],
  type: "freeText",
  rules: { purchased: ["Black Jeans"] },
};
