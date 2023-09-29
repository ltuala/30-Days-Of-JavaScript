const emptySet = new Set()
console.log(emptySet)

const newSet = new Set()

for (let i = 0; i < 11; i++) {
    newSet.add(i)
}
console.log(newSet)

newSet.delete(10)
console.log(newSet)

newSet.clear()
console.log(newSet)

const stringArr = ['a', 'b', 'c', 'd', 'e']
const stringSet = new Set(stringArr)
console.log(stringSet)

const countries = ['Finland', 'Sweden', 'Norway']

const countriesMap = new Map()

for (const country of countries) {
    countriesMap.set(country, country.length)
}

console.log(countriesMap)

const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]

const union = [...a, ...b]

const unionAB = new Set(union)
console.log(unionAB)

const setA = new Set(a)
const setB = new Set(b)

const intersection = a.filter((i) => setB.has(i))

const intersectionAB = new Set(intersection)
console.log(intersectionAB)

let difference = a.filter((i) => !setB.has(i))
let differenceAB = new Set(difference)
console.log(differenceAB)

const country_lang_map = new Set()
for (const country of countries_data) {
    for (language of country.languages)
        country_lang_map.add(language)
}
console.log(country_lang_map.size)

function mostSpokenLanguages(arr, limit) {
    const languages = new Map()

    arr.forEach(country => {
        country.languages.forEach(language => {
            if (!languages.has(language)) {
                languages.set(language, 1)
            } else {
                languages.set(language, languages.get(language) + 1)
            }
        })
    })

    const sortedLanguages = [...languages.keys()].sort((a, b) => languages.get(b) - languages.get(a))
    const result = sortedLanguages.filter((i, idx) => idx < limit).map(language => ({ [language]: languages.get(language) }))

    return result
}


console.log(mostSpokenLanguages(countries_data, 10))
console.log(mostSpokenLanguages(countries_data, 3))