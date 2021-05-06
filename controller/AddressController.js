let address = require('../model/Address')

class AdressController {

    async findAll(req, res) {

        //do working in the validations

        let result = undefined
        
        try {            
            result = await address.findAll();            
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
            result = await address.findById(id);
            result = result.length > 0 ? result[0] : result
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
            result = await address.create(body)
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
            result = await address.update(body)
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
            result = await address.delete(id)
        } catch (error) {
            result = { error };
        }

        res.json(result)
    }
}

module.exports = new AdressController()