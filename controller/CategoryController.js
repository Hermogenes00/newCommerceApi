let category = require('../model/Category')

class CategoryController {

    async findAll(req, res) {

        //do working in the validations

        let result = undefined
        try {
            result = await category.findAll();
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
            result = await category.findById(id);
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
            result = await category.create(body)
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
            result = await category.update(body)
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
            result = await category.delete(id)
        } catch (error) {
            result = { error };
        }

        res.json(result)
    }
}

module.exports = new CategoryController()