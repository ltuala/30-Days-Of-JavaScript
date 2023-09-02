let challenge = '30 Days Of JavaScript'
console.log(challenge)

console.log(challenge.length)
console.log(challenge.toUpperCase())
console.log(challenge.toLowerCase())
console.log(challenge.substring(0, 2))
console.log(challenge.substring(3))
console.log(challenge.includes('Script'))
console.log(challenge.split())
console.log(challenge.split(' '))

let string1 = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'

console.log(string1.split(','))
console.log(challenge.replace('JavaScript', 'Python'))
console.log(challenge.charAt(15))
console.log(challenge.charCodeAt(challenge.indexOf('J')))
console.log(challenge.indexOf('a'))
console.log(challenge.lastIndexOf('a'))

let string2 = 'You cannot end a sentence with because because because is a conjunction'
console.log(string2.indexOf('because'))
console.log(string2.lastIndexOf('because'))
console.log(string2.search('because'))

let string3 = ' 30 Days Of JavaScript '
console.log(string3.trim())
console.log(challenge.startsWith('30'))
console.log(challenge.endsWith('JavaScript'))
console.log(challenge.match(/a/gi))

let string4 = '30 Days of'
console.log(string4.concat(' JavaScript'))
console.log(challenge.repeat(2))
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")
console.log("\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\"")

console.log(typeof 10 === typeof '10')
console.log(typeof 10 === typeof parseInt('10'))
console.log(parseFloat('9.8') === 10)
console.log(Math.ceil(parseFloat('9.8')) === 10)

console.log('python'.includes('on') && 'jargon'.includes('on'))
console.log('I hope this course is not full of jargon'.includes('jargon'))

console.log(Math.round(Math.random() * 101))
console.log(Math.round(Math.random() * 51) + 50)
console.log(Math.round(Math.random() * 256))

let string5 = 'JavaScript'
console.log(string5[Math.round(Math.random() * string5.length)])
console.log('1\t1\t1\t1\t1')
console.log('2\t1\t2\t4\t8')
console.log('3\t1\t3\t9\t27')
console.log('4\t1\t4\t16\t64')
console.log('5\t1\t5\t25\t125')

console.log(string2.substr(31,23))

let string6 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
console.log(string6.match(/love/gi).length)
console.log(string2.match(/because/gi).length)

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
console.log(sentence.replace(/[^\w\s]/g, ''))

const text = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let incomes = text.match(/\d+/g)
console.log((parseInt(incomes[0]) * 12) + parseInt(incomes[1]) + (parseInt(incomes[2]) * 12))