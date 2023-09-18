// function fullName() {
//     console.log("Lyndon Tuala")
// }

// fullName()

function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`
}

console.log(fullName('Lyndon', 'Tuala'))

function addNumbers(num1, num2) {
    return num1 + num2
}

console.log(`${addNumbers(1, 2)}`)

function areaOfRectangle(length, width) {
    return length * width
}

console.log(`${areaOfRectangle(1, 2)}`)

function perimeterOfRectangle(length, width) {
    return 2 * (length + width)
}

console.log(`${perimeterOfRectangle(1, 2)}`)

function volumeOfRectPrism(length, width, height) {
    return length * width * height
}

console.log(`${volumeOfRectPrism(1, 2, 3)}`)

function areaOfCircle(radius, PI = 3.1415) {
    return PI * radius * radius
}

console.log(`${areaOfCircle(2)}`)

function circumOfCircle(radius, PI = 3.1415) {
    return 2 * PI * radius
}

console.log(`${circumOfCircle(2)}`)

function density(mass, volume) {
    return mass / volume
}

console.log(`${density(9, 1.2)}`)

function speed(distance, time) {
    return distance / time
}

console.log(`${speed(9, 2)}`)

function weight(mass, g = 9.81) {
    return mass * g
}

console.log(`${weight(10)}`)

function convertCelsiusToFahrenheit(oC) {
    return (oC * 9 / 5) + 32
}

console.log(`${convertCelsiusToFahrenheit(10)}`)

function bmi(weight, height) {
    return weight / (height ** 2)
}
let person_bmi = bmi(60, 1.58)
let message = ''
switch (true) {
    case person_bmi < 18.5:
        message = `BMI: ${person_bmi}, Underweight`
        break
    case person_bmi < 24.9:
        message = `BMI: ${person_bmi}, Normal`
        break
    case (person_bmi >= 25 && person_bmi <= 29.9):
        message = `BMI: ${person_bmi}, Overweight`
        break
    case person_bmi >= 30:
        message = `BMI: ${person_bmi}, Obese`
        break
    default:
        message = 'Check your inputs,not valid.'
}
console.log(`${message}`)

function checkSeason(month) {
    let season = ''
    switch (month) {
        case "September":
        case "October":
        case "November":
            season = 'Autumn'
            break
        case "December":
        case "January":
        case "February":
            season = 'Winter'
            break
        case "March":
        case "April":
        case "May":
            season = 'Spring.'
            break
        case "June":
        case "July":
        case "August":
            season = 'Summer.'
            break
        default:
            season = 'Not a valid month.'
    }
    return season
}

let month = 'September'
console.log(`${month} is ${checkSeason(month)}.`)

function findMax(num1, num2, num3) {
    return Math.max(num1, num2, num3)
}

console.log(`${findMax(0, 10, 5)}`)
console.log(`${findMax(0, -10, -2)}`)

function solveLinEquation(a, b, c, x, y) {
    return (a * x) + (b * y) + c
}

console.log(`${solveLinEquation(1, 1, 1, 1, 1)}`)


function solveQuadEquation(a, b, c) {
    if (solveQuadEquation.arguments.length !== 3) {
        return [0]
    }
    let x1 = (-b + Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a)
    let x2 = (-b - Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a)

    return new Set([x1, x2])
}

console.log(solveQuadEquation()) // {0}
console.log(solveQuadEquation(1, 4, 4)) // {-2}
console.log(solveQuadEquation(1, -1, -2)) // {2, -1}
console.log(solveQuadEquation(1, 7, 12)) // {-3, -4}
console.log(solveQuadEquation(1, 0, -4)) //{2, -2}
console.log(solveQuadEquation(1, -1, 0)) //{1, 0}

function printArray(arr) {
    for (const a of arr) {
        console.log(a)
    }
}

printArray(['a', 'b', 'c'])

function showDateTime() {
    let dateNow = new Date()
    let year = dateNow.getFullYear() // return year
    let month = dateNow.getMonth() + 1 // return month(0 - 11)
    let date = dateNow.getDate() // return date (1 - 31)
    let hours = dateNow.getHours() // return number (0 - 23)
    let minutes = dateNow.getMinutes() // return number (0 -59)

    console.log(`${('00' + month).substr(-2, 2)}/${('00' + date).substr(-2, 2)}/${year} ${hours}:${minutes}`)
}

showDateTime()

function swapValues(x_in, y_in) {
    const xy = [x_in, y_in]
    xy.reverse()
    return xy
}

result = swapValues(3, 4)

console.log(`swapValues(3, 4): x=${result[0]}, y=${result[1]}.`)

function reverseArray(arr) {
    out = []
    for (const a of arr) {
        out.unshift(a)
    }

    return out
}

console.log(reverseArray([1, 2, 3, 4, 5]))
//[5, 4, 3, 2, 1]
console.log(reverseArray(['A', 'B', 'C']))
//['C', 'B', 'A']

function capitalizeArray(arr) {
    out = []
    for (const a of arr) {
        out.push(a.charAt(0).toUpperCase() + a.substr(1))
    }

    return out
}

console.log(capitalizeArray(['abc', 'bbc', 'cbc']))

function addItem(arr, item) {
    arr.push(item)

    return arr
}

console.log(addItem(['a', 'b', 'c'], 'd'))

function removeItem(arr, index) {
    arr.splice(index, 1)

    return arr
}

console.log(removeItem(['a', 'b', 'c'], 1))

function sumOfNumbers(number) {
    let sum = 0
    for (let i = 0; i <= number; i++) {
        sum += i
    }

    return sum
}

console.log(sumOfNumbers(100))

function sumOfOdds(number) {
    let sum = 0
    for (let i = 0; i <= number; i++) {
        if (i % 2 !== 0) {
            sum += i
        }
    }

    return sum
}

console.log(sumOfOdds(100))

function sumOfEvens(number) {
    let sum = 0
    for (let i = 0; i <= number; i++) {
        if (i % 2 === 0) {
            sum += i
        }
    }

    return sum
}

console.log(sumOfEvens(100))

function evensAndOdds(number) {
    let no_even = 0
    let no_odd = 0

    for (let i = 0; i <= number; i++) {
        if (i % 2 === 0) {
            no_even += 1
        } else {
            no_odd += 1
        }
    }

    return console.log(`The number of odds are ${no_odd}.\nThe number of evens are ${no_even}.`)
}

evensAndOdds(100)

function sum() {
    let sum = 0
    for (const a of arguments) {
        sum += a
    }

    return sum
}

console.log(sum(1, 2, 3))
console.log(sum(1, 2, 3, 4))

function randomUserIp() {
    let ipArr = []
    for (let i = 0; i < 4; i++) {
        ipArr.push(Math.floor(Math.random() * 256))
    }

    return ipArr.join('.')
}

console.log(randomUserIp())

function randomMacAddress() {
    let ipArr = []
    for (let i = 0; i < 6; i++) {
        ipArr.push(Math.floor(Math.random() * 256).toString(16).padStart(2, '0'))
    }

    return ipArr.join('-')
}

console.log(randomMacAddress())

function randomHexaNumberGenerator() {
    let randomId = '#'
    for (let i = 0; randomId.length < 7; i++) {
        let rand_char = Math.floor(Math.random() * 80 + 47)
        if (!((rand_char >= 48 && rand_char <= 57) // digits
            || (rand_char >= 97 && rand_char <= 102))) { // a to f
            continue
        }
        randomId += String.fromCharCode(rand_char)
    }

    return randomId
}

console.log(randomHexaNumberGenerator())

function userIdGenerator() {
    let randomId = ''
    for (let i = 0; randomId.length < 7; i++) {
        let rand_char = Math.floor(Math.random() * 80 + 47)
        randomId += String.fromCharCode(rand_char)
        randomId = randomId.replace(/[^\w\d]/g, '')
    }

    return randomId
}

console.log(userIdGenerator())

function userIdGeneratedByUser(no_char, no_id) {
    function userIdGenerator(no_char) {
        let randomId = ''
        for (let i = 0; randomId.length < no_char; i++) {
            let rand_char = Math.floor(Math.random() * 80 + 47)
            randomId += String.fromCharCode(rand_char)
            randomId = randomId.replace(/[^\w\d]/g, '')
        }

        return randomId
    }
    const ids = []
    for (let i = 0; i < no_id; i++) {
        ids.push(userIdGenerator(no_char))
    }

    return ids.join('\n')

}

// let no_char = prompt('Enter number of characters:', 'number goes here')
// let no_id = prompt('Enter number of ids:', 'number goes here')

// console.log(userIdGeneratedByUser(no_char, no_id))

function rgbColorGenerator() {
    const rgb = []
    for (let i = 0; rgb.length < 3; i++) {
        rgb.push(Math.floor(Math.random() * 256))
    }

    return `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`
}

console.log(rgbColorGenerator())

function arrayOfHexaColors(no_color) {
    const arr = []
    for (let i = 0; i < no_color; i++) {
        arr.push(randomHexaNumberGenerator())
    }

    return arr
}

console.log(arrayOfHexaColors(3))

function arrayOfRgbColors(no_color) {
    const arr = []
    for (let i = 0; i < no_color; i++) {
        arr.push(rgbColorGenerator())
    }

    return arr
}

console.log(arrayOfRgbColors(3))

function convertHexaToRgb(hex_color) {
    let red = parseInt(hex_color.slice(1, 3), 16)
    let green = parseInt(hex_color.slice(3, 5), 16)
    let blue = parseInt(hex_color.slice(5, 7), 16)

    let rgb_color = `rgb(${red},${green},${blue})`

    return rgb_color
}

console.log(convertHexaToRgb('#f918f4'))

function convertRgbToHexa(rgb_color) {
    let rgb_items = rgb_color.slice(4, -1).split(',')

    let red = parseInt(rgb_items[0]).toString(16).padStart(2, '0')
    let green = parseInt(rgb_items[1]).toString(16).padStart(2, '0')
    let blue = parseInt(rgb_items[2]).toString(16).padStart(2, '0')

    let hex_color = `#${red}${green}${blue}`

    return hex_color
}

