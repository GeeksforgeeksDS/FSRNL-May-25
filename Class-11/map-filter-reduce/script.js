function square(num) {
    return num ** 2;
}

const nums = [1, 2, 3, 4, 5, 6, 7];

const squaredNums = nums.map(square);

console.log(squaredNums);

// ------------------------ write a function

const amountBreakUps = [122.32674, 56.3176, 127.13678, 1376834.242764276, 362737.237347];

// [122.32, 56.31, 127.13, 1376834.24, 362737.23]

const fixedAmountBreakUps = amountBreakUps.map((amount) => parseFloat(amount.toFixed(2))); 
console.log(fixedAmountBreakUps);

const isEven = num => num % 2 === 0;

const evenNums = nums.filter(isEven);

console.log(evenNums);



const menu = [
    "Chicken Biryani",
    "Onion Pizza",
    "Garlic Naan",
    "Egg Curry",
    "Sambhar",
    "Paneer Roll",
    "Kadhai Paneer",
    "Dal Baati Churma",
    "Gajar Ka Halwa",
    "Chicken Curry",
    "Onion Dosa",
    "Chilli Garlic Noodles",
    "Sabudana Khichdi",
    "Onion Samosa",
    "Chhole Bhature",
    "Egg Biryani",
    "Kebab Parantha",
    "Egg Bhurji"
]


const isVeg = (food) => {
    if (food.toLowerCase().includes('chicken') || food.toLowerCase().includes('egg')) {
        return false;
    }
    return true;
}

const isOnionGarlicFree = (food)=>{
     if (food.toLowerCase().includes('onion') || food.toLowerCase().includes('garlic')) {
        return false;
    }
    return true;
}


// vegMenu - should not contain chicken and egg
// jainMen - should be veg && should not contain onion and garlic

const vegMenu = menu.filter(isVeg);
const jainMenu = vegMenu.filter(isOnionGarlicFree);

const nonVegMenu = menu.filter((food) => !isVeg(food));

console.log(menu);
console.log(vegMenu);
console.log(jainMenu);
console.log(nonVegMenu);