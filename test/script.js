const button = document.getElementById('button')
const container = document.querySelector('.container')

button.addEventListener('click',() => {
    container.classList.add('show-nav')
})