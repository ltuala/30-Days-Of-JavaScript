console.table(countries)

const countries_obj = Object.assign({}, countries)
console.table(countries_obj)

console.group('Array log')
console.log(countries)
console.groupEnd()

console.group('Object log')
console.log(countries_obj)
console.groupEnd()

console.assert(10 > 2 * 10, '10 is greater than 2 times 10')

console.warn('warn message')

console.error('error message')

console.time('for loop')
for (let i = 0; i <= 10; i++) {
    console.log(i)
}
console.timeEnd('for loop')

console.time('while loop')
let i = 0
while (i <= 10) {
    console.log(i)
    i++
}
console.timeEnd('while loop')

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.time('for of loop')
for (const a of arr) {
    console.log(a)
}
console.timeEnd('for of loop')

console.time('forEach loop')
arr.forEach(a => {
    console.log(a)
})
console.timeEnd('forEach loop')


