const { findById, create, update, exclude, findAll } = require('../commom/commomModel')

class Order {

    async findById(id) {

        let result = undefined

        try {
            result = await findById(id,'pedidos')
        } catch (error) {
            result = { error }
        }

        return result
    }

    async findAll() {

        let result = undefined

        try {
            result = await findAll('pedidos')
        } catch (error) {
            result = { error }
        }

        return result
    }

    async create(order) {

        //do work in validations
        let result = undefined

        try {
            result = await create(order,'pedidos')
        } catch (error) {
            result = { error }
        }

        return result
    }

    async update(order) {

        let result = undefined

        try {
            result = await update(order,'pedidos')
        } catch (error) {
            result = { error }
        }

        return result
    }

    async delete(id) {

        //do work in validations

        let result = undefined

        try {
            result = await exclude(id,'pedidos')
        } catch (error) {
            result = { error }
        }

        return result
    }


}



module.exports = new Order()