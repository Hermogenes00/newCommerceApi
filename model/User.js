let knex = require('../database/connection')
const { findById, create, update, exclude, findAll } = require('../commom/commomModel')

class User {

    async findAll() {
        let result = undefined
        try {
            result = await findAll('usuarios')
            return result
        } catch (error) {
            console.log('' + error)
            return { error }
        }
    }

    async findById(id) {
        let result = undefined
        try {
            result = await findById(id)
            return result
        } catch (error) {
            console.log('' + error)
            return { error }
        }
    }

    async findByEmail(email) {
        let result = undefined
        try {
            result = await knex.select('*').where({ email: email }).table('usuarios')
            return result
        } catch (error) {
            console.log('' + error)
            return { error }
        }
    }

    async create(user) {
        //Work in validations
        let result = undefined
        try {
            result = await create(user, 'usuarios')
            return result
        } catch (error) {
            console.log('' + error)
            return { error }
        }
    }

    async update(user) {
        //Work in validations
        let result = undefined
        try {
            result = await update(user, 'usuarios')
            return result
        } catch (error) {
            console.log('' + error)
            return { error }
        }
    }

    async delete(id) {
        //Work in validations
        let result = undefined
        try {
            result = await exclude(id, 'usuarios')
            return result
        } catch (error) {
            console.log('' + error)
            return { error }
        }
    }

}





module.exports = new User()