let div = document.querySelector("div")

function isPrime(num) {
    for (let i = 2; i < num; i++)
        if (num % i === 0) return false
    return num > 1;
}

for (let i = 0; i <= 100; i++) {
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
    div.appendChild(number)
}