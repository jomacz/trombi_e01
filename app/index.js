const express = require('express')
const app = express()
const session = require('express-session')
// dotenv.config nous permet d'accéder à nos variables d'environnement (définies dans le .env) via process.env.NOM_DE_LA_VARIABLE
require('dotenv').config()

const router = require('./router')

const PORT = process.env.PORT

// non nécessaire car le dossier 'views' est à la même racine que le fichier actuel (index.js)
app.set('views', './views')
app.set('view engine', 'ejs')

app.use(session({
    secret: "Promo Uranium",
    resave: true,
    saveUninitialized: true,
    cookie: {
        secure: false,
        maxAge: (1000 * 60 * 60) // = 1h en millisecondes car on spécifie tjrs en millisecondes
    }
}))

// le middleware urlencoded va parser les données de formulaires reçues au format 'urlencoded' et nous permettre d'y accéder via req.body
app.use(express.urlencoded({
    extended: true
}))

app.use(express.static('./public'))

// exemple cookies
// app.get('/cookies', (req, res) => {
//     console.log(req.headers.cookie);
//    si on veut accéder a une clé en particulier du cookie, on aura besoin d'utiliser le middleware 'cookie-parser'
//     // => message=Coucou; nom=Charly
//     res.status(200).json({
//         message: 'Votre message cookie : ' + req.headers.cookie
//     })
// })

// ici toutes nos requêtes sont gérées/ aiguillées par le routeur
app.use(router)

app.listen(PORT, () => {
    console.log('Website up at : ' + 'http://localhost:' + PORT);
})