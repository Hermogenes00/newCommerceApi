const knex = require('../database/connection')

class Address {

    async findAll() {
        
        let result = undefined
        
        try {
            result = await knex.select('*').table('enderecos')        
        } catch (error) {            
            result = { error }
        }

        return result
    }

    async findById(id) {
        let result = undefined
        try {
            result = await knex.select('*').where({ id: id }).table('enderecos')
            result = result.length > 0 ? result[0] : result
        } catch (error) {
            result = { error }
        }
        return result
    }

    async create(address) {

        // do working in the validations

        let result = undefined

        try {
            result = await knex.insert(address).table('enderecos')
        } catch (error) {
            result = { error }
        }

        return result
    }

    async update(address) {

        // do working in the validations

        let result = undefined

        try {
            result = await knex.update(address).where({ id: address.id }).table('enderecos')
        } catch (error) {
            result = { error }
        }

        return result
    }

    async delete(id) {

        // do working in the validations

        let result = undefined

        try {
            result = await knex.select('*').where({ id: id }).delete().table('enderecos')
        } catch (error) {
            result = { error }
        }

        return result
    }


}


module.exports = new Address()