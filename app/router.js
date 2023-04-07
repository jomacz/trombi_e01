const express = require('express')
const router = express.Router()

const promoController = require('./controllers/promoController')
const studentController = require('./controllers/studentController')
const adminController = require('./controllers/adminController.js')

const {
    adminMiddleware,
    authMiddleware
} = require('./middlewares/auth.js')

// exemple de donnée de listPromos :

//  [...,{ 
//  id: 498, 
//  name: 'Asupprimer', 
//  github_organization: 'https://github.com/O-clock-Titre-Pro'
// }, ...]


// mon router intercepte la requête si la méthode et l'url correspondent à la route
router.get('/', (req, res) => {
    res.render('home')
})

router.get('/promos', authMiddleware, promoController.promosPage)

// http://localhost:3000/promos/16
// => doit afficher les infos d'une seule promo selon son id
router.get('/promos/:id', authMiddleware, promoController.promoPage)

// pour récupérer tous les étudiants de l'école
// router.get('/students')

// ici on veut récupérer tous les étudiants d'une promo donnée (en précisant l'id de la promo)
router.get('/promos/:id/students', authMiddleware, studentController.studentsPage)

router.get('/login', adminController.loginPage)
router.post('/login', adminController.loginPost)

router.get('/logout', authMiddleware, adminController.logout)

router.get('/admin/addStudent', authMiddleware, adminMiddleware, adminController.addStudentPage)
router.post('/admin/addStudent', authMiddleware, adminMiddleware, adminController.addStudentPost)

// cette route est une route "catchAll" qui va gérer toute requête qui n'aura pas été interceptée par une route plus haut dans le code
router.use((req, res) => {
    res.status(404).render('404')
})

module.exports = router;