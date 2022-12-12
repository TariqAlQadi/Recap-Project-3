export const searchQuery = "";
export const searchBar = document.querySelector('[data-js="search-bar"]');

export function search() {
  searchBar.addEventListener("submit", (event) => {
    const formData = new FormData(event.target);
    const searchData = Object.fromEntries(formData);

    const searchQuery = searchData.query;
    console.log(searchQuery);

    async function fetchSearchedCards() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${searchQuery}`
      );
      const searchedCards = await response.json();
      console.log(searchedCards);
      try {
        if (response.ok) {
          const searchedCards = await response.json();
          console.log(searchedCards);
        } else {
          console.log("Response not ok");
        }
      } catch (error) {
        console.error("Error");
      }
    }
    fetchSearchedCards();
  });
}

/*.filter((card) => {
        return .includes(searchQuery);
    })
    event.target.reset(); 
    */
