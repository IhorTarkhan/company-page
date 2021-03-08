let slideIndex = 0;
/*
const timeoutInSecond = 2;
const slides = [...document.getElementsByClassName("slide")];
carousel();
function carousel() {
  slides.forEach(slide => (slide.style.display = "none"));
  slides[slideIndex].style.display = "block";
  slideIndex = (slideIndex + 1) % slides.length;
  setTimeout(carousel, timeoutInSecond * 1000);
}
*/

const imgArray = [
  "http://placehold.it/300x200",
  "http://placehold.it/200x100",
  "http://placehold.it/400x300"
];
const imgDuration = 2000;

function slideShow() {
  document.getElementById("slider").classList.add("fadeOut");
  setTimeout(() => {
    document.getElementById("slider").src = imgArray[slideIndex];
    document.getElementById("slider").classList.remove("fadeOut");
  }, 1000);
  slideIndex = (slideIndex + 1) % imgArray.length;
  setTimeout(slideShow, imgDuration);
}
slideShow();
