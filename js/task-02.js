const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsLi = document.querySelector("#ingredients");
const newLi = ingredients.map((ingredient) => {
  const items = document.createElement("li");
  items.textContent = ingredient;
  items.classList.add("item");

  return(items);
})

ingredientsLi.append(...newLi);

console.log(ingredientsLi);
console.log(ingredients);

// DONE