const emptyArray = []
console.log(emptyArray)

const sevenArray = Array(7).fill(7)
console.log(sevenArray)

console.log(sevenArray.length)

console.log(sevenArray[0])
console.log(sevenArray[Math.floor(sevenArray.length / 2)])
console.log(sevenArray[sevenArray.length - 1])

const mixedDataTypes = [1, "one", 1.0, true, null, []]
console.log(mixedDataTypes)
console.log(mixedDataTypes.length)

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
console.log(itCompanies)

console.log(itCompanies.length)

console.log(itCompanies[0])
console.log(itCompanies[Math.floor(itCompanies.length / 2)])
console.log(itCompanies[itCompanies.length - 1])

console.log(itCompanies.toString())

console.log(itCompanies.toString().toUpperCase())

console.log(`${itCompanies.slice(0, itCompanies.length - 1).join(', ')} and ${itCompanies[itCompanies.length - 1]} are big IT companies.`)

let company = 'Facebook'
itCompanies.indexOf(company) === -1 ? console.log(`Company ${company} is not found`) : console.log(itCompanies[itCompanies.indexOf(company)])

const itCompaniesFiltered = []
switch (true) {
    case itCompanies.includes('Facebook'):
        let idx = itCompanies.indexOf('Facebook')
        let name = itCompanies[idx].toLowerCase()
        if (name.indexOf('o') !== name.lastIndexOf('o')) {
            itCompaniesFiltered.push('Facebook')
        }
    case itCompanies.includes('Google'):
        idx = itCompanies.indexOf('Google')
        name = itCompanies[idx].toLowerCase()
        if (name.indexOf('o') !== name.lastIndexOf('o')) {
            itCompaniesFiltered.push('Google')
        }
    case itCompanies.includes('Microsoft'):
        idx = itCompanies.indexOf('Microsoft')
        name = itCompanies[idx].toLowerCase()
        if (name.indexOf('o') !== name.lastIndexOf('o')) {
            itCompaniesFiltered.push('Microsoft')
        }
    case itCompanies.includes('Apple'):
        idx = itCompanies.indexOf('Apple')
        name = itCompanies[idx].toLowerCase()
        if (name.indexOf('o') !== name.lastIndexOf('o')) {
            itCompaniesFiltered.push('Apple')
        }
    case itCompanies.includes('IBM'):
        idx = itCompanies.indexOf('IBM')
        name = itCompanies[idx].toLowerCase()
        if (name.indexOf('o') !== name.lastIndexOf('o')) {
            itCompaniesFiltered.push('IBM')
        }
    case itCompanies.includes('Oracle'):
        idx = itCompanies.indexOf('Oracle')
        name = itCompanies[idx].toLowerCase()
        if (name.indexOf('o') !== name.lastIndexOf('o')) {
            itCompaniesFiltered.push('Oracle')
        }
    case itCompanies.includes('Amazon'):
        idx = itCompanies.indexOf('Amazon')
        name = itCompanies[idx].toLowerCase()
        if (name.indexOf('o') !== name.lastIndexOf('o')) {
            itCompaniesFiltered.push('Amazon')
        }
    default:

}
console.log(itCompaniesFiltered)

console.log(itCompanies.sort())

console.log(itCompanies.reverse())

console.log(itCompanies.slice(0, 3))

console.log(itCompanies.slice(itCompanies.length - 3))

itCompanies.length % 2 !== 0 ? console.log(itCompanies.slice(Math.floor((itCompanies.length - 1) / 2), Math.floor((itCompanies.length - 1) / 2) + 1)) : console.log(itCompanies.slice(Math.floor((itCompanies.length - 1) / 2), Math.floor((itCompanies.length - 1) / 2) + 2))

itCompanies.shift()
console.log(itCompanies)

if (itCompanies.length % 2 !== 0) {
    itCompanies.splice(Math.floor((itCompanies.length - 1) / 2), 1)
} else {
    itCompanies.splice(Math.floor((itCompanies.length - 1) / 2), 2)
}
console.log(itCompanies)

itCompanies.pop()
console.log(itCompanies)

itCompanies.splice(0)
console.log(itCompanies)

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let textFiltered = text.replace(/[^\w\s]/g, '')
let words = textFiltered.split(' ')
console.log(words)
console.log(words.length)

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
if (!shoppingCart.includes('Meat')) {
    shoppingCart.unshift('Meat')
}
console.log(shoppingCart)

if (!shoppingCart.includes('Sugar')) {
    shoppingCart.push('Sugar')
}
console.log(shoppingCart)

let isAllergicToHoney = true
if (isAllergicToHoney && shoppingCart.includes('Honey')) {
    shoppingCart.splice(shoppingCart.indexOf('Honey'), shoppingCart.indexOf('Honey') + 1)
}
console.log(shoppingCart)

if (shoppingCart.includes('Tea')) {
    shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea'
}
console.log(shoppingCart)

const countries = window.countries
if (countries.includes('Ethiopia')) {
    console.log(countries[countries.indexOf('Ethiopia')].toUpperCase())
} else {
    countries.push('Ethiopia')
}
console.log(countries)

const webTechs = window.webTechs
if (webTechs.includes('Sass')) {
    console.log(`${webTechs[webTechs.indexOf('Sass')]} isa CSS preprocess.`)
} else {
    webTechs.push('Sass')
    console.log(webTechs)
}

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']

const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort()
console.log(ages)
console.log(`Ages Min: ${ages[0]}, Max: ${ages[ages.length - 1]}`)

ages.length % 2 !== 0 ?
    console.log(`Ages Median: ${ages.slice(Math.floor((ages.length - 1) / 2), Math.floor((ages.length - 1) / 2) + 1)}`)
    : console.log(`Ages Median: ${ages.slice(Math.floor((ages.length - 1) / 2), Math.floor((ages.length - 1) / 2) + 2)}`)

console.log(`Ages Average: ${eval(ages.join('+')) / ages.length}`)

console.log(`Ages Range: ${Math.abs(ages[0] - ages[ages.length - 1])}`)

console.log(countries.slice(0, 10))

countries.length % 2 !== 0 ?
    console.log(`Middle country: ${countries.slice(Math.floor((countries.length - 1) / 2), Math.floor((countries.length - 1) / 2) + 1)}`)
    : console.log(`Middle countries: ${countries.slice(Math.floor((countries.length - 1) / 2), Math.floor((countries.length - 1) / 2) + 2)}`)

console.log(countries)
if (countries.length % 2 === 0) {
    console.log(`Countries first half: ${countries.slice(0, Math.floor((countries.length - 1) / 2))}`)
    console.log(`Countries second half: ${countries.slice(Math.floor((countries.length - 1) / 2))}`)
} else {
    console.log(`Countries first half: ${countries.slice(0, Math.floor((countries.length - 1) / 2 + 1))}`)
    console.log(`Countries second half: ${countries.slice(Math.floor((countries.length - 1) / 2 + 1))}`)
}