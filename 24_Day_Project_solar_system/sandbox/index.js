const input = document.querySelector("input")
const select = document.querySelector("select")
const button = document.querySelector("button")
const containerImg = document.querySelector(".flex-item-image")
const containerDesc = document.querySelector(".flex-item-description")

button.addEventListener("click",function(){
    let selectedSpace = space[select.value]
    let imgSrc = selectedSpace.image
    let weight = Number(input.value) * selectedSpace.gravity
    let image = document.createElement("img")
    image.src = `./images/${imgSrc}`
    let p = document.createElement("p")
    p.innerHTML = `The weight of object on <span style="font-weight: bold;">${select.value.toUpperCase()}</span> is <span>${weight}N</span>`
    p.style.color = "white"
    p.style.fontSize = "50px"

    containerImg.innerHTML = ''
    containerDesc.innerHTML = ''
    containerImg.appendChild(image)
    containerDesc.appendChild(p)

})