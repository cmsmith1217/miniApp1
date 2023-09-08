const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json('Main Page')
})

app.listen(port, () => {
    console.log(`Express server listening on port ${port}`)
})