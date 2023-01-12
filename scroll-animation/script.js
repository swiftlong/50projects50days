const boxs =  document.querySelectorAll('.box');


window.addEventListener('scroll',active)
active()
function active() {

    const triggerBottom = window.innerHeight / 5 * 4
    boxs.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if ( boxTop < triggerBottom ) {
            box.classList.add('active')
        }else{
            box.classList.remove('active')
        }
    })
}
