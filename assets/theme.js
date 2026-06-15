document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.hero-carousel .slide');
  let index = 0;

  function showSlide(i) {
    slides.forEach((s, idx) => s.style.display = idx === i ? 'block' : 'none');
  }

  if (slides.length) {
    showSlide(index);
    setInterval(() => {
      index = (index + 1) % slides.length;
      showSlide(index);
    }, 4000);
  }
});