var eKey = document.querySelector('.card__item.key p:last-child')
var eLocation = document.querySelector('.card__item.location p:last-child')
var eWhich = document.querySelector('.card__item.which p:last-child')
var eCode = document.querySelector('.card__item.code p:last-child')
var home = document.querySelector('.home')
var box = document.querySelector('.box')

document.addEventListener('keydown', e => {
    eKey.innerText = e.key
    eLocation.innerText = e.location
    eWhich.innerText = e.which
    eCode.innerText = e.code

    home.classList.add('hide')
    box.classList.remove('hide')
})