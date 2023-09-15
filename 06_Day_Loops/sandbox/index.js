for (let i = 0; i <= 10; i++) {
    console.log(i)
}

let i = 0
while (i <= 10) {
    console.log(i)
    i++
}

let j = 0
do {
    console.log(j)
    j++
} while (j <= 10)

for (let i = 10; i >= 0; i--) {
    console.log(i)
}

let k = 10
while (k >= 0) {
    console.log(k)
    k--
}

let l = 10
do {
    console.log(l)
    l--
} while (l >= 0)

let m = 7
for (let i = 0; i <= m; i++) {
    console.log(i)
}

let n = 7
let out = ''

for (let i = 0; i <= n; i++) {
    out += '#'
    console.log(out)
}

for (let i = 0; i <= 10; i++) {
    console.log(`${i} x ${i} = ${i * i}`)
}

for (let i = 0; i <= 10; i++) {
    if (i === 0) {
        console.log(`i\ti^2\ti^3`)
    }
    console.log(`${i}\t${i ** 2}\t${i ** 3}`)
}

for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}

for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        continue
    }
    console.log(i)
}

for (let i = 0; i <= 100; i++) {
    if ((i % 2 === 0 || i % 3 === 0 || i % 5 === 0 || i % 11 === 0) && !([2, 3, 5, 7, 11].includes(i))) {
        continue
    }
    console.log(i)
}

let sum = 0
for (let i = 0; i <= 100; i++) {
    sum += i
}

console.log(`The sum of all numbers from 0 to 100 is ${sum}.`)

let sum_even = 0
let sum_odd = 0
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        sum_even += i
    } else {
        sum_odd += i
    }

}

console.log(`The sum of all evens from 0 to 100 is ${sum_even}. And the sum of all odds from 0 to 100 is ${sum_odd}.`)

const arr = [sum_even, sum_odd]
console.log(arr)

const arr1 = []

for (let i = 0; i <= 5; i++) {
    arr1.push(Math.floor(Math.random() * 100))
}

console.log(arr1)

const arr2 = []
while (arr2.length < 5) {
    let rand = Math.floor(Math.random() * 100)

    if (!arr2.includes(rand)) {
        arr2.push(rand)
    }

}
console.log(arr2)

let randomId = ''

for (let i = 0; randomId.length < 6; i++) {
    let rand_char = Math.floor(Math.random() * 80 + 47)
    randomId += String.fromCharCode(rand_char)
    randomId = randomId.replace(/[^\w\d]/g, '')
}

console.log(randomId)

let randomId2 = ''
let rand_len = Math.floor(Math.random() * 100)
for (let i = 0; randomId2.length < rand_len; i++) {
    let rand_char = Math.floor(Math.random() * 80 + 47)
    randomId2 += String.fromCharCode(rand_char)
    randomId2 = randomId2.replace(/[^\w\d]/g, '')
}

console.log(randomId2)

let randomId3 = '#'
for (let i = 0; randomId3.length < 7; i++) {
    let rand_char = Math.floor(Math.random() * 80 + 47)
    if (!((rand_char >= 48 && rand_char <= 57) // digits
        || (rand_char >= 97 && rand_char <= 102))) { // a to f
        continue
    }
    randomId3 += String.fromCharCode(rand_char)
}

console.log(randomId3)

const rgb = []
for (let i = 0; rgb.length < 3; i++) {
    rgb.push(Math.floor(Math.random() * 256))
}

console.log(`rgb(${rgb[0]},${rgb[1]},${rgb[2]})`)

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

const mernStack = ['MongoDB', 'Express', 'React', 'Node']

const countries_4 = []

for (const country of countries) {
    countries_4.push(country.toUpperCase())
}

console.log(countries_4)

const countries_5 = []

for (const country of countries) {
    countries_5.push(country.length)
}

console.log(countries_5)

const countries_6 = []

for (const country of countries) {
    countries_6.push([country, country.substring(0, 3).toUpperCase(), country.length])
}

console.log(countries_6)

const countries_7 = []
for (const country of countries) {
    if (country.includes('land')) {
        countries_7.push(country)
    }
}

console.log(countries_7)

const countries_8 = []
for (const country of countries) {
    if (country.includes('ia')) {
        countries_8.push(country)
    }
}

countries_8 !== 0 ? console.log(countries_8) : console.log('These are countries ends without ia.')

let max_country = ''
for (const country of countries) {
    if (max_country.length < country.length) {
        max_country = country
    }
}

console.log(max_country)

const countries_10 = []
for (const country of countries) {
    if (country.length === 5) {
        countries_10.push(country)
    }
}

console.log(countries_10)

let max_tech = ''
for (const tech of webTechs) {
    if (max_tech.length < tech.length) {
        max_tech = tech
    }
}

console.log(max_tech)

const webTechs_12 = []

for (const tech of webTechs) {
    webTechs_12.push([tech, tech.length])
}

console.log(webTechs_12)

let string1 = ''
for (const mern of mernStack) {
    string1 += mern[0]
}

console.log(string1)

const arr_14 = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]

for (const item of arr_14) {
    console.log(item)
}

const fruits = ['banana', 'orange', 'mango', 'lemon']

const reverse_fruits = []
for (const fruit of fruits) {
    reverse_fruits.unshift(fruit)
}

console.log(reverse_fruits)

const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]

for (const stack of fullStack) {
    for (const tech of stack) {
        console.log(tech)
    }
}

const countries_copy = window.countries

const sortedCountries = countries_copy.sort()

console.log(sortedCountries)

const countries_e3_4 = []
for (const country of countries_copy) {
    if (country.includes('land')) {
        countries_e3_4.push(country)
    }
}

console.log(countries_e3_4)


let max_country_e3 = ''
for (const country of countries_copy) {
    if (max_country_e3.length < country.length) {
        max_country_e3 = country
    }
}

console.log(max_country_e3)

const countries_e3_6 = []
for (const country of countries_copy) {
    if (country.includes('land')) {
        countries_e3_6.push(country)
    }
}

console.log(countries_e3_6)

const countries_e3_7 = []
for (const country of countries_copy) {
    if (country.length === 4) {
        countries_e3_7.push(country)
    }
}

console.log(countries_e3_7)

const countries_e3_8 = []
for (const country of countries_copy) {
    if (country.split(' ').length > 1) {
        countries_e3_8.push(country)
    }
}

console.log(countries_e3_8)

const countries_e3_9 = []
for (const country of countries_copy.reverse()) {
    countries_e3_9.push(country.toUpperCase())
}

console.log(countries_e3_9)




