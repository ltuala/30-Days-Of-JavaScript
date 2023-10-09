const skills = ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python']
let age = 250;
let isMarried = true
const student = {
    firstName: 'Asabeneh',
    lastName: 'Yetayehe',
    age: 250,
    isMarried: true,
    skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python',]
}
const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`

const skillsObj = {}
skillsObj.skills = skills

const skillsTxt = JSON.stringify(skillsObj)
console.log(skillsTxt)

const ageObj = {}
ageObj.age = age

const ageTxt = JSON.stringify(ageObj)
console.log(ageTxt)

const isMarriedObj = {}
isMarriedObj.isMarried = isMarried

const isMarriedTxt = JSON.stringify(isMarriedObj)
console.log(isMarriedTxt)

const studentTxt = JSON.stringify(student)
console.log(studentTxt)

const studentTxt2 = JSON.stringify(student, ['firstName', 'lastName', 'skills'], 4)
console.log(studentTxt2)

const txtObj = JSON.parse(txt)
console.log(txtObj)

let maxSkillsUser = ''
let maxSkillsCount = 0

for (const user in txtObj) {
    const currentUser = txtObj[user]
    const skillsCount = currentUser.skills.length

    if (skillsCount > maxSkillsCount) {
        maxSkillsCount = skillsCount
        maxSkillsUser = user
    }
}

console.log(`Max skill user: ${maxSkillsUser}`)
