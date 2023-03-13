var navSmall = document.querySelector(".hamburger");
var navList = document.querySelector(".nav-list");
var links = document.querySelector(".nav-list li");

navSmall.addEventListener("click", function () {
  this.classList.toggle("click");
  navList.classList.toggle("open");
});
