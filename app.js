import express from 'express';
import router from './routes/index.js';
import path from 'path';
import { fileURLToPath } from 'url';

// set up the root directory reference
// find the global URL using fileURLToPath
// and then turn that into the __dirname (something like users/desktop)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__dirname);

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));

// tell app to use the router file
app.use('/', router);

app.listen(port, () => {
    console.log(`App is running at ${port}/`);
});