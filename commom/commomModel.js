const knex = require("../database/connection");


async function findAll(tableName) {

    let result = undefined

    try {
        result = await knex.select('*').table(tableName)
    } catch (error) {
        result = { error }
    }

    return result
}

async function findById(id, tableName) {

    let result = undefined

    try {
        result = await knex.select('*').where({ id: id }).table(tableName)
        result = result.length>0?result[0]:result
    } catch (error) {
        result = { error }
    }

    return result
}

async function create(data, tableName) {
    let result = undefined

    try {
        result = await knex.insert(data).table(tableName)
    } catch (error) {
        result = { error }
    }

    return result
}

async function update(data, tableName) {

    let result = undefined

    try {
        result = await knex.update(data).where({ id: data.id }).table(tableName)
    } catch (error) {
        result = { error }
    }

    return result
}

async function exclude(id, tableName) {

    let result = undefined

    try {
        result = await knex.select('*').where({ id: id }).delete().table(tableName)
    } catch (error) {
        result = { error }
    }

    return result
}


module.exports = {
    findAll, findById, create, update, exclude
}