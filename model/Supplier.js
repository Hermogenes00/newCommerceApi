const { findById, create, update, exclude, findAll } = require('../commom/commomModel')

class Supplier {

    async findAll() {
        //to do working in the validations
        let result = undefined
        try {
            result = await findAll('fornecedores')
        } catch (error) {
            console.log(error);
            result = { error }
        }

        return result
    }

    async findById(id) {

        //to do working in the validations
        let result = undefined

        try {
            result = await findById(id, 'fornecedores')
        } catch (error) {
            console.log(error);
            result = { error }
        }

        return result
    }

    async create(address) {
        //to do working in the validations
        let result = undefined

        try {
            result = await create(address, 'fornecedores')
        } catch (error) {
            console.log(error);
            result = { error }
        }

        return result
    }

    async update(address) {

        //to do working in the validations
        let result = undefined

        try {
            result = await update(address, 'fornecedores')
        } catch (error) {
            console.log(error);
            result = { error }
        }

        return result
    }

    async delete(id) {

        //to do working in the validations
        let result = undefined

        try {
            result = await exclude(id, 'fornecedores')
        } catch (error) {
            console.log(error);
            result = { error }
        }

        return result
    }

}


module.exports = new Supplier()