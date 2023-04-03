let contador = 0;
function buttonClick(){
    const cards = document.getElementsByClassName('card');
    cards[contador].style.backgroundColor = 'red';
    contador++;
}