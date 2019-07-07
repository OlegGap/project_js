// const serializedState = JSON.stringify(value);
// localStorage.setItem(key, serializedState);

// const serializedState = localStorage.getItem(key);

const detailsTitle = document.querySelector('.details__title');
const detailsVote = document.querySelector('.content-table__col2__row1');
const detailsPopularity = document.querySelector('.content-table__col2__row2');
const detailsOriginalTitle = document.querySelector(
  '.content-table__col2__row3',
);
const detailsGenre = document.querySelector('.content-table__col2__row4');
const detailsAbout = document.querySelector('.details_about');
const btnAddWatched = document.querySelector('.btn-list-item-1');
const btnAddQueue = document.querySelector('.btn-list-item-2');

function activeDetailsPage(id, isHome) {
  console.log(genres);
  if (isHome) {
    //lockStor
  } else {
    let currentFilm;

    renderFilms.forEach(film => {
      if (film.id === id) {
        currentFilm = film;
      }
    });
    console.log(currentFilm);
    detailsTitle.innerHTML = currentFilm.title;
    detailsVote.innerHTML = currentFilm.vote_everage;
    detailsPopularity.innerHTML = currentFilm.popularity;
    detailsOriginalTitle.innerHTML = currentFilm.original_title;
    // detailsGenre.innerHTML = 'some genre';
    detailsAbout.innerHTML = currentFilm.overview;
  }
  
  watched = localStorage.getItem('watched');

  if (watched === null) {
      btnAddWatched.firstChild.setAttribute('src', "images/icon/video.png")
      btnAddWatched.lastChild.innerHTML = 'Add to watched';
  } else if (watched.find(film => film.id === id)) {
    btnAddWatched.lastChild.innerHTML = 'Remove from watched';
    btnAddWatched.firstChild.setAttribute('src', "images/icon/trash.png")
  } else {
      btnAddWatched.firstChild.setAttribute('src', "images/icon/video.png")
      btnAddWatched.lastChild.innerHTML = 'Add to watched';
  }

  queue = localStorage.getItem('queue');

  if (queue === null) {
      btnAddQueue.firstChild.setAttribute('src', "images/icon/calendar-plus.png")
      btnAddQueue.lastChild.innerHTML = 'Add to queue';
  } else if (queue.find(film => film.id === id)) {
      btnAddQueue.lastChild.innerHTML = 'Remove from queue';
      btnAddQueue.firstChild.setAttribute('src', "images/icon/calendar-minus.png")
  } else {
      btnAddQueue.firstChild.setAttribute('src', "images/icon/calendar-plus.png")
      btnAddQueue.lastChild.innerHTML = 'Add to queue';
  }

//   btnAddQueue.addEventListener('click', )
}
