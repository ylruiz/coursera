(function () {
  "use strict";
  const imageUrl = "images/image";
  const imagesLenght = 5;
  let images = [];
  let currentImage = 0;
  let imageTag = document.getElementById("myimage");
  document.getElementById("next").onclick = showNextImage;
  document.getElementById("previous").onclick = showPreviousImage;

  for (let i = 0; i < imagesLenght; i++) {
    images[i] = `${imageUrl}${i + 1}.jpg`;
    console.log(images[i]);
  }

  function showNextImage() {
    currentImage++;
    if (currentImage > imagesLenght - 1) {
      currentImage = 0;
    }
    imageTag.src = images[currentImage];
  }

  function showPreviousImage() {
    currentImage--;
    if (currentImage === 0) {
      currentImage = 4;
    }
    imageTag.src = images[currentImage];
  }
})();
