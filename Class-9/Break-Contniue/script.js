
// console.log('START');

// for (let i = 1; i <= 10; i++){
//     if (i === 5) {
//         break; // takes you out of the innermost loop
//         console.log(i);
//     }
//     console.log(i);
// }

// console.log('END');



console.log('START');

for (let i = 1; i <= 10; i++){
    if (i === 5) {

        const a = 10;
        const b = 20;

        const res = a + b;
        console.log(res);
        
        continue; // skip the code below it and moves to the next iteration
        console.log(i);
    }
    console.log(i);
}

console.log('END');