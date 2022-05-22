(function () {
  "use strict";
  let currentImage = 0;
  const myPhotos = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
    "image5.jpg",
  ];

  const container = document.getElementById("content");
  const nextLink = document.getElementById("next");
  const prevLink = document.getElementById("previous");

  nextLink.addEventListener("click", function (event) {
    event.preventDefault();
    currentImage++;
    if (currentImage > myPhotos.length - 1) {
      currentImage = 0;
    }
    swapImage();
  });

  prevLink.addEventListener("click", function (event) {
    event.preventDefault();
    currentImage--;
    if (currentImage < 0) {
      currentImage = myPhotos.length - 1;
    }
    swapImage();
  });

  function swapImage() {
    const newSlide = document.createElement("img");
    newSlide.setAttribute("src", `slides/${myPhotos[currentImage]}`);
    newSlide.className = "fade-in-image";
    container.appendChild(newSlide);
    const containerChildren = container.children;
    if (containerChildren.length > 2) {
      container.removeChild(containerChildren[0]);
    }
  }
})();
