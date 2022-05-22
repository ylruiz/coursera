(function () {
  "use strict";
  const imageUrl = "images/image";
  const imagesLenght = 5;
  let images = [];
  for (let i = 0; i < imagesLenght; i++) {
    images[i] = `${imageUrl}${i + 1}.jpg`;
    console.log(images[i]);
  }
})();
