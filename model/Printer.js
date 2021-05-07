const { findAll, findById, create, update, exclude } = require('../commom/commomModel')

class Printer {

    async findAll() {

        let result = undefined

        try {
            result = await findAll('impressoras')
        } catch (error) {
            console.log(error);
            result = { error }
        }

        return result
    }

    async findById(id) {
        let result = undefined

        try {
            result = await findById(id, 'impressoras')
        } catch (error) {
            console.log(error);
            result = { error }
        }

        return result
    }

    async create(printer) {
        //to do working in the validations
        let result = undefined

        try {
            result = await create(printer, 'impressoras')
        } catch (error) {
            console.log(error);
            result = { error }
        }

        return result

    }

    async update(printer) {
        //to do working in the validations
        let result = undefined

        try {
            result = await update(printer, 'impressoras')
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
            result = await exclude(id, 'impressoras')
        } catch (error) {
            console.log(error);
            result = { error }
        }

        return result
    }
}


module.exports = new Printer()