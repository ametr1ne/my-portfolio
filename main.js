// SmoothScroll({
//     // Время скролла 400 = 0.4 секунды
//     animationTime    : 800,
//     // Размер шага в пикселях
//     stepSize         : 75,
//
//     // Дополнительные настройки:
//
//     // Ускорение
//     accelerationDelta : 30,
//     // Максимальное ускорение
//     accelerationMax   : 2,
//
//     // Поддержка клавиатуры
//     keyboardSupport   : true,
//     // Шаг скролла стрелками на клавиатуре в пикселях
//     arrowScroll       : 50,
//
//     // Pulse (less tweakable)
//     // ratio of "tail" to "acceleration"
//     pulseAlgorithm   : true,
//     pulseScale       : 4,
//     pulseNormalize   : 1,
//
//     // Поддержка тачпада
//     touchpadSupport   : true,
// });

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

