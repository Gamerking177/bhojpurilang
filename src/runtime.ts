import { translate } from "./translator.js";
import {
  detectCategory,
  getBhojpuriGaali,
  ErrorCategory
} from "./errors.js";

export type RunOptions = {
  debug?: boolean;
};

function extractLineNumber(stack?: string): number | null {
  if (!stack) return null;

  // Supports most JS engines (Node / Browser)
  const match =
    stack.match(/<anonymous>:(\d+):\d+/) ||
    stack.match(/eval:(\d+):\d+/);

  return match ? Number(match[1]) : null;
}

export function run(
  code: string,
  consoleProxy: Console = console,
  options: RunOptions = {}
): void {
  try {
    const jsCode = translate(code);

    const runner = new Function(
      "console",
      `"use strict";\n${jsCode}`
    );

    runner(consoleProxy);
  } catch (err) {
    const error = err instanceof Error
      ? err
      : new Error("Unknown error");

    const category: ErrorCategory = detectCategory(error);
    const gaali = getBhojpuriGaali(category);
    const line = extractLineNumber(error.stack);

    // 🔥 USER MODE (DEFAULT)
    if (!options.debug) {
      let message = `🔥 Bhojpuri Error:\n${gaali}`;
      if (line !== null) {
        message += `\n👉 Line: ${line}`;
      }
      throw new Error(message);
    }

    // 🧠 DEBUG MODE (DEV / MAINTAINER)
    let debugMessage =
      `JS Error:\n${error.name}: ${error.message}`;

    if (line !== null) {
      debugMessage += `\nLine: ${line}`;
    }

    debugMessage += `\n\nBhojpuri Gali:\n${gaali}`;

    throw new Error(debugMessage);
  }
}
