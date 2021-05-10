const { findById, create, update, exclude, findAll } = require('../commom/commomModel')

class SubCategory {

    async findAll() {
        let result = undefined
        try {
            result = await findAll('subcategorias')
        } catch (error) {
            result = { error }
        }

        return result
    }

    async findById(id) {
        let result = undefined
        try {
            result = await findById(id,'subcategorias')
        } catch (error) {
            result = { error }
        }

        return result
    }

    async create(category) {
        //do working in the validations
        let result = undefined

        try {
            result = await create(category, 'subcategorias')
        } catch (error) {
            result = { error }
        }

        return result
    }

    async update(category) {
        //do working in the validations
        let result = undefined

        try {
            result = await update(category, 'subcategorias')
        } catch (error) {
            result = { error }
        }

        return result
    }

    async delete(id) {
        //do working in the validations
        let result = undefined

        try {
            result = await exclude(id,'subcategorias')
        } catch (error) {
            result = { error }
        }

        return result
    }
}


module.exports = new SubCategory()