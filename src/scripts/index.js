import { Pokegochi } from "./chars.js";

const pokegochi = new Pokegochi();

const addActions = () => {
  const buttons = document.querySelectorAll("button");
  const history = document.querySelector(".history");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const message = pokegochi[btn.innerText.toLowerCase()]();

      const p = document.createElement("p");

      p.innerText = message;

      history.appendChild(p);
      renderPokegochi();
    });
  });
};

const renderPokegochi = () => {
  const image = document.querySelector("img");

  image.src = pokegochi.image;
};

addActions();
