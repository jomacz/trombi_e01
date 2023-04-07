const client = require('../utils/db_config')

const dataMapper = {
    selectAllPromos: async (limit) => {

        let result;
        if (limit) {
            result = await client.query("SELECT * FROM promo LIMIT $1", [limit])
        } else {
            result = await client.query("SELECT * FROM promo ORDER BY name ASC")
        }

        return result
    },

    selectPromoById: async (id) => {

        // soit avec un objet query

        // const query = {
        //     text : 'SELECT',
        //     values : [id]
        // }
        // return await client.query(query)

        // soit tout directement dans le .query
        return await client.query('SELECT * FROM promo WHERE id = $1', [id])
    },

    selectStudentsByPromoId: async (id) => {
        return await client.query('SELECT * FROM student WHERE promo_id = $1', [id])
    },

    insertStudent: async (studentObject) => {
        // ici on utilise la déstructuration d'objet javascript qui nous permet de récupérer dans une ou plusieurs variables, la ou les valeurs des propriétés d'un objet
        // ça nous permet de récupérer rapidement les valeurs souhaités sans avoir à assigner comme valeur à une variable l'objet intégral
        const {
            promo,
            first_name,
            last_name,
            github_username,
        } = studentObject;

        const query = {
            text: 'INSERT INTO student (first_name, last_name, github_username, promo_id) VALUES ($1, $2, $3, $4);',
            values: [first_name, last_name, github_username, promo]
        }

        return await client.query(query)
    },

    selectStudentByName: async (payload) => {
        const {
            last_name,
            first_name
        } = payload;

        const query = {
            text: 'SELECT * FROM student WHERE first_name = $1 AND last_name = $2',
            values: [first_name, last_name],
        }

        return await client.query(query)
    }
}

module.exports = dataMapper;