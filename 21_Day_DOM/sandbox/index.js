let firstP = document.querySelector('p')

console.log(firstP)

let p1 = document.querySelector('#p1')
console.log(p1)

let p2 = document.querySelector('#p2')
console.log(p2)

let p3 = document.querySelector('#p3')
console.log(p3)

let p4 = document.querySelector('#p4')
console.log(p4)

const allP = document.querySelectorAll('p')

console.log(allP)

allP.forEach(p => console.log(p.textContent))

allP.forEach((p, i) => {
    if (i === 3) {
        // p.setAttribute('textContent', 'Fourth Paragraph')
        p.textContent = 'Fourth Paragraph' 
    }
})

allP.forEach(p => console.log(p.textContent))

allP.forEach((p, i) => {
    p.id = `p${i}-id`
    p.className = `p${i}-class`
})

allP.forEach(p => console.log(`${p.id}\n${p.className}`))

allP.forEach((p, i) => {
    p.style.color = 'green'
    p.style.backgroundColor = 'red'
})

allP.forEach((p, i) => {
    if (i%2 === 0) {
        p.style.color = 'green'
    } else {
        p.style.color = 'red'
    }
    p.style.backgroundColor = 'white'
})

allP.forEach((p, i) => {
    p.id = `p${i}-id`
    p.className = `p${i}-class`
    p.textContent = `p${i}-text`
})

