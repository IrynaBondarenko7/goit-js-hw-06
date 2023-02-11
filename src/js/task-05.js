const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

textInput.addEventListener("input", onTextInput);
function onTextInput(event) {
  textOutput.textContent = event.currentTarget.value;
  if (event.currentTarget.value === "") {
    textOutput.textContent = "Anonymous";
  }
}
