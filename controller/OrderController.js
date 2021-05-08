let Order = require('../model/Order')

class OrderController {

    async findById(req, res) {
        let { id } = req.params
        let result = undefined
        try {
            result = await Order.findById(id)
            res.status = 200            
            res.json(result)
        } catch (error) {
            result = {
                error
            }
            res.status = 400
            res.json(result)
        }
    }

    async findAll(req, res) {

        let result = undefined
        try {
            result = await Order.findAll()
            res.status = 200
            res.json(result)
        } catch (error) {
            result = {
                error
            }
            res.status = 400
            res.json(result)
        }
    }

    async create(req, res) {

        //do work in validations

        let { body } = req
        try {

            result = await Order.create(body)
            res.status = 200
            res.json(result)

        } catch (error) {

            res.status = 400
            res.json({ error })
        }

    }

    async update(req, res) {

        //do work in validations

        let { body } = req
        try {

            result = await Order.update(body)
            res.status = 200
            res.json(result)

        } catch (error) {

            res.status = 400
            res.json({ error })
        }

    }

    async delete(req, res) {

        //do work in validations

        let { id } = req.body
        try {

            result = await Order.delete(id)
            res.status = 200
            res.json(result)

        } catch (error) {

            res.status = 400
            res.json({ error })
        }

    }
}


module.exports = new OrderController()