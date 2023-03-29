let backButton = document.querySelector("#btn-back");
let nextButton = document.querySelector("#btn-next");
let parisImages = [
  "images/1.jpg",
  "images/2.jpg",
  "images/3.jpg",
  "images/4.jpg",
  "images/5.jpg",
  "images/6.jpg",
  "images/7.jpg",
];

let i = 0;
nextButton.addEventListener("click", function () {
  i++;
  if (i > parisImages.length - 1) {
    i = 0;
  }
  document.querySelector("#pictures").src = parisImages[i];
});
backButton.addEventListener("click", function () {
  i--;
  if (i < 0) {
    i = parisImages.length - 1;
  }
  document.querySelector("#pictures").src = parisImages[i];
});
