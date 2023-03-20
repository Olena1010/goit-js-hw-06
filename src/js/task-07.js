const inputChange = document.querySelector('input#font-size-control')
const span = document.querySelector('span#text')

inputChange.addEventListener('change', event => {
    span.style.fontSize = `${event.currentTarget.value }px`
})