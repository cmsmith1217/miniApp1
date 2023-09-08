const express = require('express');
const knex = require('knex');
const app = express();
const port = 3001;

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json('Main Page')
})

app.get('/movies', async (req, res) => {
    await knex('movies')
    .select('*')
    .then((movies) => res.status(200).json(movies))
})

app.listen(port, () => {
    console.log(`Express server listening on port ${port}`)
})