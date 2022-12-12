import { page } from "../../index.js";
import { createCharacterCard } from "../card/card.js";

export const searchBar = document.querySelector('[data-js="search-bar"]');

const cardContainer = document.querySelector('[data-js="card-container"]');
const pagination = document.querySelector('[data-js="pagination"]');

export function search() {
  searchBar.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const searchData = Object.fromEntries(formData);

    const searchQuery = searchData.query;
    console.log(searchQuery);

    fetchSearchedCards(searchQuery);
  });
}

export async function fetchSearchedCards(searchQuery) {
  console.log("hello");
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?name=${searchQuery}`
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
}
/*.filter((card) => {
        return .includes(searchQuery);
    })
    event.target.reset(); 
    */
