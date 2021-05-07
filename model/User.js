let knex = require('../database/connection')
const { findById, create, update, exclude, findAll } = require('../commom/commomModel')

class User {

    async findAll() {
        let result = undefined
        try {
            result = await knex.select('*').table('usuarios')
            return result
        } catch (error) {
            console.log('' + error)
            return { error }
        }
    }

    async findById(id) {
        let result = undefined
        try {
            result = await knex.select('*').where({ id: id }).table('usuarios')
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
            result = await knex.insert(user).table('usuarios')
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
            result = await knex.update(user).where({ id: user.id }).table('usuarios')
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
            result = await knex.delete(user).where({ id: id }).table('usuarios')
            return result
        } catch (error) {
            console.log('' + error)
            return { error }
        }
    }

}





module.exports = new User()