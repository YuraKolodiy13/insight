//burger
let burger = document.querySelector('.nav__btn');
let navList = document.querySelector('.nav ul');

burger.addEventListener('click', function () {
    this.classList.toggle('open');
    navList.classList.toggle('visible')
});