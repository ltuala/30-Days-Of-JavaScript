const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

fetch(countriesAPI)
    .then(response => response.json())
    .then(data => {
        data.forEach(country => {
            const name = country.name
            const capital = country.capital
            const languages = country.languages.map(languages => languages.name).join(', ')
            const population = country.population
            const area = country.area

            console.log(`Country: ${name}\nCapital: ${capital}\nLanguages: ${languages}\nPopulation: ${population}\nArea: ${area}\n`)
        })
    })
    .catch(error => console.error(error))

const catNames = []

fetch(catsAPI)
    .then(response => response.json())
    .then(data => {
        data.forEach(cat => {
            const catName = cat.name
            catNames.push(catName)
        })

        console.log(catNames)
    })
    .catch(error => console.error(error))

let totalWeight = 0
let catCount = 0

fetch(catsAPI)
    .then(response => response.json())
    .then(data => {
        data.forEach(cat => {
            const weightParts = cat.weight.metric.split('-')

            const minWeight = parseFloat(weightParts[0])
            const maxWeight = parseFloat(weightParts[1])
            const averageWeight = (minWeight + maxWeight) / 2
            totalWeight += averageWeight
            catCount++
        })

        console.log(`Average Weight: ${totalWeight / catCount} metric`)
    })
    .catch(error => console.error(error))

fetch(countriesAPI)
    .then(response => response.json())
    .then(data => {
        data.sort((a, b) => b.area - a.area)
        const largestCountries = data.slice(0, 10)

        largestCountries.forEach(country => {
            console.log(`Country: ${country.name}, Area: ${country.area}\n`);
        })
    })
    .catch(error => console.error(error))

const officialLanguages = new Set()

fetch(countriesAPI)
    .then(response => response.json())
    .then(data => {
        data.forEach(country => {
            country.languages.forEach(language => {
                officialLanguages.add(language.name)
            })
        })

        console.log(`No Official Languages: ${officialLanguages.size}`)
    })
    .catch(error => console.error(error))
