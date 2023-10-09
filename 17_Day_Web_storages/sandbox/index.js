localStorage.setItem('firstName', 'lyndon')

localStorage.setItem('lastName', 'tuala')

localStorage.setItem('age', 25)

localStorage.setItem('country', 'ph')

localStorage.setItem('city', 'mnl')

const student = {
    firstName: 'student1',
    lastName: 'student1',
    age: 250,
    skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python',],
    country: 'ph'
}

const studentTxt = JSON.stringify(student)
localStorage.setItem('student', studentTxt)

console.log(localStorage)

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
    accountBalance: function () {
        return this.totalIncome() - this.totalExpenses()
    }
}

const personAccountTxt = JSON.stringify(personAccount)
localStorage.setItem('personAccount', personAccountTxt)

console.log(localStorage)