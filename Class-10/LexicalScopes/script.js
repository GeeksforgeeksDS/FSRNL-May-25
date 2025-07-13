

function fun(){
    let a=100;
    function innerFun(){
        console.log(a);
    }
    innerFun();
}

fun()


const name = 'Sarah';

function sayHello(){
    console.log(name);
}

function sayName(){
    const name = 'Max';
    sayHello();
    console.log(name);
}

sayName();