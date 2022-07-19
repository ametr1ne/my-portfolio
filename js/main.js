/*--- Preloader -----*/

/*---- Burger -----*/

const burger = document.querySelector('.header__burger')

burger.addEventListener('click', function () {
    document.querySelector('.header__menu').classList.toggle('open')

    if (window.matchMedia("(max-width: 767px)").matches) {
        document.body.classList.toggle('overflow-hidden')
    }
})


if (window.matchMedia("(max-width: 767px)").matches) {

    const header_links = document.querySelectorAll('.header__link');

    header_links.forEach(function (value) {
        value.addEventListener('click', function () {
            document.body.classList.remove('overflow-hidden')
            document.querySelector('.header__menu').classList.remove('open')
        })
    })
}

/*------- portfolio is empty -------*/

/*-------- interactive greeting -------*/

let date = new Date().getHours()
let greeting = ''

switch (true) {
    case date >= 23 || date < 5:
        greeting = 'night'
        break
    case 5 <= date && date < 12:
        greeting = 'morning'
        break
    case 12 <= date && date < 16:
        greeting = 'afternoon'
        break
    case 16 <= date && date < 23:
        greeting = 'evening'
        break
}

document.querySelector('.interactive').innerHTML = greeting

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