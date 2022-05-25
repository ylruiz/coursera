(function () {
  "use strict";
  document
    .getElementById("convert")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      showAnswer(parseFloat(document.getElementById("distance").value));
    });

  function showAnswer(distance) {
    const anwserContainer = document.getElementById("answer");
    if (distance) {
      let conversion = (distance * 1.60934).toFixed(2);
      anwserContainer.innerHTML = `<h2>${distance}mi = ${conversion}km</h2>`;
    } else {
      anwserContainer.innerHTML = "<h2>Please, enter a valid number!</h2>";
    }
  }
})();
