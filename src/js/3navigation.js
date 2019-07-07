const homeBtn = document.querySelector('.nav__home');
const myLibraryBtn = document.querySelector('.nav__library');
const myLibrary = document.querySelector('.js-library-page');
const detailsPage = document.querySelector('.js-details-page');
const homePage = document.querySelector('.js-home-page');
const headerLogo = document.querySelector('.header__logo');
const card = document.querySelector('.card__container');

homeBtn.addEventListener('click', activeHomePage);
myLibraryBtn.addEventListener('click', activeLibraryPage);
headerLogo.addEventListener('click', activeHomePage);

activeHomePage()

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
