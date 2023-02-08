const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsRef = document.querySelector("#ingredients");

ingredients.forEach((elItem) => {
  const ingredientItem = document.createElement("li");
  // ingredientItem.innerHTML = elItem;
  ingredientItem.textContent = elItem;
  ingredientsRef.append(ingredientItem);
});
