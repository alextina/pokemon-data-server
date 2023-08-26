const express = require('express');
const cors = require('cors');
const app = express();
const pokemonData = require('./data.json');
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    const isLocalhost = req.hostname === 'localhost';
    const serverUrl = isLocalhost ? `http://localhost:${PORT}` : `https://${req.hostname}`;
    const message = "Welcome to the Pokémon API";
    const dataLink = `${serverUrl}/api/pokemon`;
    
    const html = `
        <html>
        <head>
            <title>Pokémon API</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: white;
                    text-align: center;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height:100vh;
                }
                .container {
                    width: 60%;
                }
                h1 {
                    color: #333;
                }
                h5 {
                    color: #666;
                }
                p {
                    color: #666;
                }
                a {
                    color: #007bff;
                    text-decoration: none;
                }
</style>
        </head>
        <body>
            <div class="container">
                <h1>${message}</h1>
                <p>Pokémon data is available at: </br> <a href="${dataLink}">${dataLink}</a></p>
                <h5>© 2023 <a href="https://alextina.pe" target="_blank">www.alextina.pe</a></h5>    
            </div>
        </body>
        </html>
    `;
    
    res.send(html);
});

app.use(cors()); 

app.get('/api/pokemon', (req, res) => {
    res.json(pokemonData);
})

app.listen(PORT, () => {
    if (!process.env.PORT) {
        console.log(`API running at port: http://localhost:${PORT}/`);
    }
});