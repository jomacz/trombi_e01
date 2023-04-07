const express = require('express');
// TODO #1 
// Require le module express-session. 

const router = require('./app/router');

require('dotenv').config();

// Initialisation d'Express
const app = express();
const port = process.env.PORT;

// Cofiguration d'Express
app.set('view engine', 'ejs');
app.set('views', __dirname + '/app/views');

// Middlewares
app.use(express.static('public'));

// TODO #1 bis
// configurer Express pour qu'il utilise les sessions. 


app.use(router);

// Démarrage du serveur
app.listen(port, () => {
    console.log(`Je suis lancé, visite http://localhost:${port}`);
});