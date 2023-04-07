const authMiddleware = (req, res, next) => {

    if (!req.session.user) {
        res.render('404', {
            message: 'Vous devez être connecté pour accéder à cette page'
        })
    } else {
        res.locals.user = req.session.user
        next()
    }
}

const adminMiddleware = (req, res, next) => {
    if (req.session.user.first_name == 'ADMIN' && req.session.user.last_name == "ADMIN") {

        next()

    } else {
        res.render('404', {
            message: 'Vous devez être ADMIN pour accéder à cette page'
        })
    }
}

module.exports = {
    authMiddleware,
    adminMiddleware
};