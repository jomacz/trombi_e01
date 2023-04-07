const dataMapper = require('./dataMapper')

const studentController = {
    // GET monsite.com/promos/:id/students
    // syntaxe avec Promesse
    getStudentsByPromoIdPromise: (req, res, next) => {

        const promoId = req.params.id;

        client.query('SELECT * FROM student WHERE promo_id = $1', [promoId]).then((result) => {

            const listStudentsPromo = result.rows;

            client.query('SELECT * FROM promo WHERE id = $1', [promoId]).then((result) => {
                const promo = result.rows[0];

                res.status(200).render('studentsPerPromo', {
                    promo: promo.name,
                    listStudentsPromo,
                    message: 'OK'
                })

            }).catch((error) => {
                console.log(error);
                next()
            })
        }).catch((error) => {
            console.log(error);
            next()
        })

    },
    // syntaxe avec async/await
    // GET monsite.com/promos/:id/students
    getStudentsByPromoId: async (req, res, next) => {
        const promoId = req.params.id;

        try {
            const queryPromo = {
                text: 'SELECT * FROM promo WHERE id = $1',
                values: [promoId]
            }

            // après sanitize pg va construire la requête et l'envoyer à la db =>

            // pour cette url :

            // localhost/promos/2

            // on déclarerait notre objet query de cette manière :

            //  const query = {
            //     text: 'SELECT * FROM promo WHERE id = $1',
            //     values: [promoId]
            // }

            // et pg construirait la requête finale comme ceci :

            // query = 'SELECT * FROM promo WHERE id = "2"'

            const result = await client.query(queryPromo)
            const promo = result.rows[0]
            // ou on récupère directement la promo en une seule ligne
            // const promo = (await client.query('SELECT * FROM promo WHERE id = $1', [promoId])).rows[0]

            const queryStudents = {
                text: 'SELECT * FROM student WHERE promo_id = $1',
                values: [promoId]
            }

            const data = await client.query(queryStudents)
            const listStudentsPromo = data.rows

            res.status(200).render('studentsPerPromo', {
                listStudentsPromo,
                promo: promo.name,
                message: 'OK'
            })

        } catch (error) {
            console.log(error);
            next()
        }
    },
    // toujours la même méthode mais cette fois ci avec le dataMapper
    studentsPage: async (req, res, next) => {
        const id = req.params.id;

        try {
            const result = await dataMapper.selectStudentsByPromoId(id)
            res.render('studentsPerPromo', {
                listStudentsPromo: result.rows,
                message: 'OK'
            })
        } catch (error) {
            console.log(error);
            next()
        }
    }
}

module.exports = studentController;