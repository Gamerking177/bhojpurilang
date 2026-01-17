export type ErrorCategory =
  | "syntax"
  | "reference"
  | "assignment"
  | "logic"
  | "runtime"
  | "generic";

const GAALI_MAP: Record<ErrorCategory, readonly string[]> = {
  syntax: [
    "Arey re bhai, syntax ulta-pulta ho gail ba!",
    "Bracket ya quote kahin chhut gail ba, dhyaan se dekh.",
    "Ee line pe boli aur likhaai mel nahi khaata.",
    "Syntax bigad gail ba, phir se sambhaar ke likh."
  ],

  reference: [
    "Ee variable ta hawa me latkal lagta ba!",
    "Naam likhe me gadbad ho gail ba re.",
    "Pehle variable dhar, tab jaa ke use kar.",
    "Reference bina aadhaar ke chal raha ba."
  ],

  assignment: [
    "Jo cheez thos ba, oo badle ke kosis karat ba ka?",
    "Thos bana ke phir badalne ka matlab na ba bhai!"
  ],

  logic: [
    "Logic idhar-udhar bhatak gail ba!",
    "Jadi – nahi_ta ke beech me jhol ba re.",
    "Soch aur likhaai me mel baith nahi raha."
  ],

  runtime: [
    "Code chalte-chalte gir gail ba!",
    "Execution ke time pe khel bigad gail.",
    "Runtime pe hi dimaag phisal gail ba!",
    "Code bhaagte-bhaagte atak gail."
  ],

  generic: [
    "Code ka dimaag poora ghoom gail ba!",
    "Machine bhi soche la: ee ka ho gail?",
    "Ee code patli gali me phas gail ba.",
    "Kuch ta gadbad ba bhai, dhyaan se dekh."
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

  // thos (const) reassignment
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
