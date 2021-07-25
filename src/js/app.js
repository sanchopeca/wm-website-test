const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

const scrollTopBtn = document.querySelector('.arrow-btn');

scrollTopBtn.addEventListener('click', scrollToTop);
