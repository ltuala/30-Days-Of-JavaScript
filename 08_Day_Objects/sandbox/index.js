const dog = {}
console.log(dog)

dog.name = 'sutan'
dog.legs = 4
dog.color = 'brown'
dog.bark = function () {
    return 'woof woof'
}

console.log(dog)

console.log(dog.name)
console.log(dog.legs)
console.log(dog.color)
console.log(dog.bark())

dog.breed = 'beagle'
dog.getDogInfo = function () {
    return Object.entries(this)
}

console.log(dog.getDogInfo())

const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}

let personMaxSkills = ''
let maxSkills = 0
let idx = 0
for (const a of Object.values(users)) {
    if (a.skills.length > maxSkills) {
        personMaxSkills = Object.keys(users)[idx]
        maxSkills = a.skills.length
    }
    idx++
}

console.log(`${personMaxSkills} has the most skills which is ${maxSkills} skills.`)

let loggedIn = 0
for (const a of Object.values(users)) {
    if (a.isLoggedIn) {
        loggedIn++
    }
}

console.log(`Logged in user count: ${loggedIn}`)

let points50 = 0
for (const a of Object.values(users)) {
    if (a.points >= 50) {
        points50++
    }
}

console.log(`Points 50+ user count: ${points50}`)

const mern = ['MongoDB', 'Express', 'React', 'Node']
const mernDevs = []
let isMernDev = false
let useridx = 0
for (const user of Object.values(users)) {
    isMernDev = true
    for (const stack of mern) {
        if (!user.skills.includes(stack)) {
            isMernDev = false
            break
        }
    }
    if (isMernDev) {
        mernDevs.push(Object.keys(users)[useridx])
    }
    useridx++

}

console.log(`Mern developers: ${mernDevs.join(', ')}.`)

const usersCopy = Object.assign({}, users)
usersCopy.Lyndon = {
    email: 'lyndon@lyndon.com',
    skills: ['Ctrl+C', 'Ctrl+P'],
    age: 25,
    isLoggedIn: false,
    points: 77
}

console.log(usersCopy)

console.log(Object.keys(users))
console.log(Object.values(users))

function getCountry(country_name) {
    let name
    let capital
    let populations
    let languages
    let exists = false
    for (const country of countries) {
        if (country.name === country_name) {
            name = country.name
            capital = country.capital
            populations = country.population
            languages = country.languages
            exists = true
        }
    }
    let out = ''
    if (exists) {
        out = `Country Name: ${name}, Capital: ${capital}, Populations: ${populations}, Languages: ${languages}`
    } else {
        out = 'Not Found.'
    }
    return out
}

console.log(getCountry('Philippines'))

const personAccount = {
    firstName: 'Person1',
    lastName: 'Person1',
    incomes: [
        [10, 20],
        ['job1', 'job2']
    ],
    expenses: [
        [5, 10],
        ['expense1', 'expense2']
    ],
    totalIncome: function () {
        let totalIncome = 0
        for (const income of this.incomes[0]) {
            totalIncome += income
        }
        return totalIncome
    },
    totalExpenses: function () {
        let totalExpense = 0
        for (const expense of this.expenses[0]) {
            totalExpense += expense
        }
        return totalExpense
    },
    accountInfo: function () {
        return `Account Info = First Name: ${this.firstName}, Last Name: ${this.lastName}`
    },
    addIncome: function (income, description) {
        this.incomes[0].push(income)
        this.incomes[1].push(description)
        return
    },
    addExpense: function (expense, description) {
        this.expenses[0].push(expense)
        this.expenses[1].push(description)
        return
    },
    accountBalance: function (expense, description) {
        return this.totalIncome() - this.totalExpenses()
    }
}

console.log(personAccount.accountBalance())

const users1 = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

    const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]

function userIdGenerator() {
    let randomId = ''
    for (let i = 0; randomId.length < 6; i++) {
        let rand_char = Math.floor(Math.random() * 80 + 47)
        randomId += String.fromCharCode(rand_char)
        randomId = randomId.replace(/[^\w\d]/g, '')
    }

    return randomId
}

function getDateTime() {
    let dateNow = new Date()
    let year = dateNow.getFullYear() // return year
    let month = dateNow.getMonth() + 1 // return month(0 - 11)
    let date = dateNow.getDate() // return date (1 - 31)
    let hours = dateNow.getHours() // return number (0 - 23)
    let minutes = dateNow.getMinutes() // return number (0 -59)

    return `${('00' + month).substr(-2, 2)}/${('00' + date).substr(-2, 2)}/${year} ${hours}:${minutes}`
}

function signUp(username, password, email) {
    for (const user1 of users1) {
        if (username === user1.username) {
            return 'Username already taken.'
        }
    }

    const newUser = {
        _id: userIdGenerator(),
        username: username,
        email: email,
        password: password,
        createdAt: getDateTime(),
        isLoggedIn: false

    }

    users1.push(newUser)
    return
}

signUp('test1', 'pw1', 'test1@test.com')

console.log(users1)

function signIn(username, password) {
    if (!users1.includes(username)) {
        return 'Username does not exist.'
    }
    for (const user1 of users1) {
        if (username === user1.username && password !== user1.password) {
            return 'Wrong password.'
        }
        if (username === user1.username && password === user1.password) {
            user1.isLoggedIn = true
        }
    }
    return
}

function rateProduct(userId, product, rate) {
    if (!products.includes(product)) {
        return `Product not found.`
    }
    for (const product of products) {
        if (product === product.name) {
            const newRating = {
                userId: userId,
                rate: rate
            }
            products.ratings.push(newRating)
        }
    }
    return
}

function averageRating(product) {
    if (!products.includes(product)) {
        return `Product not found.`
    }
    let totalRating = 0
    let averageRating = 0
    for (const product of products) {
        if (product === product.name) {
            for (const rating of product.ratings) {
                totalRating += rating.rate
            }
            averageRating = totalRating / product.ratings.length
        }
    }
    return averageRating
}

function likeProduct(userId, product) {
    if (!products.includes(product)) {
        return `Product not found.`
    }
    for (const product of products) {
        if (product === product.name) {
            if (!product.likes.includes(userId)) {
                product.likes.push(userId)
            } else {
                product.likes.splice(product.likes.indexOf(userId), 1)
            }
        }
    }
    return
}


