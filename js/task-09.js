function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const duvEl = document.querySelector('.widget');
const spanEl = document.querySelector('.color');
const buttonEl = document.querySelector('.change-color');
console.log(getRandomHexColor())

buttonEl.addEventListener('click', () => {
  duvEl.parentNode.style.backgroundColor= getRandomHexColor();
  spanEl.textContent = duvEl.parentNode.style.backgroundColor;
})
