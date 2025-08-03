const btn = document.querySelector('#btn');
const divs = document.querySelectorAll('section div');
const input = document.querySelector('input');
const form = document.querySelector('form');
const articles = document.querySelectorAll('article');
const h1 = document.querySelector('h1');

function scream() {
    console.log('screaming...')
}

function shout() {
    console.log('Shout...')
}

// Approach of adding an event
// btn.onclick = scream;
// btn.onclick = shout;

// Better way of adding events : addEventListener

btn.addEventListener('click', scream);
btn.addEventListener('click', shout);
btn.addEventListener('click', colorize);

// Common type of events

for (let div of divs) {
    div.addEventListener('mouseenter', function () {
        div.style.backgroundColor = 'aqua';
    })
    div.addEventListener('mouseleave', function () {
        div.style.backgroundColor = null;
    })
}

// -------------------keyboard events-----------------

input.addEventListener('keyup', function (event) {
    if (event.key === "Enter") {
        console.log(input.value);
    }
});


// -------------------Form Events
form.addEventListener('submit', function (event) {
    event.preventDefault();
    const username = form.elements[0].value;
    const age = form.elements[1].value;
    console.log(username, age);
})

// rgb(R, G, B)
// R, G , B = 0 - 255 => 256 value
// 


function getRandomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function colorize() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    this.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}


// for (let article of articles) {
//     article.addEventListener('click', function () {
//         article.style.backgroundColor = getRandomRGB();
//     })
// }



for (let article of articles) {
    article.addEventListener('click', colorize)
}

h1.addEventListener('click', colorize);


