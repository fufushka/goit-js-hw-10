const API_KEY =
  'live_HWVO1vAuVa49yV7OFCrJdxNyyuUX5D5DgMpn8JLOF9Sm04RQ2jq9Sp1kVuhqaHBe';
export function fetchBreeds() {
  const url = 'https://api.thecatapi.com/v1/breeds?api_key=api_key=${API_KEY}';
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Oops! Something went wrong! Try reloading the page!');
      }
      return response.json();
    })
    .catch(error => {
      console.error(error);
    });
}
