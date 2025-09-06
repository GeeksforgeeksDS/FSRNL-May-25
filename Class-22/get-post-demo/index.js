const express = require('express');
const path = require('path');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// console.log(__dirname);
// console.log(process.cwd());

app.get('/', (req, res) => {
    console.log(path.join(__dirname, 'index.html'));
    res.sendFile(path.join(__dirname, 'index.html'))
});

app.get('/users', (req, res) => {
    console.log(req.query);
    res.send('GET ENDPOINT');
});

app.post('/users', (req, res) => {
    console.log(req.body);
    res.send('POST ENDPOINT');
});

app.listen(1234, () => {
    console.log('server started at port 1234');
})