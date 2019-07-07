'use strict';

let renderFilms = [];
let genres = [];
let pageNumber = 1;
const list = document.querySelector(".cards__container");

function createCardFunc({backdrop_path, title, id, vote_average}) {

  const li = document.createElement('li');
  li.className = 'card__container';
  
  const divMark = document.createElement('div');
  divMark.className = 'card__mark';
  divMark.innerHTML = vote_average;

  const divTitle = document.createElement('div');
  divTitle.className = 'card__title';
  divTitle.innerHTML = title;

  const img = document.createElement('img')
  img.className = 'card__img';
  img.setAttribute('src', `https://image.tmdb.org/t/p/w500/${backdrop_path}`);

  li.append(divMark, divTitle, img);
  list.appendChild(li);

  li.addEventListener('click', () => activeDetailsPage(id, false))

  return li;
}

function fetchPopularMoviesList() {
  const fragment = document.createDocumentFragment();
  fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=56d683041d5d1a0178e72b4a2ffc8e86&language=en-US&page=${pageNumber}`,
  )
    .then(res => res.json())
    .then(data => data.results)
    .then(res => {
      res.map( film => {
        renderFilms.push(film);
        fragment.append(createCardFunc(film))
    })
    list.append(fragment);
  })
}

function fetchGenres() {
  fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=56d683041d5d1a0178e72b4a2ffc8e86&language=en-US&page=${pageNumber}`,
  )
    .then(res => res.json())
    .then(data => data.genres)
    .then(res => {
      res.map( film => {
        genres.push(film);
    })
  })
}

fetchPopularMoviesList();
fetchGenres();