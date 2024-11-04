const btn = document.querySelector("button.change-color");
const spnEl = document.querySelector("span.color");

btn.addEventListener("click", () => {
  const randomColor = getRandomHexColor();


document.body.style.backgroundColor = randomColor;
spnEl.textContent = randomColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};
const divEl = document.querySelector(".widget");

divEl.style.width = "345px";
divEl.style.height= "280px";
divEl.style.top = "-50px";
divEl.style.left = "100px";
divEl.style.margin = "0 auto";
divEl.style.paddingTop = "100px";
divEl.style.paddingBottom = "100px";
divEl.style.paddingLeft = "88px";
divEl.style.paddingRight = "88px";
divEl.style.gap = "10px";
divEl.style.borderRadius = "8px";
divEl.style.border ="5px solid #FFFFFF"; 
divEl.style.opacity = "0.8";
divEl.style.display = "flex";
divEl.style.flexWrap = "wrap";
divEl.style.justifyContent = "space-around";

const pEl = document.querySelector(".widget.p");
pEl.style.fontSize = "46px";
pEl.style.color = "#2E2F42";



