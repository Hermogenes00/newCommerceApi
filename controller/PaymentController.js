let payment = require('../model/Payment')

class PaymentController {

    async findAll(req, res) {

        //do working in the validations

        let result = undefined

        try {
            result = await payment.findAll();
            console.log(result)
        } catch (error) {
            console.log(error)
            result = { error };
        }

        res.json(result)
    }

    async findById(req, res) {

        //do working in the validations

        let result = undefined
        let { id } = req.params

        try {
            result = await payment.findById(id);
            console.log(result)
        } catch (error) {
            console.log(error)
            result = { error };
        }

        res.json(result)
    }

    async create(req, res) {

        //do working in the validations

        let result = undefined
        let { body } = req

        try {
            result = await payment.create(body)
        } catch (error) {
            result = { error };
        }

        res.json(result)
    }

    async update(req, res) {

        //do working in the validations

        let result = undefined
        let { body } = req

        try {
            result = await payment.update(body)
        } catch (error) {
            result = { error };
        }

        res.json(result)
    }

    async delete(req, res) {

        //do working in the validations

        let result = undefined
        let { id } = req.params

        try {
            result = await payment.delete(id)
        } catch (error) {
            result = { error };
        }

        res.json(result)
    }
}

module.exports = new PaymentController()