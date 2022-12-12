import { search, searchQuery2 } from "./components/search-bar/search-bar.js";
import { createCharacterCard } from "./components/card/card.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);

const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
let maxPage = 42;
export let page = 1;
search();

nextButton.addEventListener("click", async () => {
  if (page < maxPage) {
    page++;
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?name=${searchQuery2}&page=${page}`
    );
    fetchCharacters(response);
  }
});
prevButton.addEventListener("click", async () => {
  if (page > 1) {
    page--;
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?name=${searchQuery2}&page=${page}`
    );
    fetchCharacters(response);
  }
});

//First Fetch
//firstfetchCharacters();

async function firstfetchCharacters() {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/character/`);
    if (!response.ok) {
      console.log("Response not okay!");
    } else {
      const rickAndMortyData = await response.json();
      cardContainer.innerHTML = "";
      rickAndMortyData.results.forEach((result) => {
        createCharacterCard(result);
        pagination.textContent = `${page} / ${rickAndMortyData.info.pages}`;
      });
    }
  } catch (error) {
    console.error(error);
  }
}
const allCharacters = await fetch(`https://rickandmortyapi.com/api/character/`);
const test2 = await fetch(`https://rickandmortyapi.com/api/character?page=4`);
fetchCharacters(allCharacters);

//Fetch
export async function fetchCharacters(data) {
  try {
    //const response = data;
    if (!data.ok) {
      console.log("Response not okay!");
    } else {
      const cardData = await data.json();
      cardContainer.innerHTML = "";
      cardData.results.forEach((result) => {
        createCharacterCard(result);
        pagination.textContent = `${page} / ${cardData.info.pages}`;
        maxPage = cardData.info.pages;
      });
    }
  } catch (error) {
    console.error(error);
  }
}

/*
async function fetchCharacters() {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}`
    );
    console.log(response);
    if (!response.ok) {
      console.log("Response not okay!");
    } else {
      const rickAndMortyData = await response.json();
      console.log(rickAndMortyData.results);
      cardContainer.innerHTML = "";
      rickAndMortyData.results.forEach((result) => {
        createCharacterCard(result);
        pagination.textContent = `${page} / ${rickAndMortyData.info.pages}`;
      });
    }
  } catch (error) {
    console.error(error);
  }
}
*/
