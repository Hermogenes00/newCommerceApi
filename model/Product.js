const { findById, create, update, exclude, findAll } = require('../commom/commomModel')
const Variation = require('./Variation')

class Product {


    async findAll() {
        let allJson = undefined
        try {
            let product = await findAll('produtos')
            let variation = await Variation.findAll()

            allJson = product.map(prod => {
                return {
                    nome: prod.nome,
                    variation: variation.filter(vari => vari.idProduto == prod.id)
                }
            })

        } catch (error) {
            result = { error }
        }

        return allJson
    }

    async findById(id) {

        let allJson = undefined
        try {
            let product = await findById(id, 'produtos')
            let variations = await Variation.findAll()

            allJson = {
                nome: product.nome,
                vlrProduto: product.vlrProduto,
                variations: variations.filter(vari => vari.idProduto == product.id)
            }

        } catch (error) {
            console.log(error);
            result = { error }
        }

        return allJson
    }

    async create(product) {

        let result = undefined

        try {
            result = await create(product, 'produtos')
        } catch (error) {
            result = { error }
        }

        return result
    }

    async update(product) {

        let result = undefined

        try {
            result = await update(product, 'produtos')
        } catch (error) {
            result = { error }
        }

        return result
    }

    async delete(id) {

        let result = undefined

        try {
            result = await exclude(id, 'produtos')
        } catch (error) {
            result = { error }
        }

        return result
    }
}



module.exports = new Product()