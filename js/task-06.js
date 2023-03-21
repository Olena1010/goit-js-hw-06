const textInput = document.querySelector('input[id="validation-input"]')
console.log(textInput);

textInput.addEventListener("blur", () => {
   console.log(textInput.value.length);
  if (textInput.getAttribute('data-length') >= textInput.value.length) { 
    textInput.classList.remove('valid');
    textInput.classList.add('invalid');
  } else {
    textInput.classList.remove('invalid');
    textInput.classList.add('valid');
  }
});