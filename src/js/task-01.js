const liItemEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${liItemEl.length}`);

const itemEl = document.querySelectorAll('h2');
itemEl.forEach (function (number) {  
    console.log('Category:', number.textContent);
    console.log('Elements:', number.nextElementSibling.children.length)
}   
);




