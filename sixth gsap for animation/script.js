function breaktext(){
    var  h1 = document.querySelector('h1');

var h1Text = h1.textContent

    let h1split = h1Text.split('')
    var halfValue = h1split.length/2

var clutter = '';

    h1split.forEach(function (e, idx) {
        if (idx < halfValue) {
            clutter += `<span class='a'>${e}</span>`
        } else {
            clutter += `<span class='b'>${e}</span>`
        }
})

h1.innerHTML = clutter;
}
breaktext()

gsap.from('h1 .a',{
    y: 100,
    duration: 1,
    delay:0.5,
    opacity: 0,
    stagger:0.2
})
gsap.from('h1 .b',{
    y: 100,
    duration: 1,
    delay:0.5,
    opacity: 0,
    stagger:-0.2
})