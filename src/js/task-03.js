const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryRef = document.querySelector(".gallery");

// images.forEach((img) => {
//   const imgItem = document.createElement("li");
//   // console.log(imgItem);
//   const imgEl = document.createElement("img");
//   // console.log(imgEl);
//   imgEl.src = img.url;
//   imgEl.alt = img.alt;
//   imgEl.width = 320;
//   imgItem.append(imgEl);
//   // console.log(imgItem);
//   galleryRef.append(imgItem);
// });

const galleryItem = images
  .map(
    (imgEl) =>
      `<li><img src="${imgEl.url}" alt="${imgEl.alt}" width=320  class="animal-picture"/><li>`
  )
  .join("");
console.log(galleryItem);
galleryRef.insertAdjacentHTML("afterbegin", galleryItem);
