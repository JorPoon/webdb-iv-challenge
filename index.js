const express = require('express');
const helmet = require('helmet');

const db = require('./data/dbConfig.js');
const Dishes = require('./dishes/dishes.js')
const Recipes = require('./recipes/recipes.js')

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

server.get('/api/dishes/:id', async (req, res) => {
    try {
        const dishId = await Dishes.getDishById(req.params.id);
        if (dishId) {
            res.status(200).json(dishId)
        } else {
            res.status(404).json({message: 'Dish not found'})
        }
    } catch (error) {
        res.status(500).json({
            message: 'Error getting dish'
        })
    }
})

server.post('/api/dishes', async (req, res) => {
    try {
        const addDish =  await Dishes.addDish(req.body)
        res.status(201).json(addDish);
    } catch (error) {
        res.status(500).json({
            Error: 'Error adding dish'
        })
    }
})

server.get('/api/recipes', async (req, res) => {
    try {
        const recipes = await Recipes.getRecipes();
        res.status(200).json(recipes);
    } catch (error) {
        res.status(500).json(error);
    }
})

server.post('/api/recipes', async (req, res) => {
    try {
        const addRecipe =  await Recipes.addRecipe(req.body)
        res.status(201).json(addRecipe);
    } catch (error) {
        res.status(500).json({
            Error: 'Error adding recipe'
        })
    }
})


const port = 5000;
server.listen(port, () =>
  console.log(`\n** API running on http://localhost:${port} **\n`)
);