/* global bootstrap: false */
(function () {
  "use strict";
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.forEach(function (tooltipTriggerEl) {
    new bootstrap.Tooltip(tooltipTriggerEl);
  });
})();

var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

window.addEventListener("DOMContentLoaded", (event) => {
  // Toggle the side navigation
  const sidebarToggle = document.body.querySelector("#sidebarToggle");
  if (sidebarToggle) {
    sidebarToggle.addEventListener("click", (event) => {
      event.preventDefault();
      document.body.classList.toggle("sb-sidenav-toggled");
      localStorage.setItem("sb|sidebar-toggle", document.body.classList.contains("sb-sidenav-toggled"));
    });
  }

  const SearchToggle = document.body.querySelector("#searchDropdown");
  if (SearchToggle) {
    SearchToggle.addEventListener("click", (event) => {
      event.preventDefault();
      const searchxs = document.getElementById("SearchXS");
      searchxs.classList.toggle("show");
      localStorage.setItem("show|search", searchxs.classList.contains("show"));
    });
  }

  const UserToggle = document.body.querySelector("#userDropdown");
  if (UserToggle) {
    UserToggle.addEventListener("click", (event) => {
      event.preventDefault();
      const logout = document.getElementById("logout");
      logout.classList.toggle("show");
      localStorage.setItem("show|logout", logout.classList.contains("show"));
    });
  }
});
