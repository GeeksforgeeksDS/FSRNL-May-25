const cat = require('./cat');
const dog = require('./dog');
const person = require('./person');

module.exports = {
    ...cat,
    dog,
    person
}

