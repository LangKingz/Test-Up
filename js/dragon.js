const nav = document.getElementById("nav");

window.addEventListener("scroll", function () {
  scrollposition = window.scrollY;

  if (scrollposition >= 60) {
    nav.classList.add("nav-dark");
  } else if (scrollposition <= 60) {
    nav.classList.remove("nav-dark");
  }
});

// var typed = new Typed(".auto", {
//   strings: ["Gilang Arya", "Web Developer", "Software Eng"],
//   typeSpeed: 60,
//   backSpeed: 70,
//   loop: true,
// });
