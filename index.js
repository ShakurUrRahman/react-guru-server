const express = require('express')
const app = express();
const port = process.env.PORT || 5000;

const categories = require('./data/categories.json')

app.get('/', (req, res) => {
    res.send('React GURU API is running');
});

app.get('/react-categories', (req, res) => {
    res.send(categories)
})

app.listen(port, () => {
    console.log('React GURU server is running on port', port);
})