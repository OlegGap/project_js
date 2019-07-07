'use strict';

const renderFilms = [];
const genres = [];
const pageNumber = 1;
const list = document.querySelector(".cards__container");

function createCardFunc(imgPath, filmTitle, movieId ) {

  const li = document.createElement('li');
  li.className = 'card__container';
  li.setAttribute('data-id', movieId);
  
  const divMark = document.createElement('div');
  divMark.className = 'card__mark';

  const divTitle = document.createElement('div');
  divTitle.className = 'card__title';
  divTitle.innerHTML = filmTitle;

  const divImg = document.createElement('div')
  divImg.className = 'card__img';
  divImg.innerHTML = imgPath;

  li.append(divMark, divTitle, divImg);
  list.appendChild(li);
}

function fetchPopularMoviesList() {
  fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=56d683041d5d1a0178e72b4a2ffc8e86&language=en-US&page=${pageNumber}`,
  )
    .then(res => res.json())
    .then(data => console.log(data))
   
} 

fetchPopularMoviesList()
