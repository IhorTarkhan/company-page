const timeoutInSecond = 4;
let slideIndex = 0;
const slides = [...document.getElementsByClassName("slide")];
carousel();
function carousel() {
  slides.forEach(slide => (slide.style.display = "none"));
  slides[slideIndex].style.display = "block";
  slideIndex = (slideIndex + 1) % slides.length;
  setTimeout(carousel, timeoutInSecond * 1000);
}
