const input = document.querySelector("input")
const button = document.querySelector("button")
const prompt = document.querySelector(".error-prompt")
const container = document.querySelector(".container")

function isPrime(num) {
    for (let i = 2; i < num; i++)
        if (num % i === 0) return false
    return num > 1;
}

button.addEventListener("click", function () {
    let inputVal = input.value
    container.innerHTML = ''
    input.value = ''
    prompt.textContent = ''

    if (inputVal === '') {
        prompt.textContent = "Enter a number"
        prompt.style.color = "red"
        return
    }

    for (let i = 0; i <= inputVal; i++) {
        let number = document.createElement("div")
        number.textContent = i
        number.style.width = "70px"
        number.style.height = "70px"
        number.style.fontSize = "27px"
        number.style.margin = "5px"
        if (i % 2 === 0) {
            number.style.backgroundColor = "green"
        } else {
            number.style.backgroundColor = "yellow"
        }
    
        if (isPrime(i)) {
            number.style.backgroundColor = "red"
        }
        container.appendChild(number)
    }

})