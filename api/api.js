const express = require('express');
const app = express();

const pokemonData = require('./data.json')

app.get('/api/pokemon', (req, res) => {
    res.json(pokemonData);
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`API running at: http://localhost:${PORT}`);
    console.log(`API endpoint for Pokémon data: http://localhost:${PORT}/api/pokemon`);
});
