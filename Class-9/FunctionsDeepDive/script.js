

console.log('START');

console.log(a);

// ...500 lines 

let a = 100;

fun();

function fun() {
    console.log(b);

    f();

    function f() {
        console.log('inside f');
    }

    var b = 200;
    console.log('inside fun');
}

console.log('END');








