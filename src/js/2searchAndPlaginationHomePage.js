let inputValue = document.querySelector('.card__search_input');
const form = document.querySelector('#js-form');
const error = document.querySelector('.error');
const buttonBar = document.querySelector('.switching-bar_content');
const buttonBarPrev = document.querySelector('.switching-bar_prev');

form.addEventListener('submit', searchFilms);

function searchFilms(evt) {
  evt.preventDefault();
  fetchFilms(inputValue.value, pageNumber).then(results => {
    if (results !== undefined) {
      console.log(results);
    }
  });
}

function fetchFilms(inputValue, pageNumber) {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=56d683041d5d1a0178e72b4a2ffc8e86&language=en-US&page=${pageNumber}&query=${inputValue}`,
  )
    .then(res => res.json())
    .then(result => {
      if (result.results.length === 0) {
        error.innerHTML = 'Нічого не знайдено :(';
      } else {
        error.innerHTML = '';
        return result.results;
      }
    });
}

buttonBar.addEventListener('click', plaginationNavigation);

function plaginationNavigation(event) {
  if (pageNumber === 1) {
    // buttonBarPrev.target.style.visibility = 'hidden';
  } else if (event.target.dataset.id === 'prev') {
    pageNumber -= 1;
  }
  if (event.target.dataset.id === 'next') {
    pageNumber += 1;
  }
}
