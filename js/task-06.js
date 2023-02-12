const textInput = document.querySelector("#validation-input");
textInput.addEventListener("blur", onInputBlur);

const dataLenght = textInput.getAttribute("data-length");

function onInputBlur(event) {
  console.log(textInput.value.length);

  console.log(dataLenght);
  if (textInput.value.length == dataLenght) {
    textInput.classList.add("valid");
    textInput.classList.remove("invalid");
  } else {
    textInput.classList.add("invalid");
    textInput.classList.remove("valid");
  }
}
