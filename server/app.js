import express from 'express';
import bodyParser from 'body-parser';
import * as db from './utils/DataBaseUtils';
import { serverPort } from '../config.json';

db.setUpConnection();

const app = express();
app.use(bodyParser.json());

app.get('/', (req,res) => {
   res.send('Hello, Moto!');
});

app.get('/images', (req, res) => {
    db.listImages().then(data => res.send(data));
});

app.post('/images', (req, res) => {
    db.createImage(req.body).then(data => res.send(data));
});

app.delete('/images/:id', (req, res) => {
    db.deteteImage(req.params.id).then(data => res.send(data));
});

const server = app.listen(serverPort, () => {
    console.log('Server is up and running on port ${serverPort}'); //TODO: Template literals doesn't work
});