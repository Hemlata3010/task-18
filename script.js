// Question 1.

// let numbers = [1, 2, 3, 4, 5];

// let squaredNumbers = numbers.map((num) => num * num);

// console.log(squaredNumbers); 


// Question 2.

// function getGrade(score) {
//     return score >= 90 ? 'A' :
//            score >= 80 ? 'B' :
//            score >= 70 ? 'C' :
//            score >= 60 ? 'D' : 'F';
// }
// let studentScore = 85;
// let studentGrade = getGrade(studentScore);
// console.log(`Student Grade: ${studentGrade}`); 


// Question 3.

// let car = {
//     companyName: 'Toyota',
//     model: 'Camry',
//     year: 2020
// };
// function changeYear(newYear) {
//     car.year = newYear;
// }
// changeYear(2022);
// let { model, year } = car;
// console.log(`Car Model: ${model}`); 
// console.log(`Car Year: ${year}`); 


// Question 4.

// function isPrime(number) {
//     if (number <= 1) return false; 
//     for (let i = 2; i <= Math.sqrt(number); i++) {
//         if (number % i === 0) {
//             return false; 
//         }
//     }
//     return true; 
// }
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let primeNumbers = numbers.filter(isPrime);
// console.log(primeNumbers); 


// Question 5.

// let numbers = [1, 2, 3, 4, 5];
// let doubledNumbers = numbers.map((num) => num * 2);
// console.log("Doubled Numbers:", doubledNumbers); 
// let evenNumbers = numbers.filter((num) => num % 2 === 0);
// console.log("Even Numbers:", evenNumbers); 
// let sum = numbers.reduce((acc, curr) => acc + curr, 0);
// console.log("Sum of Numbers:", sum); 


// Question 6.

// async function fetchData() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//         if (!response.ok) {
//             throw new Error('Failed to fetch data');
//         }
//         const data = await response.json();
//         console.log('Fetched Data:', data);
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// }
// fetchData();

// Question 7.

let person = {
    name: 'hema',
    address: {
        street: '123 Main Street',
        city: 'fbd',
        country: 'india'
    }
};
let phoneNumber = person.contact?.phone;
console.log('Phone Number:', phoneNumber); 
