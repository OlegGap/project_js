'use strict';

fetch(
  'https://api.themoviedb.org/3/movie/popular?api_key=56d683041d5d1a0178e72b4a2ffc8e86&language=en-US&page=1',
)
  .then(res => res.json())
//   .then(res => )

// let inputValue;

// const section = document.querySelector('.cards__container');

// function createLibraryCards(films, element) {
//   films
//     .then(res => res.results)
//     .then(res => {
//       element.innerHTML(
//         res.reduce((acc, el) => (acc += createLibraryCard(el)), '')
//       );
//     });
// }

// function createLibraryCard ({ vote_average, title, id, backdrop_path }) {
//     console.log(title);
//   return `<li class="card__container" data-id="${id}">
//     <div class="card__mark">${vote_average}</div>
//     <div class="card__title">${title}</div>
//     <img class="card__img" src="https://image.tmdb.org/t/p/w500/${backdrop_path}" alt="${title}">
// </li>`;
// }

// createLibraryCards(films, section);
