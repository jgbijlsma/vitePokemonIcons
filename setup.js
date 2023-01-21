import { getAllPokemon } from "./getPokemonData";

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

let offset = 0;

nextBtn.addEventListener("click", () => {
  offset += 20;
  pokemonContainer.innerHTML = "";
  getAllPokemon(offset);
});

prevBtn.addEventListener("click", () => {
  if (offset - 20 >= 0) {
    offset -= 20;
    pokemonContainer.innerHTML = "";
    getAllPokemon(offset);
  }
});
