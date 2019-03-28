const express = require('express');
const helmet = require('helmet');

const db = require('./data/dbConfig.js');
const Dishes = require('./dishes/dishes.js')

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/api/dishes', async (req, res) => {
    try {
        const dishes = await Dishes.getDishes();
        res.status(200).json(dishes);
    } catch (error) {
        res.status(500).json(error);
    }
})


const port = 5000;
server.listen(port, () =>
  console.log(`\n** API running on http://localhost:${port} **\n`)
);