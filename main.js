const parentUL = document.querySelector(".parentUl");
const li = parentUL.children;

// for (const child of li) {

parentUL.addEventListener("click", (event) => {
  if (!(event.target.tagName == "LI")) {
    return;
  }
  if (
    (event.target.classList.contains("selected") && event.ctrlKey) ||
    event.metKey
  ) {
    event.target.classList.remove("selected");
    return;
  }

  for (const el of parentUL.children) {
    el.classList.remove("selected");
  }
  event.target.classList.add("selected");

  parentUL.onmousedown = () => false;
});
