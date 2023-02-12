const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsRef = document.querySelector("#ingredients");
const liArray = [];

ingredients.forEach((elItem) => {
  const ingredientItem = document.createElement("li");
  // ingredientItem.innerHTML = elItem;
  ingredientItem.textContent = elItem;
  liArray.push(ingredientItem);
});
ingredientsRef.append(...liArray);
