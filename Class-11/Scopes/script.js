function fun() { //global scope - global object : window
    const a = 100; //functional scope
    
    console.log(a);
}

var b = 100;

console.log(b);



// fun();

// console.log(a);

const a = 100; //script scope

if (true) {
    const a = 200; //block
    console.log(a);
}

console.log(a);

