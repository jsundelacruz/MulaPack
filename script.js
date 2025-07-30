document.addEventListener('DOMContentLoaded', () => {
  const heroImage = document.querySelector('.hero-image');
  const heroTitle = document.querySelector('.hero-title');

  function onScroll() {
    const scrollY = window.scrollY;
    const trigger = window.innerHeight * 0.3;

    if (scrollY > trigger) {
      heroImage.classList.add('fade-out');
      heroTitle.classList.add('fade-out');
    } else {
      heroImage.classList.remove('fade-out');
      heroTitle.classList.remove('fade-out');
    }
  }

  window.addEventListener('scroll', onScroll);
}); 