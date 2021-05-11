const knex = require('../database/connection')
const Order = require('../model/Order')
let Address = require('../model/Address')

const { findById, create, update, exclude, findAll } = require('../commom/commomModel')

class Client {

    async findById(id) {
        let allJson = []

        try {
            let client = await findById(id, 'clientes')
            let address = await Address.findAll()
            let order = await Order.findAll()            

            allJson = {
                ...client,
                address: address.filter(adr => adr.clienteId == client.id),
                pedidos: order.filter(order => order.clienteId == client.id),                
            }
        } catch (error) {

            return ({ ...error })
        }

        return allJson
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

    async findAll() {

        let allJson = []

        try {

            let clients = await findAll('clientes')
            let address = await Address.findAll()
            let allOrders = await Order.findAll()

            allJson = clients.map(clt => {
                return {
                    nome: clt.nome,
                    pedidos: allOrders.filter(order => order.clienteId == clt.id),
                    address: address.filter(adr => adr.clienteId == clt.id)
                }
            })

            return allJson

        } catch (error) {
            console.log(error)
            return ({ error })
        }

    }

    async create(client) {
        //Work in validations
        let result = undefined
        try {
            result = await create(client, 'clientes')
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
            result = await update(client, 'clientes')
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
            result = await exclude(id, 'clientes')
            return result
        } catch (error) {
            console.log('' + error)
            return { error }
        }
    }
}


module.exports = new Client()