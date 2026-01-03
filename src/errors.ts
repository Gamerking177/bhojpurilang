export type ErrorCategory =
  | "syntax"
  | "reference"
  | "runtime"
  | "generic";

const GAALI_MAP: Record<ErrorCategory, readonly string[]> = {
  syntax: [
    "Ka re coder, syntax ke saath jhagda kyun?",
    "Bracket kahin chhut gail ba, line dobara dekh!",
    "Syntax itna bigad kaise gail re?",
    "E line pe grammar bilkul dhila ba!"
  ],

  reference: [
    "Variable bina banaye use kar diye ho ka?",
    "Naam likhne me hi gadbad kar diye re!",
    "Reference hawa me likh diye ho lagta!",
    "Pehle variable bana, phir use kar!"
  ],

  runtime: [
    "Logic chalte-chalte gir gail ba!",
    "Code bhaagte-bhaagte thak gail!",
    "Runtime pe hi dimaag phisal gail!",
    "Execution ke time pe scene bigad gail!"
  ],

  generic: [
    "Arre bhai, code ka dimaag ghoom gail ba!",
    "JavaScript bhi confuse ho gail ba!",
    "Soch ke likho re, machine bhi insaan ba!",
    "E code toh patli gali me phas gail ba!"
  ]
};

function randomFrom<T>(list: readonly T[]): T {
  return list[Math.floor(Math.random() * list.length)];
}

export function getBhojpuriGaali(category: ErrorCategory): string {
  return randomFrom(GAALI_MAP[category] ?? GAALI_MAP.generic);
}

export function detectCategory(err: Error): ErrorCategory {
  switch (err.name) {
    case "SyntaxError":
      return "syntax";
    case "ReferenceError":
      return "reference";
    case "TypeError":
      return "runtime";
    default:
      return "generic";
  }
}
