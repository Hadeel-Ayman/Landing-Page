let img = document.querySelector('.img');
let container = document.querySelector('.container');
let ptext = document.querySelector('.ptext');
let h2text = document.querySelector('.h2text');
let hamburgermenu = document.querySelector('.hamburger-menu'); 

function washes(wash){
    img.src = wash;
}
function colors(color){
    container.style.background = color;
}
function Title(text){
    h2text.innerText = text ;
}
function Description(textP){
    ptext.innerText = textP ;
}
