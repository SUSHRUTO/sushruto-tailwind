# 🚀 Sushruto Tailwind

A lightweight, utility-first CSS engine built from scratch using JavaScript.

Instead of writing traditional CSS, you can directly use utility classes like:

chai-p-20 → padding: 20px  
chai-bg-red → background-color: red  

---

## ✨ Features

- ⚡ No CSS required
- 🎯 Utility-first class system
- 🧠 Dynamic DOM scanning
- 🔄 Real-time CSS generation
- 🎨 Modern UI utilities (glass, shadow, buttons)
- 📦 Available as an npm package

---

## 🛠️ How It Works

This engine follows a simple pipeline:

**DOM → Extract Classes → Generate CSS → Apply Styles**

### 1. Class Extraction
- Scans all DOM elements
- Collects all class names
- Filters classes starting with `chai-`

### 2. Parsing Logic
- Splits class names using `-`
- Example:
  chai-p-20 → ["chai", "p", "20"]

### 3. CSS Generation
- Converts parsed classes into CSS rules
- Example:
  chai-p-20 → padding: 20px

### 4. Style Injection
- Creates a `<style>` tag
- Injects generated CSS into the document

---

## ⚙️ Supported Utilities

### 📏 Spacing
| Class | Output |
|------|--------|
| chai-p-20 | padding: 20px |
| chai-m-10 | margin: 10px |

---

### 🎨 Colors
| Class | Output |
|------|--------|
| chai-bg-red | background-color: red |
| chai-text-white | color: white |

---

### 🔤 Typography
| Class | Output |
|------|--------|
| chai-text-20 | font-size: 20px |
| chai-text-center | text-align: center |
| chai-font-bold | font-weight: bold |

---

### 📦 Layout
| Class | Output |
|------|--------|
| chai-flex | display: flex |
| chai-flex-center | center alignment |

---

### 📐 Size
| Class | Output |
|------|--------|
| chai-w-100 | width: 100px |
| chai-h-100 | height: 100px |

---

### 🎭 Effects
| Class | Output |
|------|--------|
| chai-shadow | box-shadow |
| chai-hover-scale | hover scale effect |

---

### 🧩 Components
| Class | Output |
|------|--------|
| chai-btn | styled button |
| chai-glass | glassmorphism card |

---

## 📦 Installation

```bash
npm install sushruto-tailwind-css

## 🌐 Live Demo

https://sushruto-tailwind.vercel.app/