const inputChange = document.querySelector('input#font-size-control')
const span = document.querySelector('span#text')


span.style.fontSize = inputChange.value + 'px';

const textResizing = () => {
  span.style.fontSize = `${inputChange.value}px`;
};

inputChange.addEventListener('input', textResizing);