console.log(convertRgbToHexa('rgb(249,24,244)'))

function generateColors(color_format, no_color) {
    let out
    switch (color_format) {
        case 'hexa':
            out = arrayOfHexaColors(no_color)
            break
        case 'rgb':
            out = arrayOfRgbColors(no_color)
            break
        default:
            out = 'Not a valid color format.'
    }

    return out
}

console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
console.log(generateColors('hexa', 1)) // '#b334ef'
console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'

function shuffleArray(arr) {
    let out = []
    for (const a of arr) {
        let rand = Math.floor(Math.random() * 2)
        if (rand === 1) {
            out.push(a)
        } else {
            out.unshift(a)
        }
    }

    return out
}

console.log(shuffleArray([1, 2, 3]))

function factorial(number) {
    if (number < 0) {
        return 'Not a valid number.'
    }
    if (number === 0 || number === 1) {
        return 1
    }

    let out = 1
    for (let i = 1; i <= number; i++) {
        out *= i;
    }

    return out
}

console.log(factorial(10))

function isEmpty() {
    return arguments.length === 0
}

console.log(isEmpty())

function sumOfArrayItems(arr) {
    for (const a of arr) {
        let data_type = typeof a
        if (data_type !== 'number') {
            return 'Array contains a non integer value.'
        }
    }

    let sum = 0
    for (const a of arr) {
        sum += a
    }

    return sum
}

