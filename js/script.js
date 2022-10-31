let navbar = document.querySelectorAll(
  ".contenedor .menu .navbar .navbar-lista li"
);
let menu = document.querySelector("#menu");
let navbarlista = document.querySelector(".navbar-lista");

menu.addEventListener("click", () => {
  menu.classList.toggle("fa-times");
  navbarlista.classList.toggle("active");
});
console.log(navbar);
