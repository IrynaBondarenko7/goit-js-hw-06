const refs = {
  rangeInput: document.querySelector("#font-size-control"),
  text: document.querySelector("#text"),
};

refs.rangeInput.addEventListener("input", onRangeInput);
function onRangeInput(event) {
  refs.text.style.fontSize = refs.rangeInput.value + "px";
}
