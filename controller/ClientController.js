let Client = require('../model/Client')

class ClientController {

    async findAll(req, res) {
        let result = undefined
        try {
            result = await Client.findAll()
            res.status = 200
            res.json(result)
        } catch (error) {
            result = { error }
            res.status = 400
            res.json(result)
        }
    }

    async findAllWithOrders(req, res) {
        
        try {
            
        let result = await Client.findAllWithOrders()     
        res.json(result)
        } catch (error) {
            
        }
    }

    async findById(req, res) {
        let result = undefined
        let { id } = req.params
        try {
            result = await Client.findById(id)
            res.status = 200;
        } catch (error) {
            res.status = 400
            result = {
                error
            }
        }
        res.json(result)
    }

    async findByEmail(req, res) {
        let result = undefined
        let { email } = req.params
        try {
            result = await Client.findByEmail(email)
            res.status = 200;
        } catch (error) {
            res.status = 400
            result = {
                error
            }
        }
        res.json(result)
    }

    async create(req, res) {
        let result = undefined
        let { body } = req
        try {
            result = await Client.create(body)
            res.status = 200;
        } catch (error) {
            res.status = 400
            result = {
                error
            }
        }
        res.json(result)
    }

    async update(req, res) {
        let result = undefined
        let { body } = req
        try {
            result = await Client.update(body)
            res.status = 200;
        } catch (error) {
            res.status = 400
            result = {
                error
            }
        }
        res.json(result)
    }

    async delete(req, res) {
        let result = undefined
        let { body } = req
        try {
            result = await Client.delete(body)
            res.status = 200;
        } catch (error) {
            res.status = 400
            result = {
                error
            }
        }
        res.json(result)
    }

}

module.exports = new ClientController()