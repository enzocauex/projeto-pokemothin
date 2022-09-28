const menu =  document.querySelector('.hamburguer-menu')
const list = document.querySelector('ul')

menu.addEventListener('click', showMenu)

function showMenu() {
    list.classList.toggle('open')
    console.log('enzo')
}