let variation = require('../model/Variation')

class VariationController {

    async findAll(req, res) {

        //do working in the validations

        let result = undefined
        try {
            result = await variation.findAll();
        } catch (error) {
            console.log(error);
            result = { error };
        }

        res.json(result)
    }

    async findById(req, res) {

        //do working in the validations

        let result = undefined
        let { id } = req.params
        try {
            result = await variation.findById(id);            
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
            result = await variation.create(body)
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
            result = await variation.update(body)
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
            result = await variation.delete(id)
        } catch (error) {
            result = { error };
        }

        res.json(result)
    }
}

module.exports = new VariationController()