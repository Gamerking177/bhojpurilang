# BhojpuriLang

BhojpuriLang is a Bhojpuri-style programming language built on top of JavaScript.
It allows developers to write JavaScript using clean Bhojpuri-inspired keywords.

## Features

- Bhojpuri-style programming syntax
- Runs on top of JavaScript
- Works in Node.js and browser environments
- Clean Bhojpuri-style error messages
- Lightweight and fast
- Open source

## Installation

``bash
npm install bhojpurilang
``

# Usage

```javascript
import { run } from "bhojpurilang";

run(`
BOL_RE("Ka haal ba BhojpuriLang")

AGAR_RE (5 > 2) {
  BOL_RE("Logic sahi ba")
}
`);
```

# Error handling 

### BhojpuriLang hides raw JavaScript errors and shows Bhojpuri-style error messages instead.

### Example:-
```javascript
Bhojpuri Error:
Variable bina banaye use kar diye ho ka?
```

# License

```bash
touch LICENCE