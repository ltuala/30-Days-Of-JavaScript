// foreEach: iterate through elements
// map: iterate through element but return a new array
// filter: array filtering then return the array result
// reduce: iterate through elements but there is an accumulator then return the accumulated result as a single value not an array

const callback = (a) => {
    return a * a
}

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]

countries.forEach(country => console.log(country))

names.forEach(name => console.log(name))

numbers.forEach(number => console.log(number))

const countriesToUpperCase = countries.map((country) => country.toUpperCase())
console.log(countriesToUpperCase)

const countriesLength = countries.map((country) => country.length)
console.log(countriesLength)

const numbersSquared = numbers.map((number) => number ** 2)
console.log(numbersSquared)

const namesToUpperCase = names.map((name) => name.toUpperCase())
console.log(namesToUpperCase)

const productsPrices = products.map((product) => product.price)
console.log(productsPrices)

const countriesWithLand = countries.filter((country) => country.toLowerCase().includes('land'))
console.log(countriesWithLand)

const countriesWithChar6 = countries.filter((country) => country.length === 6)
console.log(countriesWithChar6)

const countriesWithMoreChar6 = countries.filter((country) => country.length >= 6)
console.log(countriesWithMoreChar6)

const countriesStartsWithE = countries.filter((country) => country.startsWith('E'))
console.log(countriesStartsWithE)

const productsWithPrices = products.filter((product) => typeof product.price === 'number')
console.log(productsWithPrices)

function getStringList(arr) {
    return arr.filter((a) => typeof a === 'string')
}

console.log(getStringList(names))

console.log(numbers.reduce((acc, cur) => acc + cur, 0))

let idx = 0
const message = countries.reduce((acc, cur) => {
    let l = countries.length - 1
    if (idx !== l) {
        idx++
        return `${acc}${cur}, `
    }
    return `${acc}and ${cur} are north European countries`
}, '')

console.log(message)

//  every (&&) check if the input predicate is the same for all elements while some (||) just check if the input predicate exist

console.log(names.some((name) => name.length >= 7))

console.log(countries.every((country) => country.toLowerCase().includes('land')))

console.log(countries.find((country) => country.length === 6))

console.log(countries.findIndex((country) => country.length === 6))

console.log(countries.findIndex((country) => country === 'Norway'))

console.log(countries.findIndex((country) => country === 'Russia'))

console.log(products.map((product) => product.price)
    .filter((price) => typeof price === 'number')
    .reduce((totalprice, price) => totalprice + price, 0))

console.log(products.reduce((totalprice, product) => typeof product.price === 'number' ? totalprice + product.price : totalprice + 0, 0))

function categorizeCountries(arr, pattern) {
    return arr.filter((a) => a.name.includes(pattern))
}

console.log(categorizeCountries(countries_data, 'is'))

function categorizeCountries(arr, pattern) {
    return arr.filter((a) => a.name.includes(pattern))
}

console.log(categorizeCountries(countries_data, 'is'))

function letterStarts(arr) {
    const letters = {}

    for (const a of arr) {
        const firstLetter = a.name.charAt(0).toUpperCase()

        if (letters[firstLetter]) {
            letters[firstLetter]++
        } else {
            letters[firstLetter] = 1
        }
    }

    const result = []
    for (const letter in letters) {
        result.push({ letter: letter, count: letters[letter] })
    }
    return result
}

console.log(letterStarts(countries_data))

function getFirstTenCountries(arr) {
    return arr.filter((a, idx) => idx < 10)
}

console.log(getFirstTenCountries(countries_data))

function getLastTenCountries(arr) {
    return arr.filter((a, idx) => idx >= arr.length - 10)
}

console.log(getLastTenCountries(countries_data))

const countries_data_c1 = countries_data.map((a) => a)
console.log(countries_data_c1.sort((a, b) => {
    if (a.name < b.name) return -1
    if (a.name > b.name) return 1
    return 0
}))

const countries_data_c2 = countries_data.map((a) => a)
console.log(countries_data_c2.sort((a, b) => {
    if (a.capital < b.capital) return -1
    if (a.capital > b.capital) return 1
    return 0
}))

const countries_data_c3 = countries_data.map((a) => a)
console.log(countries_data_c3.sort((a, b) => {
    if (a.population < b.population) return -1
    if (a.population > b.population) return 1
    return 0
}))

