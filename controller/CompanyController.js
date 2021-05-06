let company = require('../model/Company')

class CompanyController {

    async findById(req, res) {
        let result = undefined
        let { id } = req.params

        try {
            result = await company.findById(id)
            result = result.length > 0 ? result[0] : result
        } catch (error) {
            result = {
                error
            }

            res.json(result)
        }

        res.json(result)
    }

    async create(req, res) {

        let result = undefined
        let { body } = req

        try {
            result = await company.create(body)
        } catch (error) {
            result = {
                error
            }
            res.json(result)
        }

        return res.json(result)
    }

    async update(req, res) {
        let result = undefined
        let { body } = req

        try {
            result = await company.update(body)
        } catch (error) {
            result = {
                error
            }
            res.json(result)
        }

        return res.json(result)
    }

    async delete(req, res) {
        let {id} = req.params
        try {
            
        } catch (error) {
            
        }
        
    }



}


module.exports = new CompanyController()