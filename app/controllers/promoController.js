const dataMapper = require('./dataMapper')

const promoController = {
    promosPage: async (req, res, next) => {
        // monsite.com/promos/?limit=10
        const urlQuery = req.query.limit
        try {
            let result;
            if (urlQuery) {
                result = await dataMapper.selectAllPromos(urlQuery)
            } else {
                result = await dataMapper.selectAllPromos()
            }
            res.render('promos', {
                listPromos: result.rows
            })
        } catch (error) {
            console.log(error);
            next()
        }
    },
    promoPage: async (req, res, next) => {
        const id = req.params.id;

        try {
            const result = await dataMapper.selectPromoById(id)
            res.status(200).render('promoDetails', {
                promo: result.rows[0]
            })
        } catch (error) {
            console.log(error);
            next()
        }
    }
}

module.exports = promoController;