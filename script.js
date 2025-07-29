const slides = document.querySelectorAll('.slide');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

let index = 0;

function showSlide(i) {
  slides.forEach((slide, idx) => {
    slide.classList.remove('active');
    if (idx === i) {
      slide.classList.add('active');
    }
  });
}

next.addEventListener('click', () => {
  index = (index + 1) % slides.length;
  showSlide(index);
});

prev.addEventListener('click', () => {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
});

// Optional autoplay
setInterval(() => {
  index = (index + 1) % slides.length;
  showSlide(index);
}, 4000);

showSlide(index);




//fabric slider1


  