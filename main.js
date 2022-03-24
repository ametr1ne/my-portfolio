/*--- Preloader -----*/

window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
    }, 500);
}

/*------- portfolio is empty -------*/

var elemCount = document.querySelectorAll('.works-item').length;
let worksEmpty = document.getElementsByClassName('works-empty')[0];

if (elemCount === 0) {
    worksEmpty.style.display = 'flex';
} else {
    worksEmpty.style.display = 'none';
}

/*-------------------- FOR TESTS --------------------------*/

let menuItem = document.querySelectorAll('.works-list_title');

for (let i = 0; i< menuItem.length; i++) {
    menuItem[i].addEventListener('click', function (e) {
        document.getElementsByClassName('works-list_limiter')[i].classList.toggle('open_list');
    })
}

