const data = require('../data/data.json')

module.exports.getAllUsers = (req, res) => {
    const query = req.query.s
    if (!query) {
        res.send(data)
    }

    const limitedData = data.slice(0, query)
    res.send(limitedData)
}