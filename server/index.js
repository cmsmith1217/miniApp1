const express = require('express');
const knex = require('knex')
    (require('./knexfile.js')['development']);
const app = express();
const cors = require('cors');
const port = 3001;


app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.status(200).json('Main Page')
})

app.get('/movies', async (req, res) => {
    console.log('fetching movies')
    await knex('movies')
    .select('*')
    .then((movies) => {
        console.log('expressFetchMovies: ', movies)
        res.status(200).json(movies)
        
    })
})

app.listen(port, () => {
    console.log(`Express server listening on port ${port}`)
})