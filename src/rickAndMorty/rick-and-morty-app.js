/**
 *
 * @returns {Object} data from character
 */
const fetchCharacter = async () => {
  const min = 1;
  const max = 826;
  let randomCharacter = Math.floor(Math.random() * (max - min + 1) + min);

  const res = await fetch(
    `https://rickandmortyapi.com/api/character/${randomCharacter}`
  );

  const data = await res.json();

  return data;
};

/**
 *
 * @param {HTMLDivElement} element
 */
export const RickAndMortyApp = async (element) => {
  document.querySelector("#app-title").innerHTML = "Rick and Morty App";
  element.innerHTML = "Loading...";

  const characterLabel = document.createElement("h2");
  const statusLabel = document.createElement("blockquote");
  const nextCharacterButton = document.createElement("button");
  nextCharacterButton.innerText = "Next Character";

  nextCharacterButton.addEventListener("click", async () => {
    element.innerHTML = "Loading...";

    const character = await fetchCharacter();
    renderCharacter(character);
  });

  const renderCharacter = (character) => {
    characterLabel.innerHTML = character.name;
    statusLabel.innerHTML = `is ${character.status}`;
    element.replaceChildren(characterLabel, statusLabel, nextCharacterButton);
  };

  fetchCharacter().then(renderCharacter);
};
