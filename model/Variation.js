const { findById, create, update, exclude, findAll } = require('../commom/commomModel')

class Variation {

    async findAll() {
        let result = undefined        
        try {
            result = await findAll('variacoes')            
        } catch (error) {
            result = { error }
        }

        return result
    }

    async findById(id) {
        let result = undefined
        try {
            result = await findById(id,'variacoes')
        } catch (error) {
            result = { error }
        }

        return result
    }

    async create(category) {
        //do working in the validations
        let result = undefined

        try {
            result = await create(category, 'variacoes')
        } catch (error) {
            result = { error }
        }

        return result
    }

    async update(category) {
        //do working in the validations
        let result = undefined

        try {
            result = await update(category, 'variacoes')
        } catch (error) {
            result = { error }
        }

        return result
    }

    async delete(id) {
        //do working in the validations
        let result = undefined

        try {
            result = await exclude(id,'variacoes')
        } catch (error) {
            result = { error }
        }

        return result
    }
}


module.exports = new Variation()