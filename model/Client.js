const knex = require('../database/connection')
const Order = require('../model/Order')

const { findById, create, update, exclude, findAll } = require('../commom/commomModel')

class Client {

    async findAll() {

        let result = undefined

        try {
            result = await findAll('clientes')
        } catch (error) {
            console.log(error);
            result = {
                error
            }
        }

        return result
    }    

    async findById(id) {
        let result = undefined
        try {
            result = await findById(id)          
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

    async findAllWithOrders() {

        let allJson = []
        let pedidos = undefined

        try {

            let clients = await this.findAll()
            let allOrders = await Order.findAll()

            allJson = clients.map(clt => {
                pedidos = allOrders.filter(order => order.clienteId == clt.id)
                return {
                    nome: clt.nome,
                    pedidos: pedidos
                }
            })

            return allJson

        } catch (err) {
            console.log(err);
        }

    }

    async create(client) {
        //Work in validations
        let result = undefined
        try {
            result = await create(client,'clientes')
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
            result = await update(client,'clientes')
            return result
        } catch (error) {
            console.log('' + error)
            return { error }
        }
    }

    async delete(id) {
        //Work in validations
        let result = undefined
        try {
            result = await exclude(id,'clientes')
            return result
        } catch (error) {
            console.log('' + error)
            return { error }
        }
    }
}


module.exports = new Client()