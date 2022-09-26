const menu =  document.querySelector('.hamburguer-menu')
const nav = document.querySelector('nav')

menu.addEventListener('click', showMenu)

function showMenu() {
    nav.classList.toggle('close')
    console.log('enzo')
}