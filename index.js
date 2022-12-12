const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 42;
let page = 1;
const searchQuery = "";

nextButton.addEventListener("click", () => {
  page++
  fetchCharacters();
})

prevButton.addEventListener("click", () => {
  
  if (page > 1) {
    page--;
    fetchCharacters();
  }
  return
})

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

      
      //rickAndMortyData.results.forEach((result) => {
      // renderElement(Card(result));
      //});
    }
  } catch (error) {
    console.error(error);
  }
}
