const { findById, create, update, exclude, findAll } = require('../commom/commomModel')

class Category {

    async findAll() {
        let result = undefined
        try {
            result = await findAll('categorias')
        } catch (error) {
            result = { error }
        }

        return result
    }

    async findById(id) {
        let result = undefined
        try {
            result = await findById(id)
        } catch (error) {
            result = { error }
        }

        return result
    }

    async create(category) {
        //do working in the validations
        let result = undefined

        try {
            result = await create(category, 'categorias')
        } catch (error) {
            result = { error }
        }

        return result
    }

    async update(category) {
        //do working in the validations
        let result = undefined

        try {
            result = await update(category, 'categorias')
        } catch (error) {
            result = { error }
        }

        return result
    }

    async delete(id) {
        //do working in the validations
        let result = undefined

        try {
            result = await exclude(id)
        } catch (error) {
            result = { error }
        }

        return result
    }
}


module.exports = new Category()