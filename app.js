const inputColor1 = document.querySelector("#color1");
const inputColor2 = document.querySelector("#color2");
const inputGradus = document.querySelector("#gradus");
const body = document.querySelector("body");
const form = document.querySelector("form");
const degreeText = document.querySelector("#degree-text");

let bgColor1 = "";
let bgColor2 = "";
let degree = 0;

inputColor1.addEventListener("input", (e) => {
  bgColor1 = e.target.value;
});
inputColor2.addEventListener("input", (e) => {
  bgColor2 = e.target.value;
});

inputGradus.addEventListener("input", (e) => {
  degree = e.target.value;
  degreeText.textContent = degree;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  body.style.backgroundImage = `linear-gradient(${degree}deg, ${bgColor1}, ${bgColor2})`;
});
