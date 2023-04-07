const mainController = {

    /**
     * Génère une page HTML pour la page d'accueil.
     * Cette page affiche une chaine de caractère différente en fonction de l'heure.
     * 
     * @param {Request} request 
     * @param {Response} response 
     */
    home: (request, response) => {

        // TODO #3 : 
        // créer une variable `theme` contenant le thème enregistré dans la session de l'utilisateur
        // Ou, 'light' si il n'en avait jamais choisi.


        // On créé une un objet qui contient la date et l'heure courante
        const currentDate = new Date();
        
        // On créé une variable qu'on va remplir avec une chaine de caractère
        // en fonction de l'heure
        let isItGouterTime;

        // On rempli la variable en fonction de l'heure
        switch (currentDate.getHours()) {
            case 15:
                isItGouterTime = "Presque.... mais pas encore !";
                break;
            case 16:
                isItGouterTime = "OUI !";
                break;
            case 17:
                isItGouterTime = "OU.. Eh, non, trop tard ¯\(ツ)/¯";
                break;
            default:
                isItGouterTime = "NOPE.";
                break;
        }

        // On envoie les données aux vues.
        // TODO #3 bis : transmettre le contenu de cette variable à la vue.
        response.render('index', {
            isItGouterTime
        });
    },

    // /switch/:theme
    switchTheme: (request, response) => {
        // TODO #2 - Récupérer le thème souhaité par l'utilisateur
        
        // TODO #2 bis - Enregistrer ce thème dans la session

        // TODO #2 ter - Rédiriger l'internaute vers la page d'accueil
    }
};

module.exports = mainController;