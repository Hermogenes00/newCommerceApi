const { findById, create, update, exclude, findAll } = require('../commom/commomModel')


class Product {


    async findAll() {
        let result = undefined
        try {
            result = await findAll('produtos')
        } catch (error) {
            result = { error }
        }
        return result
    }

    async findById(id) {
        let result = undefined
        try {
            result = await findById(id,'produtos')
        } catch (error) {
            result = { error }
        }
        return result
    }

    async create(company) {

        let result = undefined

        try {
            result = await create(company,'produtos')
        } catch (error) {
            result = { error }
        }

        return result
    }

    async update(company) {

        let result = undefined

        try {
            result = await update(company,'produtos')
        } catch (error) {
            result = { error }
        }

        return result
    }

    async delete(id) {

        let result = undefined

        try {
            result = await exclude(id,'produtos')
        } catch (error) {
            result = { error }
        }
        
        return result
    }
}



module.exports = new Product()