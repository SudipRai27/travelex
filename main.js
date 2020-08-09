//Selectors
let navList = document.querySelector('.nav-list');
let header = document.querySelector('.header');
let hamburgerMenu = document.querySelector('.hamburger-menu');
let bars = document.querySelector('.fa-bars');
let times = document.querySelector('.fa-times');

window.addEventListener('scroll', () => {
  let windowPosition = window.scrollY > 0;
  header.classList.toggle('active', windowPosition);
});

hamburgerMenu.addEventListener('click', () => {
  navList.classList.toggle('menu-open');
  if (navList.classList.contains('menu-open')) {
    bars.style.display = 'none';
    times.style.display = 'block';
  } else {
    bars.style.display = 'block';
    times.style.display = 'none';
  }
});
