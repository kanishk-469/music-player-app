const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".carousel-button.right");
const prevButton = document.querySelector(".carousel-button.left");
let currentSlide = 0;

function updateSlide(position) {
  track.style.transform = "translateX(-" + 100 * position + "%)";
}

nextButton.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlide(currentSlide);
});

prevButton.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSlide(currentSlide);
});
