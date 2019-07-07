let inputValue = document.querySelector('.card__search_input');
const form = document.querySelector('#js-form');
const error = document.querySelector('.error');
const buttonBar = document.querySelector('.switching-bar_content');
const buttonBarPrev = document.querySelector('.switching-bar_prev');
const barSpan = document.querySelector('.switching-bar_span');

form.addEventListener('submit', hundleSubmit);

function hundleSubmit(evt) {
  evt.preventDefault();
  searchFilms();
}

function searchFilms() {
  fetchFilms(inputValue.value, pageNumber).then(results => {
    const fragment = document.createDocumentFragment();
    if (results !== undefined) {
      results.map(film => {
        renderFilms.push(film);
        fragment.append(createCardFunc(film));
      });
      list.innerHTML = '';
      list.append(fragment);
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
  if (event.target.dataset.id === 'prev' && pageNumber !== 1) {
    pageNumber -= 1;
    barSpan.innerHTML = pageNumber;
  }
  if (event.target.dataset.id === 'next') {
    pageNumber += 1;
    barSpan.innerHTML = pageNumber;
  }

  if ((inputValue.value === '')) {
    fetchPopularMoviesList();
  } else {
    searchFilms();
  }
}
