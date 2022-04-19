// const header = document.querySelector(".header");
// const main = document.querySelector(".main");
const first = document.querySelector(".first");
const second = document.querySelector(".second");
const footer = document.querySelector(".footer");

setTimeout(() => {
  first.classList.add("glow");
}, 500);
setTimeout(() => {
  first.style.opacity = 1;
  second.classList.add("glow");
}, 1500);
setTimeout(() => {
  second.style.opacity = 1;
  footer.classList.add("glow");
}, 2000);
setTimeout(() => {
  footer.style.opacity = 1;
}, 3000);
