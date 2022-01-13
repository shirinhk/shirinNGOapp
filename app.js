import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello from Express! hello I am Dev')
})

app.get('/joe', (req, res) => {
    res.send(`this is Joe's page`);
})

app.get('/john', (req, res) => {
    res.send(`all about John`);
})

app.listen(port, () => {
    console.log(`App is running at ${port}/`);
});