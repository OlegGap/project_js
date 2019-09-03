
const libraryCards = document.querySelector('.cards__wrapper');

const createCardLibrary = function ({ backdrop_path, title, id, vote_average }) {
    const li = document.createElement('li');
    li.className = 'card__container';

    const divMark = document.createElement('div');
    divMark.className = 'card__mark';
    divMark.innerHTML = vote_average !== 0 ? vote_average : '--';

    const divTitle = document.createElement('div');
    divTitle.className = 'card__title';
    divTitle.innerHTML = title;

    const img = document.createElement('img');
    img.className = 'card__img';
    let imgSrc = backdrop_path !== null ? `https://image.tmdb.org/t/p/w500/${backdrop_path}` : "https://image.tmdb.org/t/p/w500//gkuyOdCeuKLdOlwQIUF44SHsYCq.jpg";
    img.setAttribute('src', imgSrc);
    img.setAttribute('alt', title);


    li.append(divMark, divTitle, img);
    libraryCards.appendChild(li);

    li.addEventListener('click', () => activeDetailsPage(id, false));
}


const librarySpinWatchd = document.querySelector('.library__spin__list-item-watched');
const librarySpinQueue = document.querySelector('.library__spin__list-item-queue');

let libraryCardsWatched = localStorage.getItem('watched') ? JSON.parse(localStorage.getItem('watched')) : [];//запишемо дані з лок.стор в змінну

if (libraryCardsWatched.length == 0) {
    libraryCards.innerHTML = 'Your movies for watching will be here ';
} else {
    libraryCardsWatched.forEach(film => {
        createCardLibrary(film)
    });
}

librarySpinWatchd.addEventListener('click', () => {
    libraryCardsWatched = localStorage.getItem('watched') ? JSON.parse(localStorage.getItem('watched')) : [];
    if (libraryCardsWatched.length === 0) {
        libraryCards.innerHTML = 'Your movies for watching will be here ';
    } else {
        libraryCards.innerHTML = '';
        libraryCardsWatched.forEach(film => {
            createCardLibrary(film)
        });
    }
    librarySpinWatchd.classList.add('library__spin__list-item-active');
    librarySpinQueue.classList.remove('library__spin__list-item-active');
});
librarySpinQueue.addEventListener('click', () => {
    let libraryCardsQueue = localStorage.getItem('queue') ? JSON.parse(localStorage.getItem('queue')) : [];
    if (libraryCardsQueue.length === 0) {
        libraryCards.innerHTML = 'Your movies in queue will be here';
    } else {
        libraryCards.innerHTML = '';
        libraryCardsQueue.forEach(film => {
            createCardLibrary(film)
        });
    }
    librarySpinQueue.classList.add('library__spin__list-item-active');
    librarySpinWatchd.classList.remove('library__spin__list-item-active');
})





