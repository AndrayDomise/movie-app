const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const store = {};

app.post('/liked', (req, res) => {
    const movie = req.body;
    store[movie.id] = movie;
    console.log(store);
    res.status(201).send();
});

app.post('/unlike', (req, res) => {
    const movie = req.body;
    delete store[movie.id];
    res.status(200).send();
});


app.get('/liked', (req, res) => {
    res.send(Object.values(store));
});


app.listen(8080);
console.log('listening on port 8080...')