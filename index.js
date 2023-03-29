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
//console.log(parisImages[0])
let i = 0;
nextButton.addEventListener("click", function(){
i++;
document.querySelector('#pictures').src = parisImages[i];
})
