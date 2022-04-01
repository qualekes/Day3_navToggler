const open = document.getElementById('open')
const close = document.getElementById('close')

const container = document.getElementsByClassName('container')[0]

// const container = document.querySelector('.container')
// open.addEventListener('click', () => container.classList.add('show-nav'))

// close.addEventListener('click', () => container.classList.remove('show-nav'))

// const open = document.getElementById('open')
// const close = document.getElementById('close')


open.addEventListener('click', () => container.classList.add('show-nav'))

close.addEventListener('click', () => container.classList.remove('show-nav'))
