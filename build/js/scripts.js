'use strict';

var renderFilms = [];
var genres = [];
var pageNumber = 1;
var list = document.querySelector('.cards__container');

function createCardFunc(_ref) {
  var backdrop_path = _ref.backdrop_path,
      title = _ref.title,
      id = _ref.id,
      vote_average = _ref.vote_average;
  var li = document.createElement('li');
  li.className = 'card__container';
  var divMark = document.createElement('div');
  divMark.className = 'card__mark';
  divMark.innerHTML = vote_average;
  var divTitle = document.createElement('div');
  divTitle.className = 'card__title';
  divTitle.innerHTML = title;
  var img = document.createElement('img');
  img.className = 'card__img';
  img.setAttribute('src', "https://image.tmdb.org/t/p/w500/".concat(backdrop_path));
  img.setAttribute('alt', title);
  li.append(divMark, divTitle, img);
  list.appendChild(li);
  li.addEventListener('click', function () {
    return activeDetailsPage(id, false);
  });
  return li;
}

function fetchPopularMoviesList() {
  var fragment = document.createDocumentFragment();
  fetch("https://api.themoviedb.org/3/movie/popular?api_key=56d683041d5d1a0178e72b4a2ffc8e86&language=en-US&page=".concat(pageNumber)).then(function (res) {
    return res.json();
  }).then(function (data) {
    return data.results;
  }).then(function (res) {
    res.map(function (film) {
      renderFilms.push(film);
      fragment.append(createCardFunc(film));
    });
    list.innerHTML = '';
    list.append(fragment);
  });
}

function fetchGenres() {
  fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=56d683041d5d1a0178e72b4a2ffc8e86&language=en-US").then(function (res) {
    return res.json();
  }).then(function (data) {
    return data.genres;
  }).then(function (res) {
    res.map(function (film) {
      genres.push(film);
    });
  });
}

fetchPopularMoviesList();
fetchGenres();
"use strict";

var inputValue = document.querySelector('.card__search_input');
var form = document.querySelector('#js-form');
var error = document.querySelector('.error');
var buttonBar = document.querySelector('.switching-bar_content');
var buttonBarPrev = document.querySelector('.switching-bar_prev');
var barSpan = document.querySelector('.switching-bar_span');
form.addEventListener('submit', hundleSubmit);

function hundleSubmit(evt) {
  evt.preventDefault();
  searchFilms();
}

function searchFilms() {
  fetchFilms(inputValue.value, pageNumber).then(function (results) {
    var fragment = document.createDocumentFragment();

    if (results !== undefined) {
      results.map(function (film) {
        renderFilms.push(film);
        fragment.append(createCardFunc(film));
      });
      list.innerHTML = '';
      list.append(fragment);
    }
  });
}

