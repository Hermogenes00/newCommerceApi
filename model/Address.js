const { findById, create, update, exclude, findAll } = require('../commom/commomModel')

class Address {

    async findAll() {

        //to do working in the validations

        let result = undefined
        try {
            result = await findAll('enderecos')
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
            result = await findById(id, 'enderecos')
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
            result = await create(address, 'enderecos')
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
            result = await update(address, 'enderecos')
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
            result = await exclude(id, 'enderecos')
        } catch (error) {
            console.log(error);
            result = { error }
        }

        return result
    }

}


module.exports = new Address()