let firstName = 'lyndon'
let lastName = 'tuala'
let country = 'ph'
let city = 'las pinas'
let age = 25
let isMarried = false

console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof country)
console.log(typeof city)
console.log(typeof age)
console.log(typeof isMarried)

console.log(typeof '10' === typeof 10)
console.log(typeof parseInt('9.8') === typeof 10)

console.log(1 == true)
console.log('a' == true) //weird not truthy
console.log(true == true)

console.log(0 == false)
console.log('' == false)
console.log(false == false)

console.log(4 > 3)
console.log(4 >= 3)
console.log(4 < 3)
console.log(4 <= 3)
console.log(4 == 4)
console.log(4 === 4)
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 != '4')
console.log(4 == '4')
console.log(4 === '4')
//Find the length of python and jargon and make a falsy comparison statement.
console.log('python'.length !== 'jargon'.length)

console.log(4 > 3 && 10 < 12)
console.log(4 > 3 && 10 > 12)
console.log(4 > 3 || 10 < 12)
console.log(4 > 3 || 10 > 12)
console.log(!(4 > 3))
console.log(!(4 < 3))
console.log(!(false))
console.log(!(4 > 3 && 10 < 12))
console.log(!(4 > 3 && 10 > 12))
console.log(!(4 === '4'))
//There is no 'on' in both dragon and python
console.log(!'dragon'.includes('on') && !'python'.includes('on'))

let today = new Date()
console.log(today.getFullYear())
console.log(today.getMonth())
console.log(today.getDate())
console.log(today.getDay()) // 0 Sunday
console.log(today.getHours())
console.log(today.getMinutes())
console.log(today.getTime())

// let base = prompt('Enter base:', 'number goes here')
// let height = prompt('Enter height:', 'number goes here')
// console.log(`Area: ${0.5 * parseInt(base) * parseInt(height)}`)

// let sideA = prompt('Enter side a:', 'number goes here')
// let sideB = prompt('Enter side b:', 'number goes here')
// let sideC = prompt('Enter side c:', 'number goes here')
// console.log(`The perimeter of the triangle is ${parseInt(sideA) + parseInt(sideB) + parseInt(sideC)}`)

// let length = prompt('Enter length:', 'number goes here')
// let width = prompt('Enter width:', 'number goes here')
// console.log(`The area is ${parseInt(length) * parseInt(width)} and the perimeter is ${2 * (parseInt(length) + parseInt(width))}`)

// const PI = 3.1415
// let radius = prompt('Enter radius:', 'number goes here')
// console.log(`The area of the circle is ${PI * parseInt(radius)**2} and the circumference is ${2 * PI * parseInt(radius)}`)

let x = 0
let y = 0
let slope1 = 2*x - 2
console.log(`Slope: ${slope1}, y-intercept: ${2*x - 2}, x-intercept: ${(y + 2) / 2}`)

let x1 = 2
let x2 = 6
let y1 = 2
let y2 = 10
let slope2 = (y2-y1)/(x2-x1)
console.log(`Slope: ${slope2}`)
console.log(slope1 === slope2)

let xVar = -3
console.log(`x = ${xVar}, y = ${xVar**2 + 6*xVar+ 9}`)

// let hours = prompt('Enter hours:', 'number goes here')
// let rate = prompt('Enter rate per hour:', 'number goes here')
// console.log(`Your weekly earning is ${parseInt(hours) * parseInt(rate)}`)

// let nameLength = prompt('Enter name length:', 'number goes here')
// console.log(`Your name is ${parseInt(nameLength) > 7 ? 'long.':'short.'}`)

let fN = 'Lyndon'
let lN = 'Tuala'
console.log(`Your first name, ${fN} is ${fN.length > lN.length ? 'greater':'less'} than your family name, ${lN}`)

let myAge = 250
let yourAge = 25
console.log(`I am ${myAge - yourAge} years older than you.`)

// let birthYear = prompt('Enter birth year:', 'number goes here')
// let now = new Date()
// let ageNow = now.getFullYear() - parseInt(birthYear)
// let legalAge = 18
// console.log(`Your are ${ageNow}. ${ageNow >= legalAge ? 'You are old enough to drive.':`You will be allowed to drive after ${legalAge - ageNow + ' years.'}`}`)

// let years = prompt('Enter number of years you live:', 'number goes here')
// const yearToSec = 31536000
// console.log(`Your lived ${yearToSec * parseInt(years)} seconds.`)

let dateNow = new Date()
let year = dateNow.getFullYear() // return year
let month = dateNow.getMonth() + 1 // return month(0 - 11)
let date = dateNow.getDate() // return date (1 - 31)
let hours = dateNow.getHours() // return number (0 - 23)
let minutes = dateNow.getMinutes() // return number (0 -59)

console.log(`${year}-${month}-${date} ${hours}:${minutes}`)
console.log(`${date}-${month}-${year} ${hours}:${minutes}`)
console.log(`${date}/${month}/${year} ${hours}:${minutes}`)

console.log(`${year}-${('00' + month).substr(-2,2)}-${('00' + date).substr(-2,2)} ${('00' + hours).substr(-2,2)}:${('00' + minutes).substr(-2,2)}`)