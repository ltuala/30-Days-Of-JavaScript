// let age = prompt('Enter your age:', 'number goes here')
// if (age >= 18) {
//     console.log('You are old enough to drive.')
// } else {
//     console.log(`You are left with ${18 - age} years to drive.`)
// }

// let yourAge = prompt('Enter your age:', 'number goes here')
// let myAge = 25

// if (yourAge > myAge) {
//     console.log(`You are ${yourAge - myAge} years older than me.`)
// } else if (yourAge < myAge) {
//     console.log(`I am ${myAge - yourAge} years older than you.`)
// } else {
//     console.log(`We are both ${myAge} years old.`)
// }

let a = 4
let b = 3

if (a > b) {
    console.log('a is greater than b')
} else {
    console.log('a is less than b')
}

(a > b) ?
    console.log('a is greater than b')
    : console.log('a is less than b')

// let number = prompt('Enter a number:', 'number goes here')
// if (number % 2 == 0) {
//     console.log(`${number} is an even number.`) 
// } else {
//     console.log(`${number} is an odd number.`)
// }

// let score = prompt('Enter score:', 'number goes here')

// switch (true) {
//     case (score <= 100 && score >= 90):
//         console.log(`Score: ${score}, Grade: A`);
//         break;
//     case (score <= 89 && score >= 70):
//         console.log(`Score: ${score}, Grade: B`);
//         break;
//     case (score <= 69 && score >= 60):
//         console.log(`Score: ${score}, Grade: C`);
//         break;
//     case (score <= 59 && score >= 50):
//         console.log(`Score: ${score}, Grade: D`);
//         break;
//     case (score <= 49 && score >= 0):
//         console.log(`Score: ${score}, Grade: F`);
//         break;
//     default:
//         console.log('Not a valid score.');
// }

// let month = prompt('Enter month:', 'month goes here')

// switch (month) {
//     case "September":
//     case "October":
//     case "November":
//         console.log(`The season is Autumn.`);
//         break;
//     case "December":
//     case "January":
//     case "February":
//         console.log(`The season is Winter.`);
//         break;
//     case "March":
//     case "April":
//     case "May":
//         console.log(`The season is Spring.`);
//         break;
//     case "June":
//     case "July":
//     case "August":
//         console.log(`The season is Summer.`);
//         break;
//     default:
//         console.log('Not a valid month.');
// }

// let day = prompt('Enter day:', 'day goes here')
// day_title_case = day.charAt(0).toUpperCase() + day.slice(1).toLowerCase()
// switch (day.toLowerCase()) {
//     case "saturday":
//     case "sunday":
//         console.log(`${day_title_case} is a weekend.`);
//         break;
//     case "monday":
//     case "tuesday":
//     case "wednesday":
//     case "thursday":
//     case "friday":
//         console.log(`${day_title_case} is a working day.`);
//         break;
//     default:
//         console.log('Not a valid day.');
// }

// let month = prompt('Enter a month:', 'month goes here')
// month_title_case = month.charAt(0).toUpperCase() + month.slice(1).toLowerCase()
// let month_no = 1

// switch (month.toLowerCase()) {
//     case "january":
//         break;
//     case "february":
//         month_no+=1;
//         break;
//     case "march":
//         month_no+=2;
//         break;
//     case "april":
//         month_no+=3;
//         break;
//     case "may":
//         month_no+=4;
//         break;
//     case "june":
//         month_no+=5;
//         break;
//     case "july":
//         month_no+=6;
//         break;
//     case "august":
//         month_no+=7;
//         break;
//     case "september":
//         month_no+=8;
//         break;
//     case "october":
//         month_no+=9;
//         break;
//     case "november":
//         month_no+=10;
//         break;
//     case "december":
//         month_no+=11;
//         break;
//     default:
//         month_no = -1
    
// }

// (month != -1) ? console.log(`${month_title_case} has ${new Date(month_no, 2023, 0).getDate()} days.`) : console.log('Not a valid month.')

// FOR LEAP YEAR
let month = prompt('Enter a month:', 'month goes here')
month_title_case = month.charAt(0).toUpperCase() + month.slice(1).toLowerCase()
let month_no = 1

switch (month.toLowerCase()) {
    case "january":
        break;
    case "february":
        month_no+=1;
        break;
    case "march":
        month_no+=2;
        break;
    case "april":
        month_no+=3;
        break;
    case "may":
        month_no+=4;
        break;
    case "june":
        month_no+=5;
        break;
    case "july":
        month_no+=6;
        break;
    case "august":
        month_no+=7;
        break;
    case "september":
        month_no+=8;
        break;
    case "october":
        month_no+=9;
        break;
    case "november":
        month_no+=10;
        break;
    case "december":
        month_no+=11;
        break;
    default:
        month_no = -1
    
}

(month_no != -1) ? console.log(`${month_title_case} has ${new Date(2023, month_no, 0).getDate()} days; ${new Date(2024, month_no, 0).getDate()} days for leap year.`) : console.log('Not a valid month.')