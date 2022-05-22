(function () {
  "use strict";

  document.getElementById("copyright").style.color = "green";
  document.querySelector("h1").className = "red";
  document.getElementsByClassName("date")[0].className = "red";
  document
    .querySelector("#one img")
    .setAttribute("src", "http://meadpoint.net/images/xmasajax.jpg");
  const ps = document.querySelectorAll("#two p");
  for (const p of ps) {
    p.className = "blue";
  }

  const links = document.getElementsByTagName("a");
  for (const link of links) {
    // getAttribute retrieves the attribute of a DOM element,
    // while elem.attributeName retrieves the property of the DOM element.
    // They are not the same. See more info in the next link:
    // https://stackoverflow.com/questions/10280250/getattribute-versus-element-object-properties
    const href = link.getAttribute("href"); // link.href is not the same
    if (href === "https://en.wikipedia.org/wiki/Llama") {
      link.firstChild.innerHtml = "Llamas are cool!";
    }
  }
})();
