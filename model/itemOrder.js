const { findAll, findById, create, update, exclude } = require('../commom/commomModel')

class ItemOrder {

    async findAll() {
        //to do working in the validations
        let result = undefined
        try {
            result = await findAll('itenspedidos')
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
            result = await findById(id, 'itenspedidos')
        } catch (error) {
            console.log(error);
            result = { error }
        }

        return result
    }

    async create(itemOrder) {
        //to do working in the validations
        let result = undefined

        try {
            result = await create(itemOrder, 'itenspedidos')
        } catch (error) {
            console.log(error);
            result = { error }
        }

        return result
    }

    async update(itemOrder) {

        //to do working in the validations
        let result = undefined

        try {
            result = await update(itemOrder, 'itenspedidos')
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
            result = await exclude(id, 'itenspedidos')
        } catch (error) {
            console.log(error);
            result = { error }
        }

        return result
    }

}


module.exports = new ItemOrder()