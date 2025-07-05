// ...100 line of code 

const a1 = 10;
const b1 = 20;

// const c1 = a1 + b1;
// console.log(c1);

add(a1, b1); // function call


// ..50 lines

const a2 = 30;
const b2 = 40;

// const c2 = a2 + b2;

// console.log(c2);

add(a2, b2); // function call

//...30 lines

const a3 = 30;
const b3 = 60;

// const c3 = a3 + b3;

// console.log(c3);

add(a3, b3); // function call


// How to declare a functions = Function Definition
function add(x, y) {
    const z = x + y
    console.log(z);
}

// Function expression
const multiply = function(x,y) {
    return x * y;
}

const res = multiply(10, 5);

console.log(res);

// Arrow function - Synatactical Sugar

const squareRoot =  (num)=> {
    return Math.sqrt(num);
}

const squareRoot1 =  (num)=> Math.sqrt(num); //Arrow function implicit return


