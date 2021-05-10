const { findById, create, update, exclude, findAll } = require('../commom/commomModel')

class Slide {

    async findAll() {
        //to do working in the validations
        let result = undefined
        try {
            result = await findAll('slides')
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
            result = await findById(id, 'slides')
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
            result = await create(address, 'slides')
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
            result = await update(address, 'slides')
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
            result = await exclude(id, 'slides')
        } catch (error) {
            console.log(error);
            result = { error }
        }

        return result
    }

}


module.exports = new Slide()