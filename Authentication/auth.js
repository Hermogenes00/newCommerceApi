const jwt = require('jsonwebtoken')

const SECRET = process.env.SECRET

async function auth(req, res, next) {

    let token = undefined
    let headerAuthorization = req.headers['authorization']

    if (!headerAuthorization)
        res.json({ erro: 'Token não informado' })

    token = headerAuthorization.replace('Bearer ', '')

    try {
        await jwt.verify(token, SECRET)
        next()
    } catch (error) {
        res.json(error)
    }

}

module.exports = { auth }