const inputEl = document.querySelector('#controls input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesEl = document.querySelector('#boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount){
  boxesEl.innerHTML = "";
  let size = 30;

  const elements = [];
  for (let i = 0; i < amount; i++){
    const div = document.createElement('div');
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    elements.push(div);
    size += 10;
  }
  boxesEl.append(...elements);
}

function destroyBoxes() {
  boxesEl.innerHTML = ""; 
}
 
createBtn.addEventListener('click', () => {
 const amount = parseInt(inputEl.value);

 if (amount >= 1 && amount <= 100){
  createBoxes(amount);

  inputEl.value = "";
 } else{
  alert ('Please enter a numer between 1 and 100');
 }
});


destroyBtn.addEventListener('click', () => {
  destroyBoxes();

});
