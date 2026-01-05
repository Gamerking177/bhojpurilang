export type ErrorCategory =
  | "syntax"
  | "reference"
  | "assignment"
  | "logic"
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
    "Variable bina rakho / pakka kiye use kar diye ho ka?",
    "Naam likhne me hi gadbad kar diye re!",
    "Reference hawa me likh diye ho lagta!",
    "Pehle rakho ya pakka se variable banao!"
  ],

  assignment: [
    "Pakka variable me value badalne ka kosis kar rahe ho!",
    "Jo pakka hai, oo pakka hi rahega bhai!"
  ],

  logic: [
    "Logic idhar-udhar bhaag gail ba!",
    "Agar-nahi_to ke beech me kuch gadbad ba!"
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
  if (err.name === "SyntaxError") return "syntax";
  if (err.name === "ReferenceError") return "reference";

  // const reassignment
  if (
    err.name === "TypeError" &&
    err.message.includes("constant")
  ) {
    return "assignment";
  }

  if (err.name === "TypeError") return "logic";
  if (err.name === "RangeError") return "runtime";

  return "generic";
}
