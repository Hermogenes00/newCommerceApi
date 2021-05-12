let knex = require('../database/connection')
const { findById, create, update, exclude, findAll } = require('../commom/commomModel')

const bcrypt = require('bcrypt')
const SALTS = process.env.SALTS

//Year in hours
const ONE_YEAR = '8760h'

//SECRET
const SECRET = process.env.SECRET

//JsonWebToken
const jwt = require('jsonwebtoken')

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

    async auth({ email, password }) {


        let result = undefined

        try {
            let objClient = await this.findByEmail(email)

            if (objClient) {

                let resultCompare = await bcrypt.compare(password, objClient.password)

                if (resultCompare) {

                    let token = jwt.sign({
                        email: objClient.email,
                        nome: objClient.nome,
                        rule:'COLLABORATOR'
                    }, SECRET, { expiresIn: ONE_YEAR })

                    result = {
                        token,
                        data: {
                            email: objClient.email,
                            nome: objClient.nome
                        }
                    }
                }
            }

        } catch (error) {
            result = error
        }

        return result
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
            result = result.length > 0 ? result[0] : []
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

            let hashPassword = await bcrypt.hash(user.password, SALTS)

            user.password = hashPassword

            result = await create(user, 'usuarios')

            return result

        } catch (error) {

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