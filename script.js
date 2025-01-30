"use strict";
var rating;
const ratingBtns = document.querySelectorAll(".rating-button");
const mainBtn = document.querySelector(".button");
console.log(ratingBtns.length);

for (let i = 0; i <= ratingBtns.length - 1; i++) {
  ratingBtns[i].addEventListener("click", function () {
    // let rating;
    rating = ratingBtns[i].textContent;
    // console.log(ratingBtns[i].textContent);
    // console.log(rating);
    while (i >= 0) {
      ratingBtns[i].style.backgroundColor = "white";
      ratingBtns[i].style.color = "#262E38";
      i--;
    }
  });
}
// console.log(rating);
mainBtn.addEventListener("click", function () {
  document.querySelectorAll(".card")[0].classList.add("hidden");
  document.querySelectorAll(".card")[1].classList.remove("hidden");
  if (rating) {
    document.querySelectorAll(".button")[1].textContent =
      `You selected ${rating} out of 5`;
  } else {
    document.querySelectorAll(".button")[1].textContent =
      `You selected 0 out of 5`;
  }
});
