let knex = require('../database/connection')

class Category {

    async findAll() {
        let result = undefined
        try {
            result = await knex.select('*').table('categorias')
        } catch (error) {
            result = { error }
        }

        return result
    }

    async findById(id) {
        let result = undefined
        try {
            result = await knex.select('*').where({ id: id }).table('categorias')
            result = result.length > 0 ? result[0] : result
        } catch (error) {
            result = { error }
        }

        return result
    }

    async create(category) {
        //do working in the validations
        let result = undefined

        try {
            result = await knex.insert(category).table('categorias')
        } catch (error) {
            result = { error }
        }

        return result
    }

    async update(category) {
        //do working in the validations
        let result = undefined

        try {
            result = await knex.update(category).where({ id: category.id }).table('categorias')
        } catch (error) {
            result = { error }
        }

        return result
    }

    async delete(id) {
        //do working in the validations
        let result = undefined

        try {
            result = await knex.select('*').where({ id: id }).delete().table('categorias')
        } catch (error) {
            result = { error }
        }

        return result
    }
}


module.exports = new Category()