// const firstName = 'Ojeh';
// const lastName = 'Agbaje';
// let bestFriend = 'Marcus Aurelius';

// let bestFood = "Pounded Yam"

// let address = "127.0.0.1";

// console.log(`I am ${firstName}, I live in ${address}, my best friend is ${bestFriend}, and i enjoy ${bestFood}`);

// let year = 10 + 10;
// console.log(year);
// year += 60;
// console.log(year);
// year -= 70; 
// console.log(year);


// let age =15;







// console.log("Please enter state.");

// let state = 'lagos';

// if (state === 'lagos') {
//     console.log(`welcome to ${state}`);
// }
// else if (state === 'oyo') {
//     console.log(`Welcome to ${state}`);
// }
// else if (state === 'ogun') {
//     console.log(`Welcome to ${state}`);
// }
// else if (state === 'kano') {
//     console.log(`Welcome to ${state}`);
// }

// else if (state === 'kaduna') {
//     console.log(`Welcome to ${state}`);
// }
// else {
//     console.log(`${state} not found`);
// }


// state = 'lagos' ? console.log(`Welcome to ${state}`) 
// : state = 'oyo' ? console.log(`Welcome to ${state}`)
// : state = 'ogun' ? console.log(`Welcome to ${state}`)
// : state = 'kano' ? console.log(`Welcome to ${state}`)
// : state = 'kaduna' ? console.log(`Welcome to ${state}`)
// : console.log(`${state} not found`);


// let newAge;
// let feature;

// if (character === good && age >= 18) {
//     console.log ("safe to drive")
// }
// console.log('OUR CODE STARTS HERE')
// console.log('\n')


// positive or negative
// let condition = -5;
//     if (condition >= 0) {
//         console.log(`${condition}is positive`);
//     }
//     else {
//         console.log(`${condition} is negative`);
//     }
// console.log('\n')



// check for even number 
// let number = 15;
//     if (number % 2 === 0) {
//         console.log(`${number} is an even number`);
//     }
//     else {
//         console.log(`${number} is an odd number`);
//     }
//     console.log('\n')

// grade to number
// let grade = 9;
//     if (grade > 7) {
//         grade = 'A';
//     }
//     else if (grade <= 7 && grade >= 6) {
//         grade = 'B';
//     }
//     else if (grade < 6 && grade >= 5) {
//         grade = 'C'
//     }
//     else if (grade < 5 && grade >= 4) {
//         grade = 'D'
//     }
//     else if (grade < 4 && grade >= 3) {
//         grade = 'E'
//     }
//     else {
//         grade = 'F'
//     }
//     console.log(grade);
//     console.log('\n')


    // checking age and ticket
    // let age_ = 40;
    // let ticketPrice;
    // if (age_ < 12) {
    //     ticketPrice = '$5';
    // }
    // else if (age_ >= 12 && age_ < 18) {
    //     ticketPrice = '$10';
    // }
    // else if (age_ > 18 && age_ < 60) {
    //     ticketPrice = '$20';
    // }
    // else {
    //     ticketPrice = '$15';
    // }
    // console.log(ticketPrice);
    // console.log('\n')




// calculatin discount 
// let amount = 1000;
// let discount;
// if (amount >= 100) {
//     discount = 0.2 * amount;
// }
// else if (amount < 100 && amount >= 50) {
//     discount = 0.1 * amount;
// }
// else {
//     discount = 0;
// }
// console.log(`Discount: $${discount}, to pay:zzzzzzzzzzzzzzzzzzzzzzzz  $${amount - discount}`);
// console.log('\n')



// simple guessing game 

// 






const cars = ['G-Wagon', 'Maybach', 'Rolls-Royce', 'Mustang', 'Aston Martin']

console.log(cars);
 

const amount = [1000000, -50000, 2000, -10000, -10950, 800000, 92000, -15000, -55000, 90000];

console.log(amount);


console.log(cars[cars.length - 1])

amount.push(50000);
console.log(amount);


amount.shift();
console.log(amount);
amount.shift();
console.log(amount);
cars.unshift('Bullion Van');
console.log(cars);
cars.push('Rezvani')
console.log(cars);

// write any five unisversities and use any of the four methods


const unisversities = ['Unilag', 'Havard', 'MIT', 'Oxford', 'Uniben']
console.log(unisversities);

unisversities.push('hta');
console.log(unisversities);
unisversities.unshift('Cambridge')
console.log(unisversities);

unisversities.pop();
console.log(unisversities)
unisversities.shift();
console.log(unisversities);

unisversities.reverse();
console.log(unisversities);
console.log(unisversities.indexOf('MIT'));
console.log(unisversities.includes('Uniben'));


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]


console.log(
    numbers.map((number) => number  ** 2));

const num = numbers.map((num) => num ** 2);

console.log(num);
// START HERE


const newNumbers = numbers.filter((number) => number % 2 === 0);
console.log(newNumbers.map((number) => number ** 3));


// 

// console.log('here');

// console.log(numbers.map((numbers) => (numbers.filter((number) => number % 2 === 0)) ** 3));

// console.log(numbers.concat(cars));




const deposits = [100, 456, 381, 999, 100, 734, 2];

const total = deposits.reduce(function (acc, cur) {
    return acc + cur;
}, 0)


const stillTotal = deposits.reduce((acc, cur) => acc + cur, 0);

console.log(total);
console.log(stillTotal);

console.log(`practice start here`);


const jerseys = [23, 8, 24, 0, 13, 32, 34, 30, 22, 11];


console.log(jerseys.filter((jerser) => jerser > 11));
console.log(jerseys.map((jersey) => jersey * 2));


console.log(jerseys.filter((jersey) => jersey > 10).map((jersey) => jersey * 2));


