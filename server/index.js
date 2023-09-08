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
    let movieNameSearch = req.query;
    let hasQuery;
    for (let prop in movieNameSearch) {
        if (Object.hasOwn(movieNameSearch, prop)) {
            hasQuery = true;
        }
    }
    if(hasQuery === true) {
        console.log('running query')
        knex('movies')
            .select('*').where('name', 'ilike', `%${movieNameSearch.name}%`)
            .then((movies) => res.status(200).json(movies))
    } else {
        console.log('fetching movies')
        await knex('movies')
        .select('*')
        .then((movies) => {
            console.log('expressFetchMovies: ', movies)
            res.status(200).json(movies)
        })
    }
})

app.post('/movies', (req, res) => {
    const newMovieEntry = req.body;
    console.log(newMovieEntry)
    knex('movies')
        .insert(newMovieEntry)
        .then(() => {
            res.status(201).json(`Your media entry, ${newMovieEntry.name}, has been created.`)
            // req.session.package = req.body
        })
})

app.delete('/movies', (req, res) => {
    var id = parseInt(req.query.id);
    console.log(id)
    knex('movies')
        .where('id', id)
        .del()
        .then(() => res.json(`Media entry with the id ${id} has been deleted.`))
})

app.listen(port, () => {
    console.log(`Express server listening on port ${port}`)
})