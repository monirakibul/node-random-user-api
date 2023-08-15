const data = require('../data/data.json');
let count =0;
const updated =[]
module.exports.updateMultiple = (req, res) => {
    const { id, contact } = req.body
    for (let userId of id) {
        const findData = data.filter(user => user.id === userId)
       findData[0].contact=contact[count++]
       updated.push(findData[0])
    }
    res.send(updated)
}