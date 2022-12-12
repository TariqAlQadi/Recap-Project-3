
import { search } from "./components/search-bar/search-bar.js";
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
const maxPage = 42;
let page = 1;
const searchQuery = "";

nextButton.addEventListener("click", () => {
  if (page < 42){
    page++
    fetchCharacters();
}
return 
})

prevButton.addEventListener("click", () => {
  
  if (page > 1) {
    page--;
    fetchCharacters();
  }
  return
})

//First Fetch
firstfetchCharacters()

async function firstfetchCharacters() {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/character/`);
    console.log(response)
    if (!response.ok) {
      console.log("Response not okay!");
    } else {
      const rickAndMortyData = await response.json();
      console.log(rickAndMortyData.results);
      cardContainer.innerHTML = "";
      rickAndMortyData.results.forEach((result) => {
      createCharacterCard(result);
      });
    }
  } catch (error) {
    console.error(error);
  }
}

//Fetch

async function fetchCharacters() {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
    console.log(response)
    if (!response.ok) {
      console.log("Response not okay!");
    } else {
      const rickAndMortyData = await response.json();
      console.log(rickAndMortyData.results);
      cardContainer.innerHTML = "";
      rickAndMortyData.results.forEach((result) => {
      createCharacterCard(result);
      });
    }
  } catch (error) {
    console.error(error);
  }
}
