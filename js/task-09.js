function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const button = document.querySelector(".change-color");
const text = document.querySelector(".color");

button.addEventListener("click", onButtonClick);

function onButtonClick(event) {
  document.body.style.backgroundColor = getRandomHexColor();
  text.textContent = document.body.style.backgroundColor;
}
