// console.log('Hello from JS');

// if ("") {
//     console.log('Inside If')
// }

const age = parseInt(prompt('Enter your age'));

console.log(age);
// console.log(typeof age);
if (age < 18) {
    alert('Cannot enter the club');
}
else if(age >=18 && age < 25){
    alert('Can enter but cannot drink');
} else {
    alert('can enter and drink');
}



