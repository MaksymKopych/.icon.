// const header = document.querySelector(".header");
// const main = document.querySelector(".main");
const content = document.querySelector(".content");
const footer = document.querySelector(".footer");

setTimeout(() => {
  content.classList.add("glow");
  content.classList.add("move");
}, 500);
setTimeout(() => {
  content.style.opacity = 1;
  footer.classList.add("glow");
}, 1500);

setTimeout(() => {
  footer.style.opacity = 1;
}, 3000);
