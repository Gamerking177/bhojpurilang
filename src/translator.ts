type Rule = [RegExp, string];

const rules: Rule[] = [
  [/\brakho\b/gi, "let"],
  [/\bpakka\b/gi, "const"],
  [/\bbolo\b/gi, "console.log"],
  [/\bagar\b/gi, "if"],
  [/\bnahi_to\b/gi, "else"],
  [/\bjab_tak\b/gi, "while"],
  [/\bhar_ek\b/gi, "for"],
  [/\bkaam\b/gi, "function"],
  [/\bwapas\b/gi, "return"],
  [/\bsahi\b/gi, "true"],
  [/\bgalat\b/gi, "false"],
  [/\bkhaali\b/gi, "null"]
];

export function translate(code: string): string {
  let output = code;

  // 1️⃣ keyword replace
  for (const [pattern, replacement] of rules) {
    output = output.replace(pattern, replacement);
  }

  // 2️⃣ FIX bolo without brackets
  // Only wrap if console.log is NOT already using ()
  output = output.replace(
    /^\s*console\.log\s+(?!\()(.+)$/gm,
    (_, expr) => `console.log(${expr.trim()})`
  );

  return output;
}