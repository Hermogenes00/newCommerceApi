let SubCategory = require('../model/SubCategory')

class SubCategoryController {

    async findAll(req, res) {

        //do working in the validations

        let result = undefined
        try {
            result = await SubCategory.findAll();
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
            result = await SubCategory.findById(id);            
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
            result = await SubCategory.create(body)
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
            result = await SubCategory.update(body)
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
            result = await SubCategory.delete(id)
        } catch (error) {
            result = { error };
        }

        res.json(result)
    }
}

module.exports = new SubCategoryController()