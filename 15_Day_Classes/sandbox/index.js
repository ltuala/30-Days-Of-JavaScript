class Animal {
    constructor(name, age, color, legs) {
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
        this.sound = ''
    }
    createNoise() {
        let noise = this.sound + " "
        return noise.repeat(3)
    }
    get getNoise() {
        return this.sound
    }
    set setNoise(sound) {
        this.sound = sound
    }
}

const cat = new Animal('Cathy', 3, 'white', 4)
cat.setNoise = 'meow'

console.log(cat)

class Cat extends Animal {
}

class Dog extends Animal {
    constructor(name, age, color, legs, sound) {
        super(name, age, color, legs, sound)
    }
    createNoise() {
        let noise = this.sound + " "
        if (this.sound === '') {
            noise = 'arf '
        }
        return noise.repeat(3)
    }
}

const dog1 = new Dog('Douglas', 3, 'black', 4)

console.log(dog1.createNoise())

class Statistics {
    constructor(data) {
        this.data = data
    }
    count() {
        return this.data.length
    }
    sum() {
        return this.data.reduce((acc, cur) => acc + cur, 0)
    }
    min() {
        return Math.min(...this.data)
    }
    max() {
        return Math.max(...this.data)
    }
    range() {
        return this.max() - this.min()
    }
    mean() {
        return this.sum() / this.count()
    }
    median() {
        const sortedAges = this.data.slice().sort((a, b) => a - b)
        const middle = Math.floor(sortedAges.length / 2)

        if (sortedAges.length % 2 === 0) {
            return (sortedAges[middle - 1] + sortedAges[middle]) / 2
        } else {
            return sortedAges[middle]
        }
    }
    mode() {
        const countMap = {}

        this.data.forEach((age) => {
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
    }
    var() {
        const mean = this.mean()
        const squaredDiffs = this.data.map((age) => (age - mean) ** 2)

        return squaredDiffs.reduce((acc, cur) => acc + cur, 0) / (this.count() - 1)
    }
    std() {
        return Math.sqrt(this.var()).toFixed(1)
    }
    freqDist() {
        const freqMap = {}

        this.data.forEach((age) => {
            if (freqMap[age]) {
                freqMap[age]++
            } else {
                freqMap[age] = 1
            }
        })
        const sortedFreq = Object.entries(freqMap).sort((a, b) => b[1] - a[1])

        return sortedFreq.map((entry) => [entry[1], parseInt(entry[0])])
    }
    describe() {
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

        return `Count: ${count}\nSum: ${sum}\nMin: ${min}\nMax: ${max}\nRange: ${range}\nMean: ${mean}\nMedian: ${median}\nMode: (${mode.mode} ${mode.count})\nVariance: ${variance}\nStandard Deviation: ${stdDev}\nFrequency Distribution: ${freqDist}`
    }
}

ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

const statistics = new Statistics(ages)

console.log('Count:', statistics.count()) // 25
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range()) // 14
console.log('Mean: ', statistics.mean()) // 30
console.log('Median: ', statistics.median()) // 29
console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
console.log('Variance: ', statistics.var()) // 17.5
console.log('Standard Deviation: ', statistics.std()) // 4.2
console.log('Variance: ', statistics.var()) // 17.5
console.log('Frequency Distribution: ', statistics.freqDist()) // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]

class PersonAccount {
    constructor(firstname, lastname, incomes, expenses) {
        this.firstname = firstname
        this.lastname = lastname
        this.incomes = incomes
        this.expenses = expenses
    }
    totalIncome() {
        let totalIncome = 0
        for (const income of this.incomes[0]) {
            totalIncome += income
        }
        return totalIncome
    }
    totalExpenses() {
        let totalExpense = 0
        for (const expense of this.expenses[0]) {
            totalExpense += expense
        }
        return totalExpense
    }
    accountInfo() {
        return `Account Info = First Name: ${this.firstName} Last Name: ${this.lastName}`
    }
    addIncome(income, description) {
        this.incomes[0].push(income)
        this.incomes[1].push(description)
        return
    }
    addExpense(expense, description) {
        this.expenses[0].push(expense)
        this.expenses[1].push(description)
        return
    }
    accountBalance() {
        return this.totalIncome() - this.totalExpenses()
    }
}

const person1 = new PersonAccount('Person1', 'Person1',
    [
        [10, 20],
        ['job1', 'job2']
    ],
    [
        [5, 10],
        ['expense1', 'expense2']
    ]
)

console.log(person1)