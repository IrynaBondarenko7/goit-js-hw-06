function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const divBoxes = document.querySelector("#boxes");
const buttonCreate = document.querySelector("#controls button[data-create]");
const buttonDestroy = document.querySelector("#controls button[data-destroy]");
const textInput = document.querySelector("#controls input");

buttonCreate.addEventListener("click", onCreateButtonClick);

function onCreateButtonClick(event) {
  const value = textInput.value;
  return divBoxes.append(...createBoxes(value));
}

const divElements = [];

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const divEl = document.createElement("div");
    divEl.style.height = `${30 + 10 * i}px`;
    divEl.style.width = `${30 + 10 * i}px`;
    divEl.style.border = "1px solid #251611";
    divEl.style.backgroundColor = getRandomHexColor();
    divElements.push(divEl);
  }
  return divElements;
}
