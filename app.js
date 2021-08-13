const menuBut = document.querySelector('.menu-but')
const nav = document.querySelector('nav')
const ul = document.querySelector('ul')

menuBut.addEventListener('click', () => {
    nav.classList.toggle('open-rad')
    ul.classList.toggle('open')
})