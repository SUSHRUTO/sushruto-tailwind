export function extractClasses() {
  const elements = document.querySelectorAll("*");

  let classes = [];

  elements.forEach(el => {
    classes.push(...el.classList);
  });

  return [...new Set(classes)];
}