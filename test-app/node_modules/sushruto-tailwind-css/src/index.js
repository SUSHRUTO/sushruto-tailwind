import { extractClasses } from "./engine/extract.js";
import { generateCSS } from "./engine/generate.js";
import { applyStyles } from "./engine/apply.js";

export function sushrutoTailwind() {
  const classes = extractClasses();
  const css = generateCSS(classes);

  applyStyles(css);
}

// auto run
if (typeof window !== "undefined") {
  window.addEventListener("DOMContentLoaded", sushrutoTailwind);
}