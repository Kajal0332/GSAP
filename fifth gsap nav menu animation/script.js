let menu = document.querySelector('.nav i')
let halfmenu = document.querySelector('.half i')

var tl = gsap.timeline()

tl.to(".half", {
    right: 0,
    duration: 0.5
})
tl.from('.half p', {
    x: 150,
    duration: 0.5,
    stagger: 0.2,
    opacity: 0
})

tl.from('.half i', {
    opacity: 0
})
tl.pause()

menu.addEventListener('click', function () {
    tl.play()
})

halfmenu.addEventListener('click', function () {
    tl.reverse()
})