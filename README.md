# Sushruto Tailwind

![npm](https://img.shields.io/npm/v/sushruto-tailwind-css)
![license](https://img.shields.io/npm/l/sushruto-tailwind-css)

A lightweight **utility-first CSS engine** built from scratch using JavaScript.

No CSS files. No configuration.  
Just write classes like `chai-*` and styles are applied automatically.

---

## ✨ Features

- ⚡ Zero CSS writing
- 🎯 Utility-first approach
- 🧠 Dynamic DOM parsing
- 🔄 Real-time CSS generation
- 🎨 Built-in UI utilities (shadow, button, hover)
- 📦 Available as npm package

---

## 🛠️ How It Works

Pipeline:


DOM → Extract Classes → Generate CSS → Apply Styles


1. Scans DOM for `chai-*` classes  
2. Parses class patterns  
3. Converts them into CSS  
4. Injects styles dynamically  

---

## 📦 Installation

```bash
npm install sushruto-tailwind-css
🚀 Usage
<div class="chai-p-20 chai-bg-red chai-text-center">
  Hello World
</div>
import { sushrutoTailwind } from "sushruto-tailwind-css";

sushrutoTailwind();
🎨 Utilities
🎨 Colors

i. chai-bg-red → background: red
ii. chai-bg-blue → background: blue
iii. chai-bg-green → background: green
iv. chai-text-white → color: white
v. chai-text-black → color: black

Example:
<div class="chai-bg-red chai-p-20">
  Red Box
</div>
📏 Spacing

i. chai-p-10 → padding: 10px
ii. chai-p-20 → padding: 20px
iii. chai-p-50 → padding: 50px
iv. chai-m-10 → margin: 10px
v. chai-m-20 → margin: 20px

🔤 Typography

i. chai-text-16 → font-size: 16px
ii. chai-text-24 → font-size: 24px
iii. chai-font-bold → bold text
iv. chai-text-center → center align
v. chai-text-left → left align

📦 Layout

i. chai-flex → display: flex
ii. chai-flex-center → center alignment
iii. chai-flex-col → column layout
iv. chai-gap-10 → spacing between elements
v. chai-justify-between → space between

📐 Borders

i. chai-border-2 → border width
ii. chai-border-4 → thicker border
iii. chai-rounded-10 → border radius
iv. chai-rounded-20 → larger radius
v. chai-border-red → colored border

🎭 Transforms

i. chai-scale-2 → scale element
ii. chai-scale-3 → larger scale
iii. chai-rotate-45 → rotate 45deg
iv. chai-rotate-90 → rotate 90deg
v. chai-scale-1 → normal size

🖱 Hover Effects

i. chai-hover-scale → zoom effect
ii. chai-hover-bg-red → change background
iii. chai-hover-text-white → change text color
iv. chai-hover-shadow → add shadow
v. chai-hover-border → border effect

💻 GitHub Repository

👉 https://github.com/SUSHRUTO/sushruto-tailwind

Live Demo: 
  <a href="https://sushruto-tailwind-z7er.vercel.app/" target="_blank" style="color:#22c55e; text-decoration:none;">
    Open Website →
  </a>

👨‍💻 Author

Sushruto Majumdar

⭐ Future Improvements
Responsive utilities
Grid system
Theme support
Advanced animations