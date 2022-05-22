(function () {
  "use strict";  
  const divTags = document.querySelectorAll("div");
  const firstDivTag = divTags[0];
  const buttonTags = document.querySelectorAll("button");
  let number = 1;

  buttonTags[0].addEventListener("click", function () {
    const pElement = document.createElement("p");
    const textNode = document.createTextNode(
      `This is paragraph number ${++number}`
    );
    pElement.appendChild(textNode);
    firstDivTag.appendChild(pElement);
  });

  buttonTags[1].addEventListener("click", function () {
    if (number === 1) {
      alert("Sorry, you can not delete the last paragraph");
    } else {
      firstDivTag.removeChild(firstDivTag.lastElementChild);
      number--;
    }
  });

  const h1Tag = document.querySelector("h1");
  const formTag = document.querySelector("form");
  formTag.addEventListener("submit", function (event) {
    event.preventDefault();
    const myNum = parseInt(document.querySelector("input").value);
    if (myNum) {
      h1Tag.style.fontSize = myNum + "px";
    } else {
      alert("Please, enter a number.");
    }
  });

  const secondDivTag = divTags[1];
  secondDivTag.addEventListener("mouseover", function () {
    secondDivTag.className = "big";
  });

  secondDivTag.addEventListener("mouseout", function () {
    secondDivTag.className = "small";
  });

  let pageTop;
  const bodyTag = document.querySelector("body");
  window.addEventListener("scroll", function () {
    pageTop = window.pageYOffset;
    switch (true) {
      case pageTop < 500:
        bodyTag.className = "one";
        break;
      case pageTop < 1000:
        bodyTag.className = "two";
        break;
      case pageTop < 1500:
        bodyTag.className = "three";
        break;
      case pageTop < 2000:
        bodyTag.className = "four";
        break;
      default:
        bodyTag.className = "five";
        break;
    }
  });

  window.addEventListener("keydown", function (event) {
    switch (event.key) {
      case "b":
        bodyTag.className = "one";
        break;
      case "v":
        bodyTag.className = "two";
        break;
      case "c":
        bodyTag.className = "three";
        break;
      case "f":
        bodyTag.className = "four";
        break;
      case "g":
        bodyTag.className = "five";
        break;
      default:
        alert("You haven't pressed any of the allowed keys :(");
        break;
    }
  });
})();
