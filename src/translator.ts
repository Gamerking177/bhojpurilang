const rules: [RegExp, string][] = [
  [/\bbol_?re\b/gi, "console.log"],
  [/\bagar_?re\b/gi, "if"],
  [/\bna_?ta_?re\b/gi, "else"],
  [/\bjab_?tak_?re\b/gi, "while"],
  [/\bkaam_?re\b/gi, "function"],
  [/\bwapas_?re\b/gi, "return"]
];

export function translate(code: string): string {
  let out = code;
  for (const [from, to] of rules) {
    out = out.replace(from, to);
  }
  return out;
}
