const counter = {
    counterValue: 0,
    increment() {
        this.counterValue += 1;
    },
    decrement() {
        this.counterValue -= 1;
    }
};
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const counterValueEl = document.querySelector('[id="value"]');

console.log(decrementBtn);
console.log(incrementBtn);
console.log(counterValueEl);
decrementBtn.addEventListener('click', function () {

    counter.decrement();
    // console.log(counter);
    counterValueEl.textContent = counter.counterValue;
});
incrementBtn.addEventListener('click', function () {

    counter.increment();
    // console.log(counter);
    counterValueEl.textContent = counter.counterValue;
});