let slideIndex = 0;
const imgArray = [...document.getElementsByClassName("slide")];

const animationTime = 500;
const callbackTimeout = 50;
const imgDuration = 4000;

function slideShow() {
  imgArray.forEach((it) => (it.style.display = "none"));
  imgArray[slideIndex].style.display = "block";
  setTimeout(() => {
    imgArray[slideIndex].classList.remove("fadeOut");
  }, callbackTimeout);

  setTimeout(() => {
    imgArray[slideIndex].classList.add("fadeOut");
    slideIndex = (slideIndex + 1) % imgArray.length;
    imgArray[slideIndex].classList.add("fadeOut");
    setTimeout(slideShow, animationTime + callbackTimeout);
  }, imgDuration - (animationTime + 2 * callbackTimeout));
}

slideShow();
