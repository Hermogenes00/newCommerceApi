let Order = require('../model/Order')

class OrderController {

    async findByClient(req, res) {
        let { id } = req.params
        let result = undefined
        try {
            result = await Order.findByClient(id)
            res.status = 200
            res.json(result)
        } catch (error) {
            result = {
                error
            }
            res.status = 400
            res.json(result)
        }
    }
}


module.exports = new OrderController()