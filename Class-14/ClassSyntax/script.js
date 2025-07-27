// Prototypes

// OOP
    // - Encapsulation

class Car{
    // first function which get called when object of this class is created.
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    // getters
    get getName() {
        return this.name;
    }

    get getPrice() {
        return this.price;
    }

    set setName(newName) {
        if (!newName || newName.length < 3) {
            throw new Error('Invalid car name');
        }
        this.name = newName;
    }

    set setPrice(newPrice) {
        if (newPrice < 0) {
            throw new Error('Invalid Price');
        }
        this.price = newPrice;
    }

}


class RacingCar extends Car {
    static xyz = "some random variable"
    constructor(name, price, topSpeed, color) {
        super(name, price);
        this.topSpeed = topSpeed;
        this.color = color;
    }

    get getTopSpeed() {
        return this.topSpeed;
    }

    get getColor() {
        return this.color;
    }

    display() {
        console.log("-----------");
        console.log(`Name : ${this.getName}`);
        console.log(`Price : ${ this.getPrice }`);
        console.log(`Color : ${this.getColor}`);
        console.log(`TopSpeed : ${this.getTopSpeed}`);
        console.log(`Random variable : ${RacingCar.xyz}`);
        console.log("-----------");
    }

    static compareTopSpeed(r1, r2) {
        if (r1.getTopSpeed < r2.getTopSpeed) {
            console.log(`${r2.getName} has higher speed than ${r1.getName}`);
        } else {
            console.log(`${r1.getName} has higher speed than ${r2.getName}`);
        }
    }
}


const ferrari = new Car('Ferrari', 1000);

// console.log(ferrari.name);

const porche = new RacingCar('Porche', 5000, 100, 'Yellow');
const bugati = new RacingCar('Bugati', 4000, 200, 'Red');

console.log(RacingCar.compareTopSpeed(porche, bugati));



