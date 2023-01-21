import { createPokemonImage } from "./createPokemonImage";

export async function getAllPokemon(offset) {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`
  );
  const data = await response.json();

  data.results.forEach((pokemon) => {
    getSinglePokemon(pokemon.url);
  });
}

export async function getSinglePokemon(url) {
  const response = await fetch(url);
  const data = await response.json();

  createPokemonImage(data.sprites.front_default);
}
