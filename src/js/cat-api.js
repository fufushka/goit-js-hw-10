const API_KEY =
  'live_HWVO1vAuVa49yV7OFCrJdxNyyuUX5D5DgMpn8JLOF9Sm04RQ2jq9Sp1kVuhqaHBe';
const BASE_URL = 'https://api.thecatapi.com/v1';

function fetchCatByBreed(breedId) {
  if (breedId) {
    return fetch(
      `${BASE_URL}/images/search?breed_ids=${breedId}&api_key=${API_KEY}`
    ).then(response => {
      if (!response.ok) {
        throw new Error('Oops! Something went wrong! Try reloading the page!');
      }
      return response.json();
    });
  }
  return fetch(`${BASE_URL}/breeds?api_key=${API_KEY}`).then(response => {
    if (!response.ok) {
      throw new Error('Oops! Something went wrong! Try reloading the page!');
    }
    return response.json();
  });
}
export { fetchBreeds, fetchCatByBreed };