console.log(sumOfArrayItems([1, 2, 3]))

function average(arr) {
    for (const a of arr) {
        let data_type = typeof a
        if (data_type !== 'number') {
            return 'Array contains a non integer value.'
        }
    }

    let sum = 0
    for (const a of arr) {
        sum += a
    }

    return sum / arr.length
}

console.log(average([1, 2, 3]))

function modifyArray(arr) {
    if (arr.length < 5 ) {
        return 'item not found'
    }

    arr[4] = arr[4].toUpperCase()
    return arr
}

console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']))

console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']))

console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']))

function isPrime(i) {
    return !((i % 2 === 0 || i % 3 === 0 || i % 5 === 0 || i % 11 === 0) && !([2, 3, 5, 7, 11].includes(i)))
}

console.log(isPrime(3))
console.log(isPrime(10))

function isUnique(arr) {
    let set = new Set(arr)
    return arr.length === set.size
}

console.log(isUnique([1,2,3,4]))

console.log(isUnique([1,2,4,4]))

function isSameDataType(arr) {
    let first_datatype = typeof arr[0]
    for (const a of arr) {
        if (typeof a !== first_datatype) {
            return false
        }
    }

    return true
}

console.log(isSameDataType([1,2,3,4]))
console.log(isSameDataType([1,2,3,'4']))

function isValidVariable(variable_name) {
    return null !== variable_name.match(/^[a-zA-Z_$][a-zA-Z0-9_$]*$/)
}

console.log(isValidVariable('test'))
console.log(isValidVariable('testñ'))

function sevenRandomNumbers() {
    let random = []
    for (let i = 0; random.length < 7; i++) {
        let rand_no = Math.floor(Math.random() * 10)

        if (random.includes(rand_no)) {
            continue
        }
        random.push(rand_no)
    }

    return random
}

console.log(sevenRandomNumbers())

function reverseCountries(arr) {
    arr.reverse()

    return arr
}

console.log(reverseCountries(countries))

