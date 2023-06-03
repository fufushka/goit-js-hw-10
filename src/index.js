import { fetchBreeds } from './js/cat-api';
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';
new SlimSelect({
  select: '.breed-select',
});
const refs = {
  select: document.querySelector('.breed-select'),
  loader: document.querySelector('.loader'),
  error: document.querySelector('.error'),
  catInfo: document.querySelector('.cat-info'),
};

function fillSelectByBreeds(breeds) {
  breeds.map(breed => {
    const option = document.createElement('option');
    option.value = breed.id;
    option.textContent = breed.name;
    refs.select.append(option);
  });
}
fetchBreeds().then(breeds => fillSelectByBreeds(breeds));
