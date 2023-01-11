const search = document.querySelector('.search')
const intput = document.querySelector('.input')
const btn = document.querySelector('.btn')

btn.addEventListener('click',() => {
    search.classList.toggle('active')
    input.focus()
})