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


// botao light on off

const checkbox = document.getElementById('chk');

checkbox.addEventListener('change', () => {
  document.body.classList.toggle('dark');
});

checkbox.addEventListener('change', () => {
  document.querySelector.classList.toggle('dark');
});
