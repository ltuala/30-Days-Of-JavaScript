
const key = document.querySelector('h1')
const keyCode = document.querySelector('div')

document.addEventListener('keydown', (e) => {

    key.innerHTML = `You pressed <span style="color: green;">${e.key}</span>`
    keyCode.innerHTML= `<p><span style="color: green;">${e.keyCode}</span></p>`
})