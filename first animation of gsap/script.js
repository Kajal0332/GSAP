gsap.to('#box1', {
    x: 500,
    duration: 2,
    delay: 1,
    rotate:360,
    easing: 'easeInOut',
    repeat: -1,
    yoyo:true
    
})
gsap.from('#box2', {
    rotate:360,
    x: 500,
    y:500,
    duration: 2,
    delay: 1,
    repeat: 4,
    yoyo:true
})
gsap.from('#box3', {
    rotate:360,
    x: 500,
    duration: 2,
    delay: 1,
    repeat: 4,
    yoyo: true,
    scale: 0.5,
    borderRadius: '50%'
    
})
gsap.to('.hello1 h1', {
    opacity:1,
    duration: 2,
    delay: 1,
    x: 30,
    stagger:1
})
gsap.from('.hello2 h1', {
    opacity:0,
    repeat: -1,
    yoyo:true,
    duration: 2,
    delay: 1,
    y: 30,
    stagger:1
})

