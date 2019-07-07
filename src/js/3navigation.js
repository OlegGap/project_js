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

function activeLibraryPage() {
  homePage.style.display = 'none';
  myLibrary.style.display = 'block';
  detailsPage.style.dispaly = 'none';
}

function activeHomePage() {
  homePage.style.display = 'block';
  myLibrary.style.dispaly = 'none';
  detailsPage.style.dispaly = 'none';
}

function activeDetailsPage() {
  homePage.style.display = 'none';
  myLibrary.style.dispaly = 'none';
  detailsPage.style.dispaly = 'block';
}
