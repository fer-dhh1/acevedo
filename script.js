const menuHamburguesa = document.querySelector('.menu-hamburguesa');
const nav = document.querySelector('nav');

menuHamburguesa.addEventListener('click', () => {
  menuHamburguesa.classList.toggle('active');
  nav.classList.toggle('active');
});
