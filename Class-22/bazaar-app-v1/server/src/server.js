import express from 'express';
import { v4 as uuid } from 'uuid';

const app = express();
app.use(express.json());

const products = [
    {
        id: uuid(),
        title: "Macbook Air M1",
        price: 100,
        image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFjYm9va3xlbnwwfHwwfHx8MA%3D%3D",
        description: "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development."
    },
    {
        id: uuid(),
        title: "Macbook Air M2",
        price: 200,
        image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFjYm9va3xlbnwwfHwwfHx8MA%3D%3D",
        description: "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development."
    },
    {
        id: uuid(),
        title: "Macbook Air M3",
        price: 300,
        image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFjYm9va3xlbnwwfHwwfHx8MA%3D%3D",
        description: "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development."
    },
    {
        id: uuid(),
        title: "Macbook Air M4",
        price: 400,
        image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFjYm9va3xlbnwwfHwwfHx8MA%3D%3D",
        description: "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development."
    }
];

// get all products
app.get('/products', (req, res) => {
    // we should have pagination here.
    res.json(products);
});


// create product
app.post('/products', (req, res) => {
    const { title, description, image, price } = req.body;
    products.push({id: uuid(), title, description, image, price });
    res.json({ message: 'Product created successfully' });
});


// get a product
app.get('/products/:productId', (req, res) => {
    const { productId } = req.params;
    const product = products.find((product) => product.id === productId);
    if (!product) {
        throw new Error('Product not found');
    }
    res.json(product);
});

app.patch('/products/:productId', (req, res) => {
    const { productId } = req.params;
    const { title, description, price, image } = req.body;
    const product = products.find((product) => product.id === productId);
    
    product.title = title;
    product.description = description;
    product.image = image;
    product.price = price;

    res.json({ message: 'Product updated successfully' });
});

app.delete('/products/:productId', (req, res) => {
    const { productId } = req.params;

    const index = products.findIndex((product) => product.id === productId);

    if (index == -1) {
        throw new Error('Product not found');
    }
    
    products.splice(index, 1);

    res.json({ message: 'product delete successfully' });
});  


app.listen(1234, () => {
    console.log('server is started at port 1234');
})