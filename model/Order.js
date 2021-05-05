let knex = require('../database/connection')

class Order {

    async findByClient(id) {

        let result = undefined

        try {
            result = await knex.select('*').where({ clienteId: id }).table('pedidos')
        } catch (error) {
            result = { error }
        }
        
        return result
    }
}



module.exports = new Order()