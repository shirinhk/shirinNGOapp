import express from 'express';
const router = express.Router();

import path from 'path';
import { fileURLToPath } from 'url';

// set up the root directory reference
// find the global URL using fileURLToPath
// and then turn that into the __dirname (something like users/desktop)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//this is equivalent to index.html
router.get('/', (req, res) => {
    //res.send('Hello from Express! hello I am Dev');
    res.sendFile(path.join(__dirname, '../views/index.html'));
})

router.get('/joe', (req, res) => {
    res.send(`this is Joe's page`);
    //res.sendFile(path.join(__dirname, '../views/index.html'));
})

router.get('/john', (req, res) => {
    res.send(`all about John`);
    //res.sendFile(path.join(__dirname, '../views/index.html'));
})

// this catches broken routes - requests for resources that do not 
router.use((req, res) => {
    console.log('page does not exist');
    res.sendFile(path.join(__dirname, '../views/404.html'));

})



export default router;