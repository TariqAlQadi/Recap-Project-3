import { page } from "../../index.js";
import { createCharacterCard } from "../card/card.js";
import { fetchCharacters } from "../../index.js";

export const searchBar = document.querySelector('[data-js="search-bar"]');
export let searchQuery2 = "";
const cardContainer = document.querySelector('[data-js="card-container"]');
const pagination = document.querySelector('[data-js="pagination"]');
export let response = null;

export function search() {
  searchBar.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const searchData = Object.fromEntries(formData);
    const searchQuery = searchData.query;
    searchQuery2 = searchQuery;
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?name=${searchQuery2}&page=${page}`
    );
    console.log(searchQuery);

    fetchCharacters(response);
    event.target.reset();
  });
}

export async function fetchSearchedCards(searchQuery, page) {
  console.log("hello");
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?name=${searchQuery}&page=${page}`
  );
  console.log(response);
  const searchedCards = await response.json();
  console.log(searchedCards);
  try {
    if (response.ok) {
      console.log(searchedCards);
      cardContainer.innerHTML = "";
      searchedCards.results.forEach((result) => {
        createCharacterCard(result);
        pagination.textContent = `${page} / ${searchedCards.info.pages}`;
      });
    } else {
      console.log("Response not ok");
    }
  } catch (error) {
    console.error("Error");
  }
  pager();
}
/*.filter((card) => {
        return .includes(searchQuery);
    })
    event.target.reset(); 
    */
