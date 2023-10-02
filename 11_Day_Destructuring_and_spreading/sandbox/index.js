const constants = [2.72, 3.14, 9.81, 37, 100]

let [e, pi, gravity, bodyTemp, boilingTemp] = constants

console.log(e, pi, gravity, bodyTemp, boilingTemp)

const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']

let [fin, est, sw, den, nor] = countries

console.log(fin, est, sw, den, nor)

const rectangle = {
    width: 20,
    height: 10,
    area: 200,
    perimeter: 60
}

let { width, height, area, perimeter } = rectangle

console.log(width, height, area, perimeter)

const users = [
    {
        name: 'Brook',
        scores: 75,
        skills: ['HTM', 'CSS', 'JS'],
        age: 16
    },
    {
        name: 'Alex',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],
        age: 18
    },
    {
        name: 'David',
        scores: 75,
        skills: ['HTM', 'CSS'],
        age: 22
    },
    {
        name: 'John',
        scores: 85,
        skills: ['HTML'],
        age: 25
    },
    {
        name: 'Sara',
        scores: 95,
        skills: ['HTM', 'CSS', 'JS'],
        age: 26
    },
    {
        name: 'Martha',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],
        age: 18
    },
    {
        name: 'Thomas',
        scores: 90,
        skills: ['HTM', 'CSS', 'JS'],
        age: 20
    }
]

for (const { name, scores, skills, age } of users) {
    console.log(name, scores, skills, age)
}

for (const { name, scores, skills, age } of users) {
    if (skills.length < 2) {
        console.log(name, scores, skills, age)
    }
}

for (const { name, capital, population, languages } of countries_data) {
    console.log(name, capital, population, languages)
}

const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]

let [name, skills, scores] = student
let jsScore = scores[2]
let reactScore = scores[3]

console.log(name, skills, jsScore, reactScore)

function convertArrayToObject(arr) {
    const out = []
    for (const [name, skills, scores] of arr) {
        out.push({ name, skills, scores })
    }

    return out
}

const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]

console.log(convertArrayToObject(students))

const student2 = {
    name: 'David',
    age: 25,
    skills: {
        frontEnd: [
            { skill: 'HTML', level: 10 },
            { skill: 'CSS', level: 8 },
            { skill: 'JS', level: 8 },
            { skill: 'React', level: 9 }
        ],
        backEnd: [
            { skill: 'Node', level: 7 },
            { skill: 'GraphQL', level: 8 },
        ],
        dataBase: [
            { skill: 'MongoDB', level: 7.5 },
        ],
        dataScience: ['Python', 'R', 'D3.js']
    }
}

const newStudent = {
    ...student2,
    skills: {
        frontEnd: [
            { skill: 'HTML', level: 10 },
            { skill: 'CSS', level: 8 },
            { skill: 'JS', level: 8 },
            { skill: 'React', level: 9 },
            { skill: 'Bootstrap', level: 8 }
        ],
        backEnd: [
            { skill: 'Node', level: 7 },
            { skill: 'GraphQL', level: 8 },
            { skill: 'Express', level: 9 }
        ],
        dataBase: [
            { skill: 'MongoDB', level: 7.5 },
            { skill: 'SQL', level: 8 }
        ],
        dataScience: ['Python', 'R', 'D3.js', 'SQL']
    }
}

console.log(newStudent)