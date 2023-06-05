const API_KEY =
  'live_HWVO1vAuVa49yV7OFCrJdxNyyuUX5D5DgMpn8JLOF9Sm04RQ2jq9Sp1kVuhqaHBe';
// function fetchBreeds() {
//   const url = `https://api.thecatapi.com/v1/breeds?api_key=${API_KEY}`;
//   return fetch(url)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Oops! Something went wrong! Try reloading the page!');
//       }
//       return response.json();
//     })
//     .catch(error => {
//       console.error(error);
//     });
// }
function fetchCatByBreed(breedId) {
  const urlAll = `https://api.thecatapi.com/v1/breeds?api_key=${API_KEY}`;
  const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&api_key=${API_KEY}`;
  if (breedId) {
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(
            'Oops! Something went wrong! Try reloading the page!'
          );
        }
        return response.json();
      })
      .catch(error => {
        console.error(error);
      });
  }
  return fetch(urlAll)
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
export { fetchBreeds, fetchCatByBreed };
