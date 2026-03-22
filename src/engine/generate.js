export function generateCSS(classes) {
  let css = "";

  classes.forEach(cls => {
    if (!cls.startsWith("chai-")) return;

    const parts = cls.split("-");

    // spacing
    if (parts[1] === "p") {
      css += `.${cls} { padding: ${parts[2]}px; }\n`;
    }

    if (parts[1] === "m") {
      css += `.${cls} { margin: ${parts[2]}px; }\n`;
    }

    // colors
    if (parts[1] === "bg") {
      css += `.${cls} { background-color: ${parts[2]}; }\n`;
    }

    if (parts[1] === "text" && parts.length === 3 && isNaN(parts[2])) {
      css += `.${cls} { color: ${parts[2]}; }\n`;
    }

    // typography
    if (parts[1] === "text" && !isNaN(parts[2])) {
      css += `.${cls} { font-size: ${parts[2]}px; }\n`;
    }

    if (cls === "chai-text-center") {
      css += `.${cls} { text-align: center; }\n`;
    }

    if (cls === "chai-font-bold") {
      css += `.${cls} { font-weight: bold; }\n`;
    }

    // layout
    if (cls === "chai-flex") {
      css += `.${cls} { display: flex; }\n`;
    }

    if (cls === "chai-flex-center") {
      css += `.${cls} {
        display: flex;
        justify-content: center;
        align-items: center;
      }\n`;
    }

    // width / height
    if (parts[1] === "w") {
      css += `.${cls} { width: ${parts[2]}px; }\n`;
    }

    if (parts[1] === "h") {
      css += `.${cls} { height: ${parts[2]}px; }\n`;
    }

    // border
    if (parts[1] === "border") {
      css += `.${cls} { border: ${parts[2]}px solid black; }\n`;
    }

    // radius
    if (parts[1] === "rounded") {
      css += `.${cls} { border-radius: ${parts[2]}px; }\n`;
    }

    // shadow
    if (cls === "chai-shadow") {
      css += `.${cls} {
        box-shadow: 0 4px 10px rgba(0,0,0,0.2);
      }\n`;
    }

    // hover effect 🔥
    if (cls === "chai-hover-scale") {
      css += `
      .chai-hover-scale {
        transition: 0.3s;
      }
      .chai-hover-scale:hover {
        transform: scale(1.05);
      }\n`;
    }
    if (cls === "chai-glass") {
      css += `
      .chai-glass {
        background: rgba(255,255,255,0.1);
        backdrop-filter: blur(10px);
        border-radius: 12px;
        color: white;
      }\n`;
    }

    if (cls === "chai-hover-scale") {
     css += `
      .chai-hover-scale {
       transition: all 0.3s ease;
       }
      .chai-hover-scale:hover {
       transform: scale(1.1);
      }\n`;
    }

    // button preset 🔥
    if (cls === "chai-btn") {
      css += `
      .chai-btn {
        padding: 10px 20px;
        border: none;
        background: linear-gradient(45deg, #4f46e5, #9333ea);
        color: white;
        border-radius: 8px;
        cursor: pointer;
      }\n`;
    }

  });

  return css;
}