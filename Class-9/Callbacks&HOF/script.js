

// function fun(a, b) {
//     return c;
// }

// fun is known as HOF if a,b or are also functions


const multiply = (a, b) => a * b;

function calculate(func) {
    return func(3, 4);
}

const res = calculate(multiply);

console.log(res);

// calculate is a higer order function 
// multiply : callback function