"use strict";

// Variables
const euroR = 0.88;
const xofR = 571;
const select = document.querySelector(".select");
const amount = document.querySelector(".amount");
const convertBtn = document.querySelector(".convert-btn");

// functions
const convert = (a) => {
  return amount.value * a;
};
const hideCard = () => {
  cardEl.classList.add("hidden", "card");
  overlayEl.classList.add("hidden", "overlay");
};
const showCard = () => {
  cardEl.classList.remove("hidden");
  overlayEl.classList.remove("hidden");
};

// Create Overlay and Text elements and hide them
const overlayEl = document
  .querySelector("main")
  .appendChild(document.createElement("div"));
const cardEl = document
  .querySelector("main")
  .appendChild(document.createElement("p"));
hideCard();

// When convert button is pressed
convertBtn.addEventListener("click", function (e) {
  e.preventDefault();

  //   If euro is picked
  if (select.value === "euro") {
    cardEl.innerText = `€${convert(euroR)}`;
    showCard();
    document.querySelector(".overlay").addEventListener("click", hideCard);
  }

  // if Xof is picked
  else if (select.value === "xof") {
    cardEl.innerText = `${convert(xofR)} XOF`;
    showCard();
    document.querySelector(".overlay").addEventListener("click", hideCard);
  }
});

// close card when anywhere is clicked
