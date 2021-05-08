const Printer = require('../model/Printer')

class PrinterController {

    async findAll(req, res) {

        let result = undefined

        try {
            result = await Printer.findAll()
            res.status = 200
        } catch (error) {
            res.status = 400
            console.log({
                error
            })
            result = { error }
        }
        res.json(result)
    }

    async findById(req, res) {

        let { id } = req.params
        let result = undefined
        try {
            if (id) {
                result = await Printer.findById(id)                
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
                result = await Printer.findByEmail(email)                
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
            result = await Printer.create(body)            
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
            result = await Printer.update(body)            
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
                result = await Printer.delete(id)                
                res.status = 200
            }
        } catch (error) {
            res.status = 400
            res.json({ error })
        }
        res.json(result)
    }


}


module.exports = new PrinterController()