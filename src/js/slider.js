const slides = document.getElementById("slides");
const total = slides.children.length;
let index = 0;

function showNextSlide() {
  index = (index + 1) % total;
  slides.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(showNextSlide, 5000);
