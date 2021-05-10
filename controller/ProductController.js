const Product = require('../model/Product')

class ProductController {

    async findAll(req, res) {

        let result = undefined

        try {
            result = await Product.findAll()
            res.status = 200
        } catch (error) {
            res.status = 400
            
            result = { error }
        }
        res.json(result)
    }

    async findById(req, res) {

        let { id } = req.params
        let result = undefined
        try {
            if (id) {
                result = await Product.findById(id)                
                res.status = 200
            }
        } catch (error) {
            res.status = 400
            res.json({ error })
        }
        res.json(result)
    }

    async findByEmail(req, res) {

        let { email } = req.params
        let result = undefined
        try {
            if (id) {
                result = await Product.findByEmail(email)                
                res.status = 200
            }
        } catch (error) {
            res.status = 400
            res.json({ error })
        }
        res.json(result)
    }

    async create(req, res) {

        let result = undefined
        let { body } = req

        try {
            result = await Product.create(body)            
            res.status = 200
        } catch (error) {
            res.status = 400
            res.json({ error })
        }

        res.json(result)
    }

    async update(req, res) {

        let result = undefined
        let { body } = req

        try {
            result = await Product.update(body)            
            res.status = 200
        } catch (error) {
            res.status = 400
            res.json({ error })
        }

        res.json(result)
    }

    async delete(req, res) {

        let { id } = req.params
        let result = undefined
        try {
            if (id) {
                result = await Product.delete(id)                
                res.status = 200
            }
        } catch (error) {
            res.status = 400
            res.json({ error })
        }
        res.json(result)
    }


}


module.exports = new ProductController()