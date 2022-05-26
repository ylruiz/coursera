(function () {
  "use strict";
  let isMiles = true;
  const heading = document.querySelector("h1");
  const intro = document.querySelector("p");
  const answer = document.getElementById("answer");
  const form = document.getElementById("convert");

  document.addEventListener("keydown", function (event) {
    const key = event.key;
    const isKeyK = key === "k";
    const isKeyM = key === "m";

    if (isKeyM || isKeyK) {
      isMiles = isKeyM;
      const km = "Kilometers";
      const mi = "Miles";
      const headingText = `${isMiles ? mi : km} to ${
        isMiles ? km : mi
      } Converter`;
      const introText = `Type in a number of ${
        isMiles ? mi.toLowerCase() : km.toLowerCase()
      } and click the button to convert the distance to ${
        isMiles ? km.toLowerCase() : mi.toLowerCase()
      }.`;

      heading.innerText = headingText;
      intro.innerText = introText;
      showAnswer();
    }
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    showAnswer();
  });

  function showAnswer() {
    let distance = document.getElementById("distance").value;
    if (parseFloat(distance)) {
      const conversion = (
        isMiles ? distance * 1.60934 : distance / 1.60934
      ).toFixed(2);
      const answerText = isMiles
        ? `${distance}mi = ${conversion}km`
        : `${distance}km = ${conversion}mi`;
      answer.innerHTML = `<h2>${answerText}</h2>`;
    } else {
      answer.innerHTML =
        "<h2>Please, enter a valid number! It should be different from zero 😉</h2>";
      setTimeout(function () {
        answer.innerHTML = '<h2 class="invisible">Answer goes here</h2>';
        form.reset();
      }, 3000);
    }
  }
})();
