const categoriesEl = document.querySelector("#categories");
const numberOfCatigories = categoriesEl.querySelectorAll(".item");
console.log(`Number of categories: ${numberOfCatigories.length}`);

numberOfCatigories.forEach((item) => {
  // console.log(item);
  // console.log(item.firstElementChild); //<h2>Animals</h2>
  // console.log(item.firstElementChild.textContent); //Animals,Products,Technologies
  // console.log(item.lastElementChild);//ul
  // console.log(item.lastElementChild.children); //масив li (в середені ul)

  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});
