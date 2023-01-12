const boxs =  document.querySelectorAll('.box');

window.addEventListener('scroll',active)

function active() {
    boxs.forEach(box => {
        box.classList.toggle('active');
    })
}
