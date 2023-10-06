const text = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'

let incomes = text.match(/\d+/g)

console.log((parseInt(incomes[0]) * 12) + parseInt(incomes[1]) + (parseInt(incomes[2]) * 12))


const text2 = "The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction."

const points = text2.match(/-?\d+/g)

const sortedPoints = points.sort((a, b) => a - b)

const distance = Math.abs(sortedPoints[sortedPoints.length - 1] - sortedPoints[0])

console.log(`points = ${points}\nsortedPoints = ${sortedPoints}\ndistance = ${distance}`)

function is_valid_variable(variable_name) {
    let pattern = /^[a-zA-Z_][a-zA-Z0-9_]*$/

    return pattern.test(variable_name)
}

console.log(is_valid_variable('first_name'))
console.log(is_valid_variable('first-name'))
console.log(is_valid_variable('1first_name'))
console.log(is_valid_variable('firstname'))

function tenMostFrequentWords(paragraph, limit = 10) {
    const words = paragraph.match(/\b\w+\b/g)

    const wordCount = {}

    words.forEach(word => {
        if (wordCount[word]) {
            wordCount[word]++
        } else {
            wordCount[word] = 1
        }
    })
    const wordCountArray = Object.keys(wordCount).map(word => ({
        word: word,
        count: wordCount[word],
    }))

    wordCountArray.sort((a, b) => b.count - a.count)
    return wordCountArray.filter((a, idx) => idx < limit)
}

const paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`

console.log(tenMostFrequentWords(paragraph))
console.log(tenMostFrequentWords(paragraph, 10))

function cleanText(sentence) {
    const cleanedText = sentence
        .replace(/[^\w\s]/g, "")
        .replace(/\s+/g, " ")

    return cleanedText
}

function mostFrequentWords(paragraph, limit = 3) {
    const words = paragraph.match(/\b\w+\b/g)

    const wordCount = {}

    words.forEach(word => {
        if (wordCount[word]) {
            wordCount[word]++
        } else {
            wordCount[word] = 1
        }
    })
    const wordCountArray = Object.keys(wordCount).map(word => ({
        word: word,
        count: wordCount[word],
    }))

    wordCountArray.sort((a, b) => b.count - a.count)
    return wordCountArray.filter((a, idx) => idx < limit)
}

const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
const cleanedSentence = cleanText(sentence)
console.log(mostFrequentWords(cleanedSentence))




