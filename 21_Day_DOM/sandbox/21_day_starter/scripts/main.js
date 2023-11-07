const h1 = document.querySelector('h1');
h1.innerHTML = `Asabeneh Yetayeh challenges in <span id="year">2020<span>`
let year = document.querySelector("#year");
let color;
const changeColor = () => {
    let random1 = Math.floor(Math.random() * 255)
    let random2 = Math.floor(Math.random() * 255)
    let random3 = Math.floor(Math.random() * 255)
    color = `rgb(${random1},${random2},${random3})`
    year.style.color = color;
}
setInterval(changeColor, 1000)