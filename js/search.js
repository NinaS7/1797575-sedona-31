const searchButton = document.querySelector(".search-button");
const  searchPopup= document.querySelector(".reservation");

searchButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  searchPopup.classList.add("modal-show");
});