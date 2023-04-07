const listPromos = require('../data/promos.json')
const listStudents = require('../data/students.json')


const promoController = {
    getAllPromos: (req, res) => {
        res.render('promos', {
            listPromos
        })
    },
    getPromoById: (req, res, next) => {
        // on récupère l'id de la promo souhaitée via les paramètres d'url
        const id = req.params.id

        // je recherche dans mon tableau la première occurence (voir différence .find() et .filter()) qui correspond à ma condition dans mon .find à savoir que l'id de la promo corresponde à l'id récupéré via mon url
        const promo = listPromos.find(promo => promo.id == id)

        // .find() me retourne soit l'item du tableau qui correspond à ma condition, soit 'undefined' si aucun ne correspond

        // on gère d'abord le cas d'erreur dans lequel .find() retournerai 'undefined'
        if (promo == undefined) {
            next()
        }
        // si mon if n'est pas lu, alors je peux envoyer la page demandée en réponse en lui fournissant les données de la promo
        res.render('promoDetails', {
            promo
        })
    }
}

const studentController = {
    // GET monsite.com/promos/:id/students
    getStudentsByPromoId: (req, res, next) => {
        let message = 'OK'

        const idPromo = req.params.id;

        const promo = listPromos.find(promo => promo.id == idPromo)

        const listStudentsPromo = listStudents.filter(student => student.promo == idPromo);

        if (listStudentsPromo == undefined || promo == undefined) {
            next();
        }

        if (listStudentsPromo.length == 0) {
            console.log('Aucun étudiant dans cette promo');
            message = 'Aucun étudiant dans cette promo'
        }

        res.status(200).render('studentsPerPromo', {
            listStudentsPromo,
            promo: promo.name,
            message
        });
    }
}

module.exports = {
    promoController,
    studentController
}