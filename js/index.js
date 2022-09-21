// const botaoMenu = document.querySelector('.cabecalho__menu')
// const menu = document.querySelector('.menu-lateral')

// botaoMenu.addEventListener('click', () => {
//     menu.classList.toggle('menu-lateral--ativo')
// })

// Hamburger button

const botaoMenu = document.querySelector('.lista-menu');
const menu = document.querySelector('.menu-lateral');

if (botaoMenu) {
    botaoMenu.addEventListener('click', () => {
        menu.classList.toggle('menu-lateral--ativo');
    });
}

