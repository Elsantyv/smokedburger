(function() {
    'use strict';

    var ban = 0;

    $('.icono').on('click', function() {

        if (ban == 1) {

            $('.diseño-menu').css({ 'left': '0' });

            ban = 0;

        } else {

            ban = 1;

            $('.diseño-menu').css({ 'left': '-100%' });

        }


    });

    const items = document.querySelectorAll('.burgers');
    const itemCount = items.length;
    const nextItem = document.querySelector('.next');
    const previousItem = document.querySelector('.previous');
    const tituloCarta = document.getElementById('tituloCarta');
    const descripcionCarta = document.getElementById('descripcionCarta');
    const valorCarta = document.getElementById('valorCarta');
    let count = 0;

    function showNextItem() {
        items[count].classList.remove('active');

        if (count < itemCount - 1) {
            count++;
        } else {
            count = 0;
        }

        items[count].classList.add('active');
        if (count === 0) {
            tituloCarta.innerText = 'Dulce Pecado';
            descripcionCarta.innerText = 'Una hamburguesa muy rica';
            valorCarta.innerText = '20.000';

        } else if (count === 1) {
            tituloCarta.innerText = 'Mixta';
            descripcionCarta.innerText = 'Otra hamburguesa muy rica';
            valorCarta.innerText = '18.000';

        } else if (count === 2) {

            tituloCarta.innerText = 'Pollo';
            descripcionCarta.innerText = 'Otra hamburguesa muy rica';
            valorCarta.innerText = '22.000';

        }
    }

    function showPreviousItem() {
        items[count].classList.remove('active');

        if (count > 0) {
            count--;
        } else {
            count = itemCount - 1;
        }

        items[count].classList.add('active');
        if (count === 0) {
            tituloCarta.innerText = 'Dulce Pecado';
            descripcionCarta.innerText = 'Una hamburguesa muy rica';
            valorCarta.innerText = '20.000';

        } else if (count === 1) {
            tituloCarta.innerText = 'Mixta';
            descripcionCarta.innerText = 'Otra hamburguesa muy rica';
            valorCarta.innerText = '18.000';

        } else if (count === 2) {

            tituloCarta.innerText = 'Pollo';
            descripcionCarta.innerText = 'Otra hamburguesa muy rica';
            valorCarta.innerText = '22.000';

        }
    }

    function keyPress(e) {
        e = e || window.event;

        if (e.keyCode == '37') {
            showPreviousItem();
        } else if (e.keyCode == '39') {
            showNextItem();
        }
    }

    nextItem.addEventListener('click', showNextItem);
    previousItem.addEventListener('click', showPreviousItem);
    document.addEventListener('keydown', keyPress);

})();