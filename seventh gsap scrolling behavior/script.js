window.addEventListener('wheel', function (dets) {
    if (dets.deltaY > 0) {
        gsap.to('.marquee', {
            transform: 'translateX(-200%)',
            repeat: -1,
            duration: 4,
            ease:'none'
        })
        gsap.to(".marquee img", {
            rotate:180
        })
    }
    else {
        gsap.to('.marquee', {
            transform: 'translateX(0%)',
            repeat: -1,
            duration: 4,
            ease:'none'
        })
        gsap.to(".marquee img", {
            rotate:0
        })
        
    }
})