function mostSpokenLanguages(arr, limit) {
    const languages = {}

    for (const country of arr) {
        for (const language of country.languages) {
            if (languages[language]) {
                languages[language]++
            } else {
                languages[language] = 1
            }
        }
    }

    const languagesArray = Object.keys(languages).map(language => ({
        country: language,
        count: languages[language]
    }))

    languagesArray.sort((a, b) => b.count - a.count)

    return languagesArray.filter((a, idx) => idx < limit)
}

console.log(mostSpokenLanguages(countries_data, 10))
console.log(mostSpokenLanguages(countries_data, 3))

function mostPopulatedCountries(arr, limit) {
    const arrCopy = arr.map((a) => a)
    const sortedArr = arrCopy.sort((a, b) => b.population - a.population)

    const topCountries = sortedArr.filter((a, idx) => idx < limit)

    return topCountries.map(country => ({
        country: country.name,
        population: country.population
    }))
}

console.log(mostPopulatedCountries(countries_data, 10))
console.log(mostPopulatedCountries(countries_data, 3))

const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

const statistics = {
    count: function() {
        return ages.length
    },
    sum: function() {
        return ages.reduce((acc, cur) => acc + cur, 0)
    },
    min: function() {
        return Math.min(...ages)
    },
    max: function() {
        return Math.max(...ages)
    },
    range: function() {
        return this.max() - this.min()
    },
    mean: function() {
        return this.sum() / this.count()
    },
    median: function() {
        const sortedAges = ages.slice().sort((a, b) => a - b)
        const middle = Math.floor(sortedAges.length / 2)
        
        if (sortedAges.length % 2 === 0) {
            return (sortedAges[middle - 1] + sortedAges[middle]) / 2
        } else {
            return sortedAges[middle]
        }
    },
    mode: function() {
        const countMap = {}

        ages.forEach((age) => {
            if (countMap[age]) {
                countMap[age]++
            } else {
                countMap[age] = 1
            }
        })

        let mode = []
        let maxCount = 0

        for (const age in countMap) {
            if (countMap[age] > maxCount) {
                mode = [parseInt(age)]
                maxCount = countMap[age]
            } else if (countMap[age] === maxCount) {
                mode.push(parseInt(age))
            }
        }

        return { mode: mode, count: maxCount }
    },
    var: function() {
        const mean = this.mean()
        const squaredDiffs = ages.map((age) => (age - mean)**2)

        return squaredDiffs.reduce((acc, cur) => acc + cur, 0) / (this.count() - 1)
    },
    std: function() {
        return Math.sqrt(this.var()).toFixed(1)
    },
    freqDist: function() {
        const freqMap = {}

        ages.forEach((age) => {
            if (freqMap[age]) {
                freqMap[age]++
            } else {
                freqMap[age] = 1
            }
        })
        const sortedFreq = Object.entries(freqMap).sort((a, b) => b[1] - a[1])

        return sortedFreq.map((entry) => [entry[1], parseInt(entry[0])])
    },
    describe: function() {
        const count = this.count()
        const sum = this.sum()
        const min = this.min()
        const max = this.max()
        const range = this.range()
        const mean = this.mean()
        const median = this.median()
        const mode = this.mode()
        const variance = this.var()
        const stdDev = this.std()
        const freqDist = this.freqDist()

        return `Count: ${count}\nSum: ${sum}\nMin: ${min}\nMax: ${max}\nRange: ${range}\nMean: ${mean}\nMedian: ${median}\nMode: (${mode.mode}, ${mode.count})\nVariance: ${variance}\nStandard Deviation: ${stdDev}\nFrequency Distribution: ${freqDist}`
    },
}

console.log('Count: ', statistics.count())
console.log('Sum: ', statistics.sum())
console.log('Min: ', statistics.min())
console.log('Max: ', statistics.max())
console.log('Range: ', statistics.range())
console.log('Mean: ', statistics.mean())
console.log('Median: ', statistics.median())
console.log('Mode: ', statistics.mode())
console.log('Variance: ', statistics.var())
console.log('Standard Deviation: ', statistics.std())
console.log('Frequency Distribution: ', statistics.freqDist())

console.log(statistics.describe())