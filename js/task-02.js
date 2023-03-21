const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const elements = [];
ingredients.forEach(function (number) {
  
  const listEl = document.createElement("li");
  console.log(listEl);
  console.log(listEl.textContent = number);
  
  listEl.classList.add('item');
  elements.push(listEl)
});

const navEl = document.querySelector('ul');

navEl.append(...elements);
