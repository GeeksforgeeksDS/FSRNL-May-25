const express = require('express');
const app = express();

// app.use((req, res) => {
//     res.send("<h1>Hello from server</h1>")
// });

//  Routing
app.get('/cat', (req, res) => {
    res.send('Meoooww Meeeooww');
});

app.get('/dog', (req, res) => {
    res.send('Wooof Wooof');
});

app.get('/greet', (req, res) => {
    res.send('Hello there 👋');
});

// app.get('/r/cat', (req, res) => {
//     res.send('Cat subredit');
// })

// app.get('/r/dog', (req, res) => {
//     res.send('Dog subredit');
// })

// app.get('/r/apples', (req, res) => {
//     res.send('Apples subredit');
// })

// subredit -> path parameter
app.get('/r/:subredit', (req, res) => {
    const { subredit } = req.params;
    res.send(`You are looking for ${subredit} subreditt`);
});

app.get('/search', (req, res) => {
    const { q } = req.query;
    //make database call 
    res.send(`You are searching for ${q}`);
});

app.get('/products/:productId', (req, res) => {
    const { productId } = req.params;
    res.send(`You are looking for a product with id ${productId}`);
})

app.listen(1234, () => {
    console.log('server started at port 1234');
});