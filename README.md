# BhojpuriLang 🇮🇳

**BhojpuriLang** is a Bhojpuri-style programming language built on top of JavaScript.  
It allows developers to write JavaScript using **clean, Bhojpuri-inspired keywords** while keeping the runtime fast, safe, and beginner-friendly.

> Code bole Bhojpuri mein 🚀

---

## ✨ Features

- Bhojpuri-style programming syntax
- Runs on top of JavaScript
- Works in **Node.js** and **browser** environments
- Clean Bhojpuri-style error messages (no abusive language)
- Beginner-friendly keywords
- Lightweight and fast
- Open source

---

## 📦 Installation

```bash
npm install bhojpurilang
```

## 🚀 Usage

```js
import { run } from "bhojpurilang";

run(`
rakho x = 10
pakka y = 5

agar (x > y) {
  bolo("x bada ba")
} nahi_to {
  bolo("y bada ba")
}
`);
```

## 🔤 Supported Bhojpuri Keywords

| Bhojpuri  | JavaScript    |
| --------- | ------------- |
| `rakho`   | `let`         |
| `pakka`   | `const`       |
| `bolo`    | `console.log` |
| `agar`    | `if`          |
| `nahi_to` | `else`        |
| `jab_tak` | `while`       |
| `har_ek`  | `for`         |
| `kaam`    | `function`    |
| `wapas`   | `return`      |
| `sahi`    | `true`        |
| `galat`   | `false`       |
| `khaali`  | `null`        |


> Keywords are case-sensitive and designed to feel natural for Bhojpuri / Hindi speakers.

## ❌ Error Handling (Bhojpuri Style)
BhojpuriLang hides raw JavaScript errors and shows clean Bhojpuri-style error messages instead.

**Example**
```bash
🔥 Bhojpuri Error:
Variable bina rakho / pakka kiye use kar diye ho ka?
```

### Runtime Safety
- Infinite loop protection
- Friendly error categorization:
  - Syntax errors
  - Reference errors
  - Logic errors
  - Assignment errors (`pakka` reassignment)

## 🌐 Environments Supported

- Node.js
- Browser **(Soon)**
- Online playgrounds **(Soon)**
> CLI support is planned for future releases.

### 👤 Author

**Aksh Raj** <br/>

## 🔮 Roadmap (Planned)

The following features are planned for future releases:

- CLI support for running `.bhoj` files from terminal
- VS Code extension with syntax highlighting
- Strict mode (e.g. enforcing brackets for `bolo`)
- Bhojpuri code formatter

> These features are planned and may evolve based on feedback.


### 📜 License

MIT License