const textInput = document.querySelector('[id="name-input"]');
const output = document.querySelector('[id="name-output"]');

console.log(textInput);
console.log(output);


textInput.addEventListener('input', handleInputChange);

function handleInputChange(event) {
  output.textContent = event.currentTarget.value;
  if (event.currentTarget.value.trim() === '') {
    output.textContent = 'Anonymous';
  }
}