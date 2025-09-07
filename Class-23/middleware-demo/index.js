const express = require('express');
const { BadRequestError } = require('./core/ApiErrors');

const app = express();

const verifyKey = (req, res, next) => {
    const { key } = req.query;
    if (key !== 'apple') {
        return res.send('You are requesting with a wrong key');
    }
    return next();
}

app.use((req, res, next) => {
    console.log('Inside my first middleware');
    req.username = 'max';
    next();
    console.log('Inside my first middleware after calling next');
});

app.use((req, res, next) => {
    console.log('Inside my second middleware');
    next();
    console.log('Inside my second middleware after calling next');
});

app.get('/hello', (req, res) => {
    console.log('hello route');
    const { username } = req;
    if (true) {
        throw new BadRequestError('Throwing it deliberatly');
    }
    res.send(`Hello from ${username}`);
});

app.get('/secret', verifyKey,  (req, res) => {
    res.send('Sometime i wear headphones in public so that i dont have to talk to anyone');
});

// global error handling middleware
app.use((err, req, res, next) => {
    const { message = 'Something went wrong', status = 500 } = err;
    // sanitisaton
    res.status(status).json({ message });
});

app.listen(1234, () => {
    console.log('server started at port 1234');
})