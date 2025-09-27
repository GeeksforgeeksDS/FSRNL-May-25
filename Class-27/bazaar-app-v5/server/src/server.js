import express from 'express';
import mongoose from 'mongoose';
import Product from './models/Product.js';
import { BadRequestError, NotFoundError, AuthenticationError } from './core/ApiError.js';
import cors from 'cors';
import Review from './models/Review.js';
import User from './models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const JWT_SECRET = "FD86118B3687B5773B193B215274F";

const app = express();
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5173'],
    methods: ['GET', 'POST', 'PATCH', 'PUT' ,'DELETE']
}))

mongoose.connect('mongodb://127.0.0.1:27017/bazaar-db')
    .then(() => console.log('connection open'))
    .catch((err) => console.log(err));

// get all products
app.get('/products', async(req, res) => {
    // we should have pagination here.
    const products = await Product.find({});
    res.json(products);
});


// create product
app.post('/products', async(req, res) => {
    const { title, description, image, price } = req.body;
    await Product.create({ title, description, image, price });
    res.json({ message: 'Product created successfully' });
});


// get a product
app.get('/products/:productId', async(req, res) => {
    const { productId } = req.params;
    const product = await Product.findById(productId)
        .populate('reviews');
    if (!product) {
        throw new NotFoundError('Product not found');
    }
    res.json(product);
});

app.patch('/products/:productId', async(req, res) => {
    const { productId } = req.params;
    const { title, description, price, image } = req.body;
    await Product.findByIdAndUpdate(productId, { title, description, price, image });
    res.json({ message: 'Product updated successfully' });
});

app.delete('/products/:productId', async(req, res) => {
    const { productId } = req.params;
    await Product.findByIdAndDelete(productId);
    res.json({ message: 'product delete successfully' });
}); 

// Reviews Route
app.post('/products/:productId/reviews', async (req, res) => {
    const { productId } = req.params;
    const { rating, review } = req.body;
    const product = await Product.findById(productId);
    if (!product) {
        throw new NotFoundError('Product not found');
    }
    const newReview = await Review.create({ rating, review });

    product.reviews.push(newReview._id);

    await product.save();
    res.json({ message: 'Review created successfully' });
});


// ----------------------- Authentication----------------

// Register route

app.post('/register', async (req, res) => {
    const { username, email, password, role } = req.body;
    // check if username already exists
    const user = await User.findOne({ username });

    if (user) {
        throw new BadRequestError('User with this username already exists');
    }
    // hash the password and create the user
    const hash = await bcrypt.hash(password, 12);

    // creating the user in the database
    await User.create({ username, password: hash, email, role });
    
    res.status(201).json({ message: 'User registered successfully' });
});

// Login Route
app.post('/login', async(req, res) => {
    const { username, password } = req.body;

    // checks if user with this username exists in the database.
    const user = await User.findOne({ username });

    if (!user) {
        throw new AuthenticationError('Username or password is incorrect');
    }

    // check if password is correct.
    const isValid = bcrypt.compare(password, user.password);

    if (!isValid) {
        throw new AuthenticationError('Username or password is incorrect');
    }

    // create a token - jsonwebtoken - jwt
    const token = jwt.sign({ userId: user._id }, JWT_SECRET);

    res.status(200).json({ token });
})




// global error handling middleware
app.use((err, req, res, next) => {
    const { message = 'Something went wrong', status = 500 } = err;
    // sanitisaton
    res.status(status).json({ message });
});

app.listen(1234, () => {
    console.log('server is started at port 1234');
})