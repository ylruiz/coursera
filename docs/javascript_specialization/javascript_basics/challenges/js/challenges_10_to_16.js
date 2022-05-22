(function () {
  "use strict";  
  const name = prompt("Enter your name", "");
  const foods = ["cheese", "salad", "chicken"];

  const isNameValid = (name) => name == null || name === "";

  function hello(name) {
    if (isNameValid(name)) {
      return "Your didn't enter your name.";
    } else {
      return `Hello ${name} and welcome!`;
    }
  }

  function hospitality(name, foods) {
    console.log(hello(name));
    if (!isNameValid(name)) {
      console.log(
        `${name}, whould you like some ${
          foods[generateRandomInt(0, foods.length)]
        }?`
      );
    }
  }

  function generateRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  hospitality(name, foods);
})();
