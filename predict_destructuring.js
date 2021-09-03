// 1. DONE
// given:

// const cars = ['Tesla', 'Mercedes', 'Honda']
// const [ randomCar ] = cars
// const [ ,otherRandomCar ] = cars
// //Predict the output
// console.log(randomCar)
// console.log(otherRandomCar)

// prediction: idek?
// result: logs 'tesla', 'mercedes'


// 2. DONE
// given:

// const employee = {
//     name: 'Elon',
//     age: 47,
//     company: 'Tesla'
// }
// const { name: otherName } = employee;
// const { name } = employee;
// console.log(name);
// console.log(employee);
// console.log(otherName);


// prediction:
// result:

// 3.
// given:

// const person = {
//     name: 'Phil Smith',
//     age: 47,
//     height: '6 feet'
// }
// const password = '12345';
// const { password: hashedPassword } = person;  
// //Predict the output
// console.log(password);
// console.log(hashedPassword);


// prediction:
// result:

// 4.
// given:

// const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
// const [,first] = numbers;
// const [,,,second] = numbers;
// const [,,,,,,,,third] = numbers;
// //Predict the output
// // does 2 == 5? false
// console.log(first == second);
// // does 2 == 2? true
// console.log(first == third);
// console.log(numbers);
// console.log(first);
// console.log(second);
// console.log(third);

// prediction: logs true, false
// result

// 5.
// given:

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
// Predict the output
// prints 'value'
console.log(key); 
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);


// prediction: "value", [1,5,1,8,3,3], 1, 5
// result: correct
