function outerFunction() {
    let count = 0
    function innerFunction() {
        count++
        return count
    }

    return innerFunction
}

const innerFunc = outerFunction()

console.log(innerFunc())

function outerFunction2() {
    let count = 0;
    function plusOne() {
        count++
        return count
    }
    function plusTwo() {
        plusOne()
        plusOne()
        return count
    }
    function plusThree() {
        plusOne()
        plusTwo()
        return count
    }

    return {
        plusOne:plusOne(),
        plusTwo:plusTwo(),
        plusThree:plusThree(),
    }
}
const innerFuncs = outerFunction2()

console.log(innerFuncs.plusOne)
console.log(innerFuncs.plusTwo)
console.log(innerFuncs.plusThree)

function personAccount() {
    let firstName= 'Person1'
    let lastName= 'Person1'
    const incomes= [
        [10, 20],
        ['job1', 'job2']
    ]
    const expenses = [
        [5, 10],
        ['expense1', 'expense2']
    ]
    let totalIncomes = 0
    let totalExpenses = 0
    function totalIncome() {
        
        for (const income of incomes[0]) {
            totalIncomes += income
        }
        return totalIncomes
    }
    function totalExpense() {
        
        for (const expense of expenses[0]) {
            totalExpenses += expense
        }
        return totalExpenses
    }
    function accountInfo() {
        return `Account Info = First Name: ${firstName}, Last Name: ${lastName}`
    }
    function addIncome(income, description) {
        incomes[0].push(income)
        incomes[1].push(description)
        return
    }
    function addExpense(expense, description) {
        expenses[0].push(expense)
        expenses[1].push(description)
        return
    }
    function accountBalance() {
        return totalIncome() - totalExpense()
    }
    return {
        totalIncome:totalIncome(),
        totalExpense:totalExpense(),
        accountInfo:accountInfo(),
        addIncome:addIncome(),
        addExpense:addExpense(),
        accountBalance:accountBalance(),
    }
}
const personAccountFunc = personAccount()

console.log(personAccountFunc.accountInfo)