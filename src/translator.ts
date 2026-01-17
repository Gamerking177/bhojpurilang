type Rule = [RegExp, string];

export const rules: Rule[] = [
  // Variable
  [/\bdhar\b/gi, "let"],          // Bhojpuri
  [/\bthos\b/gi, "const"],        // Bhojpuri

  // Output
  [/\bbol\b/gi, "console.log"],   // Bhojpuri

  // Conditions
  [/\bjadi\b/gi, "if"],           // Bhojpuri
  [/\bnahi_ta\b/gi, "else"],      // Bhojpuri

  // Loops
  [/\bjab_le\b/gi, "while"],      // Bhojpuri
  [/\bhar\b/gi, "for"],           // Bhojpuri usage

  // Functions
  [/\bkaj\b/gi, "function"],      // Bhojpuri
  [/\blaut\b/gi, "return"],       // Bhojpuri

  // Boolean / values
  [/\btheek\b/gi, "true"],        // Bhojpuri
  [/\bna\b/gi, "false"],          // Bhojpuri
  [/\bkhali\b/gi, "null"]         // Bhojpuri
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