let counterValue = 0;
const counterRef = document.querySelectorAll("#counter button");
// console.log(counterRef[0]);//<button decremtnt>
// console.log(counterRef[0].dataset.action);//decrement

const decrementButton = counterRef[0];
const incrementButton = counterRef[1];
const valueEl = document.querySelector("#value");

decrementButton.addEventListener("click", onDecrementButtonClick);
function onDecrementButtonClick(event) {
  counterValue -= 1;
  valueEl.textContent = counterValue;
}

incrementButton.addEventListener("click", onIncrementButtonClick);
function onIncrementButtonClick(event) {
  counterValue += 1;
  valueEl.textContent = counterValue;
}
