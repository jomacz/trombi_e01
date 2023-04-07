// on charge no variables de notre .env dans process.env
require('dotenv').config()

// on importe la classe Client depuis le module pg
const {
    Client
} = require('pg')

// on initialise une nouvelle connexion à notre BDD grâce à notre URI de connexion renseignée dans le .env
const client = new Client(process.env.PG_URI)

// on vérifie que pg arrive bien à s econnecter à notre BDD
client.connect()
    .then(console.log("✅ CONNECTE A LA DB !"))
    .catch((error) => {
        console.log("🚨 :", error)
    })

// exécution d'une requête avec callback
// client.query('SELECT * FROM promo LIMIT 10', (error, result) => {
//     if (error) {
//         console.trace(error);
//             client.end()
//     }
//     if (result) {
//         console.log(result.rows);
//     }
// })

// exécution d'une requête avec Promise
client.query('SELECT * FROM promo LIMIT 10')
    .then((result) => {
        console.log(result.rows);
        client.end()
    })
    .catch((error) => {
        console.trace(error)
    })


// exécution d'une requête avec async/await
// async function getPromos() {
//     const result = await client.query('SELECT * FROM promo LIMIT 3')
//     console.log(result.rows);
//     client.end()
// }

// try {
//     getPromos()
// } catch (error) {
//     console.log(error);
// }