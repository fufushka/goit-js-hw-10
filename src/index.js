import { fetchBreeds, fetchCatByBreed } from './js/cat-api';
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';
import Notiflix, { Report } from 'notiflix';
let isFirstLoad = true;
const select = new SlimSelect({
  select: '.breed-select',
});
const refs = {
  select: document.querySelector('.breed-select'),
  selectLib: document.querySelector('.ss-main'),
  loader: document.querySelector('.loader-text'),
  loaderAnim: document.querySelector('.loader'),
  error: document.querySelector('.error'),
  catInfo: document.querySelector('.cat-info'),
};
refs.selectLib.style.display = 'none';

function fillSelectByBreeds(breeds) {
  const options = breeds.map(({ id, name }) => ({
    text: name,
    value: id,
  }));
  select.setData(options);
  refs.loader.classList.remove('is-hidden');
  refs.loaderAnim.classList.remove('is-hidden');
}

fetchCatByBreed()
  .then(breeds => {
    fillSelectByBreeds(breeds);
    refs.selectLib.style.display = 'flex';
    refs.loader.classList.add('is-hidden');
    refs.loaderAnim.classList.add('is-hidden');
  })
  .catch(err => {
    refs.loader.classList.add('is-hidden');
    refs.loaderAnim.classList.add('is-hidden');
    Report.failure(`${err.message}`);
  });

refs.select.addEventListener('change', onChangeSelect);
function onChangeSelect() {
  refs.loader.classList.remove('is-hidden');
  refs.loaderAnim.classList.remove('is-hidden');

  if (isFirstLoad) {
    isFirstLoad = false;
    return;
  }
  refs.catInfo.innerHTML = '';

  const breedId = refs.select.value;

  fetchCatByBreed(breedId)
    .then(data => {
      if (!data) {
        Notiflix.Notify.failure(
          `Oops! Something went wrong! Try reloading the page! `
        );
      }
      appendMarkup(data);
      refs.loader.classList.add('is-hidden');
      refs.loaderAnim.classList.add('is-hidden');
    })
    .catch(error => {
      refs.loader.classList.add('is-hidden');
      refs.loaderAnim.classList.add('is-hidden');
      Report.failure(`${error.message}`);
    });
}

function createMarkup({ description, temperament, name }, { url }) {
  return `<div class="fond">
      
      </div>
      <div class="card">
        <div class="thumbnail">
          <img
            class="left"
            src="${url}"
          />
        </div>
        <div class="right">
          <h1>${name}</h1>

          <div class="separator"></div>
          <p class="card_p card_p1">
            ${description}
          </p>
          <p class="card_p">Temperament:</br>${temperament}</p>
        </div>
      </div>`;
}
function appendMarkup(data) {
  const markup = createMarkup(data[0].breeds[0], data[0]);

  refs.catInfo.innerHTML = markup;
}
