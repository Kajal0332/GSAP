var main = document.querySelector('.main');
var cursor = document.querySelector('#cursor');
var imag = document.querySelector('.imag')

main.addEventListener('mousemove', function (dets) {
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        duration: 1,
        ease: "power4.out"
    })
})
imag.addEventListener('mouseenter', function () {
    // console.log("hey")
    cursor.innerHTML ='View more'
    gsap.to(cursor, {
        scale: 4 ,
        backgroundColor: '#ffffff7a' 
    })
})
imag.addEventListener('mouseleave', function () {
    // console.log("hey")
    gsap.to(cursor, {
        scale:1,
        backgroundColor: '#fff' 
    })
})