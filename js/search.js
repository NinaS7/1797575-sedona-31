const searchButton = document.querySelector(".search-button");
const popup= document.querySelector(".reservation");
const form = document.querySelector(".reservation-form");
const data = form.querySelector(".reservation-data");
const people = form.querySelector(".reservation-people");

popup.classList.add("popup-close");

searchButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("popup-show");
  searchButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("popup-show");
  });
});


form.addEventListener("submit", function (evt) {
  if (!data.value || !people.value) {
    evt.preventDefault();
    popup.classList.remove("error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("error");
  }
});

