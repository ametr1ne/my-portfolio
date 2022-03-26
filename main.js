/*--- Preloader -----*/

/*---- Burger -----*/

const burger = document.querySelector('.header__burger')

burger.addEventListener('click', function () {
    document.querySelector('.header__menu').classList.toggle('open')
})



/*------- portfolio is empty -------*/

/*---- smooth scroll ------*/

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()

        const blockID = anchor.getAttribute('href').substr(1)

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}

/*-------------------- FOR TESTS --------------------------*/

let menuItem = document.querySelectorAll('.works-list_title');

for (let i = 0; i< menuItem.length; i++) {
    menuItem[i].addEventListener('click', function (e) {
        document.getElementsByClassName('works-list_limiter')[i].classList.toggle('open_list');
    })
}

