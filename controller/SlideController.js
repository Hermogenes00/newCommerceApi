let slide = require('../model/Slide')

class SlideController {

    async findAll(req, res) {

        //do working in the validations

        let result = undefined

        try {
            result = await slide.findAll();
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
            result = await slide.findById(id);
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
            result = await slide.create(body)
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
            result = await slide.update(body)
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
            result = await slide.delete(id)
        } catch (error) {
            result = { error };
        }

        res.json(result)
    }
}

module.exports = new SlideController()