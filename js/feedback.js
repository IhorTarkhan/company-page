const popupWrapper = document.getElementById("content-feedback");

const openPopup = () => {
  popupWrapper.classList.remove("hide");
};
popupWrapper.addEventListener("click", (e) => {
  if (e.target !== e.currentTarget) return;
  popupWrapper.classList.add("hide");
});
