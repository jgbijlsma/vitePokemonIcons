const pokemonContainer = document.querySelector("#pokemonContainer");

export function createPokemonImage(spriteUrl) {
  const imgEl = document.createElement("img");
  imgEl.setAttribute("src", spriteUrl);
  imgEl.setAttribute("alt", "Pokemon sprite");
  pokemonContainer.append(imgEl);
}
