const { findAll, findById, create, update, exclude } = require('../commom/commomModel')

class Payment {

    async findAll() {
        //to do working in the validations
        let result = undefined
        try {
            result = await findAll('pagamentos')
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
            result = await findById(id, 'pagamentos')
        } catch (error) {
            console.log(error);
            result = { error }
        }

        return result
    }

    async create(payment) {
        //to do working in the validations
        let result = undefined

        try {
            result = await create(payment, 'pagamentos')
        } catch (error) {
            console.log(error);
            result = { error }
        }

        return result
    }

    async update(payment) {

        //to do working in the validations
        let result = undefined

        try {
            result = await update(payment, 'pagamentos')
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
            result = await exclude(id, 'pagamentos')
        } catch (error) {
            console.log(error);
            result = { error }
        }

        return result
    }

}


module.exports = new Payment()