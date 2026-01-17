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
dhar umar = 20

jadi (umar > 18) {
  bol "Vote de sakat ba"
} nahi_ta {
  bol "Abhi ruk ja"
}

`);
```

## 🔤 Supported Bhojpuri Keywords

| Bhojpuri Keyword | JavaScript    |
| ---------------- | ------------- |
| `dhar`           | `let`         |
| `thos`           | `const`       |
| `bol`            | `console.log` |
| `jadi`           | `if`          |
| `nahi_ta`        | `else`        |
| `jab_le`         | `while`       |
| `har`            | `for`         |
| `kaj`            | `function`    |
| `laut`           | `return`      |
| `theek`          | `true`        |
| `na`             | `false`       |
| `khali`          | `null`        |


> BhojpuriLang now operates in Pure Bhojpuri Mode,
> meaning only native Bhojpuri keywords are supported.
> This ensures a clear identity and authentic Bhojpuri syntax.

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