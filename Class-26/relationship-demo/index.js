const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/relationship-db')
    .then(() => console.log('connection open'));

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    addresses: [
        {
            city: String,
            country: String,
            zipCode: Number,
            _id: false
        }
    ]
})

const User = mongoose.model('User', userSchema);

async function addAddress(userId, address) {
    const user = await User.findById(userId);
    user.addresses.push(address);
    await user.save();
    console.log('New addreess added');
}

async function main() {
    // const user = await User.create({ username: 'Max', email: 'max@gmail.com' });
    // console.log(user);
    await addAddress('68cfebe31c2851e2c5350702', { city: 'Mumbai', country: 'India', zipCode: '1436084' });
}

main();
