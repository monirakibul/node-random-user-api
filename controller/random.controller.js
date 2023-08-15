const data = require('../data/data.json')

module.exports.randomUser = (req, res) => {
    const random = Math.floor(Math.random() * data.length);
    const randomData = data[random];
    res.json(randomData)
}