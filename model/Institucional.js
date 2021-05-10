const { findById, create, update, exclude, findAll } = require('../commom/commomModel')

class Institucional {

    async findAll() {
        //to do working in the validations
        let result = undefined
        try {
            result = await findAll('institucionals')
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
            result = await findById(id, 'institucionals')
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
            result = await create(address, 'institucionals')
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
            result = await update(address, 'institucionals')
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
            result = await exclude(id, 'institucionals')
        } catch (error) {
            console.log(error);
            result = { error }
        }

        return result
    }

}


module.exports = new Institucional()