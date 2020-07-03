const btn = document.querySelector(".toggle-button");
const navLinks = document.querySelector(".navbar-links");

btn.addEventListener('click', () => navLinks.classList.toggle("active"))