const a = 10;
const b = 20;

const res = a + b;

console.log(res);



function fun() {
    console.log('Inside fun');
}

fun();


class Person{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const p = new Person("Max", 25);

console.log(p);