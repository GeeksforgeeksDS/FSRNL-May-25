// const radiusArr = [1,2,3,4,5,6,7,8,9,10];

// function to compute
// - diamter @return [<array of diamter>] - 2*radius
// - area @return [<array of areas>] - Math.PI * radius * radius
// - circumference @return [<array of circumference>] - 2*Math.PI*radius



const radiusArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const diameter = (radius) => 2 * radius;
const area = (radius) => Math.PI * radius * radius;
const circumference = (radius) => 2 * Math.PI * radius

const squareRoot = (radius) => Math.sqrt(radius);

function calculate(radiusArr, logic) {
    const res = [];
    for (const radius of radiusArr) {
        res.push(logic(radius));
    }
    return res;
}

// function calculateArea(logic) {
//     const res = [];
//     for (const radius of radiusArr) {
//         res.push(logic(radius));
//     }
//     return res;
// }

// function calculateCircumference(logic) {
//     const res = [];
//     for (const radius of radiusArr) {
//         res.push(logic(radius));
//     }
//     return res;
// }

// console.log(calculateDiameter(diameter));
// console.log(calculateArea(area));
// console.log(calculateCircumference(circumference));

console.log(calculate(radiusArr, diameter));
console.log(calculate(radiusArr, area));
console.log(calculate(radiusArr, circumference));
console.log(calculate(radiusArr, squareRoot));