const knex = require('../database/connection')
const Order = require('../model/Order')

class Client {

    async findAll() {

        let result = undefined

        try {
            result = await knex.select('*').table('clientes')
        } catch (error) {
            result = {
                error
            }
        }

        return jsonFormated
    }

    async findById(id) {
        let result = undefined
        try {
            result = await knex.select('*').where({ id: id }).table('clientes')
            result = result.length > 0 ? result[0] : []
        } catch (error) {
            return ({
                error
            })
        }
        return result
    }

    async findByEmail(email) {
        let result = undefined
        try {
            result = await knex.select('*').where({ email: email }).table('clientes')
            result = result.length > 0 ? result[0] : []
        } catch (error) {
            return ({
                error
            })
        }
        return result
    }

    async create(client) {
        //Work in validations
        let result = undefined
        try {
            result = await knex.insert(client).table('clientes')
            return result
        } catch (error) {
            console.log('' + error)
            return { error }
        }
    }

    async update(client) {
        //Work in validations
        let result = undefined
        try {
            result = await knex.update(client).where({ id: client.id }).table('clientes')
            return result
        } catch (error) {
            console.log('' + error)
            return { error }
        }
    }

    async delete(client) {
        //Work in validations
        let result = undefined
        try {
            result = await knex.delete(client).where({ id: client.id }).table('clientes')
            return result
        } catch (error) {
            console.log('' + error)
            return { error }
        }
    }
}


module.exports = new Client()