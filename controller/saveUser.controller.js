const data = require('../data/data.json')

module.exports.saveUser = (req, res) => {
    const body = req.body;
    const { id, name, contact, address, photoUrl } = body
    if (id && name && contact && address && photoUrl) {
        data.push(body)
        res.send(data)  
    }
    else {
        res.send("missing properties")
    }
}