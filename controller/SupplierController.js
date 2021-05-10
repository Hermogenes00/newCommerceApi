let supplier = require('../model/Supplier')

class SupplierController {

    async findAll(req, res) {

        //do working in the validation

        let result = undefined

        try {
            result = await supplier.findAll();
        } catch (error) {
            result = { error };
        }

        res.json(result)
    }

    async findById(req, res) {

        //do working in the validations

        let result = undefined
        let { id } = req.params

        try {
            result = await supplier.findById(id);
        } catch (error) {
            result = { error };
        }

        res.json(result)
    }

    async create(req, res) {

        //do working in the validations

        let result = undefined
        let { body } = req

        try {
            result = await supplier.create(body)
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
            result = await supplier.update(body)
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
            result = await supplier.delete(id)
        } catch (error) {
            result = { error };
        }

        res.json(result)
    }
}

module.exports = new SupplierController()