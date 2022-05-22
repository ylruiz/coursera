(function () {
  "use strict";
  const color = prompt("Please, enter a color", "");

  if (color) {
    handleColor(color);
  } else {
    console.log("You entered an empty string");
  }

  function handleColor(enteredColor) {
    switch (enteredColor.toLowerCase()) {
      case "red":
      case "blue":
      case "yellow":
        console.log(`You entered a primary color`);
        break;
      case "orange":
      case "green":
      case "purple":
        console.log(`You entered a secondary color`);
        break;
      default:
        console.log(`You entered neither a primary or a secondary color`);
        break;
    }
    console.log(`Your picked color was ${enteredColor}`);
  }
})();
