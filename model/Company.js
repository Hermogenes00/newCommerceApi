const { findById, create, update, exclude, findAll } = require('../commom/commomModel')
let knex = require('../database/connection')

class Company {


    async findAll() {
        let result = undefined
        try {
            result = await findAll('empresas')
        } catch (error) {
            result = { error }
        }
        return result
    }

    async findById(id) {
        let result = undefined
        try {
            result = await findById(id,'empresas')
        } catch (error) {
            result = { error }
        }
        return result
    }

    async create(company) {

        let result = undefined

        try {
            result = await create(company,'empresas')
        } catch (error) {
            result = { error }
        }

        return result
    }

    async update(company) {

        let result = undefined

        try {
            result = await update(company,'empresas')
        } catch (error) {
            result = { error }
        }

        return result
    }

    async delete(id) {

        let result = undefined

        try {
            result = await exclude(id,'empresas')
        } catch (error) {
            result = { error }
        }
        
        return result
    }
}



module.exports = new Company()