const fs=require('fs')
const data = require('../data/data.json')

module.exports.deleteUser = (req, res) => {
    const id = req.params.id
    console.log(id);
    const remaining = data.filter(user => user.id !== id)
    res.send(remaining)

}