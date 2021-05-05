const User = require('../model/User')

class UserController {

    async findAll(req, res) {

        let result = undefined

        try {
            result = await User.findAll()
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
                result = await User.findById(id)
                result = result.length > 0 ? result[0] : result
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
                result = await User.findByEmail(email)
                result = result.length > 0 ? result[0] : result
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
            result = await User.create(body)
            result = result.length > 0 ? result[0] : result
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
            result = await User.update(body)
            result = result.length > 0 ? result[0] : result
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
                result = await User.delete(id)
                result = result.length > 0 ? result[0] : result
                res.status = 200
            }
        } catch (error) {
            res.status = 400
            res.json({ error })
        }
        res.json(result)
    }

}


module.exports = new UserController()