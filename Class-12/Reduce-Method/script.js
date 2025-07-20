const nums = [1, 2, 3, 4, 5, 6, 7];

const sum = nums.reduce((acc, curr) => acc + curr, 0);

console.log(sum);

// acc = 28
// curr

const cart = [
    {
        title: 'Shoes',
        qty: 2,
        price: 20.5
    },
    {
        title: 'Goggles',
        qty: 1,
        price: 10.5
    },
    {
        title: 'T-Shirt',
        qty: 2,
        price: 5.5
    },
];


const totalAmount = cart.reduce((acc, curr) => acc + curr.qty * curr.price, 0);
console.log(totalAmount);

// Question
const arr = [[1, 2, 3, 4], [4, 5], [4, 3, 2], [32, 3]];
// [1, 2, 3, 4, 4, 5, 4, 3, 2, 32, 3]