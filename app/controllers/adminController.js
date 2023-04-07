const dataMapper = require('./dataMapper')

const adminController = {
    addStudentPage: async (req, res, next) => {
        try {
            const {
                rows
            } = await dataMapper.selectAllPromos()

            res.render('addStudent', {
                listPromos: rows
            })
        } catch (error) {
            console.log(error);
            next()
        }

    },

    addStudentPost: async (req, res, next) => {
        // on récupère les infos de l'étudiant pour les passer au dataMapper
        const studentObject = req.body;

        try {

            const result = await dataMapper.insertStudent(studentObject)

            if (result.rowCount === 0) {
                throw new Error('Aucun enregistrement créé dans la DB')
            }

            res.status(201).redirect('/promos/' + studentObject.promo + '/students')

        } catch (error) {
            console.log(error);
            const {
                rows
            } = await dataMapper.selectAllPromos()
            res.render('addStudent', {
                listPromos: rows,
                message: error
            })
        }

    },

    loginPage: (req, res, next) => {
        res.render('login')
    },

    loginPost: async (req, res, next) => {
        const payload = req.body;

        try {

            const result = await dataMapper.selectStudentByName(payload)

            if (result.rowCount === 0) {
                console.log('Aucun étudiant trouvé');
                res.redirect('back')
            }

            req.session.user = result.rows[0]
            res.redirect('/promos')

        } catch (error) {
            console.log(error);
            next()
        }

    },

    logout: (req, res, next) => {
        req.session.user = null;
        res.locals.user = null;

        res.redirect('/')
    }
}

module.exports = adminController;