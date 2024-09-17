gsap.from('.box1 #box', {
    duration: 2,
    delay: 1,
    scale: 0,
    rotate: 360,
    yoyo: true,
    
})

gsap.from('.box2 #box', {
    duration: 2,
    delay: 1,
    scale: 0,
    rotate: 360,
    yoyo: true,
    scrollTrigger: {
        trigger: '.box2 #box',
        start: 'top 50%',
        end:" top 10%",
        markers: true,
        scroller: 'body',
        scrub: true,
        pin:true
    }
})
gsap.to('.box3 #box', {
    duration: 2,
    delay: 1,
    scale: 0,
    rotate: 360,
    yoyo: true,
    scrollTrigger: {
        trigger: '.box3 #box',
        start: 'top 50%',
        end:"end 50%",
        markers: true,
        scroller: 'body',
        scrub:2
    }
})


// for scrolling h1 behavior 
gsap.to('.page2 h1', {
    transform: "translateX(-180%)",
    delay:1,
    duration:3,
    scrollTrigger: {
        trigger: '.page2',
        start: "top 0%",
        end:'top -90%',
        markers: true,
        scroller: 'body',
        scrub: 2,
        pin:true
    }
})