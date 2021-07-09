const searchButton = document.querySelector(".search-button");
const  searchPopup= document.querySelector(".reservation");

searchbutton.addEventListener("click", function (evt) {
  evt.preventDefault();
  searchPopup.classList.add("modal-show");
});