function fetchFilms(inputValue, pageNumber) {
  return fetch("https://api.themoviedb.org/3/search/movie?api_key=56d683041d5d1a0178e72b4a2ffc8e86&language=en-US&page=".concat(pageNumber, "&query=").concat(inputValue)).then(function (res) {
    return res.json();
  }).then(function (result) {
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

  if (inputValue.value === '') {
    fetchPopularMoviesList();
  } else {
    searchFilms();
  }
}
"use strict";

var homeBtn = document.querySelector('.nav__home');
var myLibraryBtn = document.querySelector('.nav__library');
var myLibrary = document.querySelector('.js-library-page');
var detailsPage = document.querySelector('.js-details-page');
var homePage = document.querySelector('.js-home-page');
var headerLogo = document.querySelector('.header__logo');
var card = document.querySelector('.card__container');
homeBtn.addEventListener('click', activeHomePage);
myLibraryBtn.addEventListener('click', activeLibraryPage);
headerLogo.addEventListener('click', activeHomePage);
activeHomePage();

function activeLibraryPage() {
  homePage.classList.add('visually-hidden');
  myLibrary.classList.remove('visually-hidden');
  detailsPage.classList.add('visually-hidden');
}

function activeHomePage() {
  homePage.classList.remove('visually-hidden');
  myLibrary.classList.add('visually-hidden');
  detailsPage.classList.add('visually-hidden');
}

function activeDetailsPage(id, isHome) {
  homePage.classList.add('visually-hidden');
  myLibrary.classList.add('visually-hidden');
  detailsPage.classList.remove('visually-hidden');
  renderDetailsPage(id, isHome);
}
"use strict";

var detailsTitle = document.querySelector('.details__title');
var detailsVote = document.querySelector('.content-table__col2__row1');
var detailsPopularity = document.querySelector('.content-table__col2__row2');
var detailsOriginalTitle = document.querySelector('.content-table__col2__row3');
var detailsGenre = document.querySelector('.content-table__col2__row4');
var detailsAbout = document.querySelector('.details_about');
var btnAddWatched = document.querySelector('.btn-list-item-1');
var btnAddQueue = document.querySelector('.btn-list-item-2');
var detailsImg = document.querySelector('.img-wrapper');

function renderDetailsPage(id, isHome) {
  var currentFilm;

  if (isHome) {//lockStor
  } else {
    renderFilms.forEach(function (film) {
      if (film.id === id) {
        currentFilm = film;
      }
    });
    detailsTitle.innerHTML = currentFilm.title;
    detailsVote.innerHTML = currentFilm.vote_average;
    detailsPopularity.innerHTML = currentFilm.popularity;
    detailsOriginalTitle.innerHTML = currentFilm.original_title; // detailsGenre.innerHTML = 'some genre';

    detailsAbout.innerHTML = currentFilm.overview;
    detailsImg.firstChild.setAttribute('src', "https://image.tmdb.org/t/p/w500/".concat(currentFilm.poster_path));
  }

  var watched = localStorage.getItem('watched');

  if (watched === null) {
    btnAddWatched.firstChild.setAttribute('src', 'images/icon/video.png');
    btnAddWatched.lastChild.innerHTML = 'Add to watched';
  } else if (watched.find(function (film) {
    return film.id === id;
  })) {
    btnAddWatched.lastChild.innerHTML = 'Remove from watched';
    btnAddWatched.firstChild.setAttribute('src', 'images/icon/trash.png');
  } else {
    btnAddWatched.firstChild.setAttribute('src', 'images/icon/video.png');
    btnAddWatched.lastChild.innerHTML = 'Add to watched';
  }

  var queue = localStorage.getItem('queue');

  if (queue === null) {
    btnAddQueue.firstChild.setAttribute('src', 'images/icon/calendar-plus.png');
    btnAddQueue.lastChild.innerHTML = 'Add to queue';
  } else if (queue.find(function (film) {
    return film.id === id;
  })) {
    btnAddQueue.lastChild.innerHTML = 'Remove from queue';
    btnAddQueue.firstChild.setAttribute('src', 'images/icon/calendar-minus.png');
  } else {
    btnAddQueue.firstChild.setAttribute('src', 'images/icon/calendar-plus.png');
    btnAddQueue.lastChild.innerHTML = 'Add to queue';
  }

  btnAddQueue.addEventListener('click', hundleClickChangeQueue);

  function hundleClickChangeQueue(evt) {
    if (evt.firstChild.innerHTML === 'Add to queue') {
      queue.push(currentFilm);
    } else {
      queue.pop(currentFilm);
    }

    localStorage.setItem('queue', JSON.stringify(queue));
  }

  btnAddWatched.addEventListener('click', hundleClickChangeWatched);

  function hundleClickChangeWatched(evt) {
    if (evt.firstChild.innerHTML === 'Add to watched') {
      watched.push(currentFilm);
    } else {
      watched.pop(currentFilm);
    }

    localStorage.setItem('watched', JSON.stringify(watched));
  }
}
"use strict";