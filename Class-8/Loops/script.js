

// for (initilization; condition; updatation){
//     body
// }

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);

// for (let i = 1; i <= 10; i = i + 1){
//     console.log(i);
// }

// Infinite loop
// for (let num = 100; num <= 500; num = num - 100){
//     console.log(num);
// }

// let num = 123456; //654321
// let reverse = 0;

// while (num!=0) {
//     const remainder = num % 10
//     reverse = reverse*10 + remainder 
//     num = parseInt(num / 10)
// }

// console.log(reverse);


const fruits = ['grapes', 'apple', 'oranges', 'banana'];

// imperative way of writing code
// for (let index = 0; index < fruits.length; index++){
//     console.log(fruits[index]);
// }

// Declarative way of writing code
// for (let fruit of fruits) {
//     console.log(fruit);
// }

const car = {
    name: 'Ferrari',
    price: 9999,
    color: 'red'
}

// for (let prop of car) {
//     console.log(prop);
// }

const str = "dafhgjjfkskfjnk";

const multilineStr = `
    shjfks
    dsfjkwd
    shjsdk
    xcvshdjfkxc
`

console.log(`Sum of 1,2,3 is ${1 + 2 + 3}`);

console.log(str);
console.log(multilineStr);

const firstName = 'Ajay';
const lastName = 'Dubey';

const fullName = `Mr.${lastName}, ${firstName}`;

console.log(fullName);


for (let key in car) {
    console.log(`${key}---> ${car[key]}`);
}








