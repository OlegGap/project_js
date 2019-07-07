const serializedState = JSON.stringify(value);
localStorage.setItem(key, serializedState);

// const serializedState = localStorage.getItem(key);



const detailsTitle = document.querySelector('.dumbo');

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


    detailsTitle()
    renderFilms.map(film=>console.log(film))
    
  
    if (genres.find(film => film.id === id)) {
    } ///check
  }
}
