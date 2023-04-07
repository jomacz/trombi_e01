
### Node Version : >=8

### QuickStart

- Créer un `.env` avec les variables nécessaires indiquées dans `.env.example`

- ```npm install``` puis ```npm run dev```


## Archi du projet

- Routes : `./router.js`
  
- Controllers : `./controllers/index.js`
- ⚠️ Le rôle des controllers est de render la view dynamisée avec la donnée, ils appellent les méthodes du dataMapper pour obtenir cette donnée

- DataMapper : `./controllers/dataMapper.js`
- ⚠️ Le rôle du dataMapper est d'effectuer les requêtes à la DB et de renvoyer le résultat tel quel (que ce soit un résultat ou une erreur)