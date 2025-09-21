import express from 'express';
import mongoose from 'mongoose';
import Product from './models/Product.js';
import { NotFoundError } from './core/ApiError.js';
import cors from 'cors';
import Review from './models/Review.js';

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

// global error handling middleware
app.use((err, req, res, next) => {
    const { message = 'Something went wrong', status = 500 } = err;
    // sanitisaton
    res.status(status).json({ message });
});

app.listen(1234, () => {
    console.log('server is started at port 1234');
})