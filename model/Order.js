const { findById, create, update, exclude, findAll } = require('../commom/commomModel')

let knex = require('../database/connection')

class Order {

    async findById(id) {

        let result = undefined

        try {
            result = await knex.select('*').where({ id: id }).table('pedidos')
        } catch (error) {
            result = { error }
        }

        return result
    }

    async findAll() {

        let result = undefined

        try {
            result = await knex.select('*').table('pedidos')
        } catch (error) {
            result = { error }
        }

        return result
    }

    async create(order) {

        //do work in validations
        let result = undefined

        try {
            result = await knex.insert(order).table('pedidos')
        } catch (error) {
            result = { error }
        }

        return result
    }

    async update(order) {

        let result = undefined

        try {
            result = await knex.update(order).where({ id: order.id }).table('pedidos')
        } catch (error) {
            result = { error }
        }

        return result
    }

    async delete(order) {

        //do work in validations

        let result = undefined

        try {
            result = await knex.selete('*').where({ id: order.id }).delete().table('pedidos')
        } catch (error) {
            result = { error }
        }

        return result
    }


}



module.exports = new Order()