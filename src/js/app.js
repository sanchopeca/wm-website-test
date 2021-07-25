//scroll logic

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

const scrollTopBtn = document.querySelector('.arrow-btn');

scrollTopBtn.addEventListener('click', scrollToTop);

//header logic

const hamburgerBtn = document.querySelector('.hamburger-btn');
const header = document.querySelector('header');

hamburgerBtn.addEventListener('click', () => {
  header.classList.toggle('menu-open')
})