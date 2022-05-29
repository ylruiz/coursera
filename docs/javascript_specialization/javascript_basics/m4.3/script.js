(function () {
  "use strict";
  const form = document.getElementById("destination_details_form");
  form.addEventListener("submit", handleFormSubmit);

  function handleFormSubmit(event) {
    event.preventDefault();

    var formElements = event.target.elements;
    const name = formElements["destination_input"].value;
    const location = formElements["location_input"].value;
    const photoUrl = formElements["photo_input"].value;
    const desc = formElements["desc_input"].value;

    // form.reset();
    for (const item in form.length) {
      item.value = "";
    }

    const card = createDestinationCard(name, location, photoUrl, desc);

    const destContainer = document.getElementById("destination_container");
    if (destContainer.children.length === 0) {
      document.getElementById("title").innerHTML = "My Wish List";
    }
    destContainer.appendChild(card);
  }

  function createDestinationCard(name, location, photoUrl, desc) {
    const cardContainer = document.createElement("div");
    cardContainer.className = "card";

    // Create the image of the card
    const cardImage = document.createElement("img");
    cardImage.setAttribute("alt", photoUrl ? name : "default image");
    cardImage.setAttribute("src", photoUrl ? photoUrl : "images/signpost.jpg");
    cardContainer.appendChild(cardImage);

    // Create the body of the card
    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const cardTitle = document.createElement("h3");
    cardTitle.innerText = name;
    cardBody.appendChild(cardTitle);

    const cardSubtitle = document.createElement("h4");
    cardSubtitle.innerText = location;
    cardBody.appendChild(cardSubtitle);

    if (desc) {
      const cardDesc = document.createElement("p");
      cardDesc.innerText = desc;
      cardBody.appendChild(cardDesc);
    }

    const cardButton = document.createElement("button");
    cardButton.innerText = "Remove";
    cardButton.addEventListener("click", removeCard);
    cardBody.appendChild(cardButton);

    cardContainer.appendChild(cardBody);
    return cardContainer;
  }

  function removeCard(event) {
    event.target.parentElement.parentElement.remove();
  }
})();
