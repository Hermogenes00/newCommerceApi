const { findById, create, update, exclude, findAll } = require('../commom/commomModel')

let knex = require('../database/connection')

class Company {

    async findById(id) {
        let result = undefined
        try {
            result = await knex.select('*').where({ id: id }).table('empresas')
            result = result.length > 0 ? result[0] : []

        } catch (error) {
            result = { error }
        }
        return result
    }

    async create(company) {

        let result = undefined

        try {
            result = await knex.insert(company).table('empresas')
        } catch (error) {
            result = { error }
        }

        return result
    }

    async update(company) {

        let result = undefined

        try {
            result = await knex.update(company).where({ id: company.id }).table('empresas')
        } catch (error) {
            result = { error }
        }

        return result
    }

    async delete(id) {

        let result = undefined

        try {
            result = await knex('empresas').select('*').where({ id: id }).del()
        } catch (error) {
            result = { error }
        }
        
        return result
    }
}



module.exports = new Company()