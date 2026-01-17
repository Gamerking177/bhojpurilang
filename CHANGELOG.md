# Changelog

All notable changes to **BhojpuriLang** will be documented in this file.

---

## [1.3.0] - 2026-01-18

### 🚀 Added
- **Pure Bhojpuri keywords introduced (Pure Bhojpuri Mode):**
  - `dhar` → `let`
  - `thos` → `const`
  - `bol` → `console.log`
  - `jadi` → `if`
  - `nahi_ta` → `else`
  - `jab_le` → `while`
  - `har` → `for`
  - `kaj` → `function`
  - `laut` → `return`
  - `theek` → `true`
  - `na` → `false`
  - `khali` → `null`

- **Bhojpuri-aware error system**
  - Errors now follow BhojpuriLang rules instead of raw JavaScript messages
  - Clean, friendly Bhojpuri error messages (no abusive language)
  - Errors categorized into `syntax`, `reference`, `assignment`, `logic`, `runtime`

- **Runtime safety**
  - Infinite loop protection with configurable timeout
  - Safe execution for browser playground usage
  - Optional `debug` mode for maintainers

---

### 🛠 Improved
- Accurate error categorization and detection
- Improved line number extraction from runtime stack (Node & browser)
- Stronger Bhojpuri language identity across runtime and errors
- Better developer experience for beginners

---

### ❌ Removed
- Hindi / mixed-language keywords removed in favor of **Pure Bhojpuri Mode**
- Raw JavaScript error exposure in user mode

---

## [1.2.0] – 2026-01-03

### 🚀 Added
- New Bhojpuri keywords:
  - `rakho` → `let`
  - `pakka` → `const`
  - `bolo` → `console.log`
  - `agar` → `if`
  - `nahi_to` → `else`
  - `jab_tak` → `while`
  - `har_ek` → `for`
  - `kaam` → `function`
  - `wapas` → `return`
  - `sahi` → `true`
  - `galat` → `false`
  - `khaali` → `null`

- Keyword-based Bhojpuri error system:
  - Errors now align with BhojpuriLang rules instead of raw JavaScript
  - Friendly, clean Bhojpuri error messages (no abusive language)

- Runtime safety improvements:
  - Infinite loop protection with configurable timeout
  - Clear separation between user errors and debug errors
  - Optional `debug` mode for maintainers

---

### 🛠 Improved
- Error categorization (`syntax`, `reference`, `assignment`, `logic`, `runtime`)
- Line number extraction from runtime stack (Node & browser)
- Overall runtime stability and safety for playground usage

---

### ❌ Removed
- No breaking removals in this release

---

## [1.1.0] – 2025-12-29

### 🚀 Added
- Initial stable BhojpuriLang runtime
- Bhojpuri-style keywords for basic control flow
- Browser and Node.js support
- Bhojpuri-style error messages (basic)

---

## [1.0.0] – 2025-12-20

### 🎉 Initial Release
- First public release of BhojpuriLang
- JavaScript-based interpreter
- Fun Bhojpuri-inspired syntax
- npm package published

---

## 🔮 Upcoming
- Documentation improvements
- More Bhojpuri syntax sugar
- Optional CLI (planned)
- Web playground enhancements

---
