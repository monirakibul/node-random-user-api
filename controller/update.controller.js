const data = require('../data/data.json')

module.exports.updateUser=(req,res)=>{
const userId =req.params.id;
const body=req.body
const { id, name, contact, address, photoUrl } = body
const selectedUser =data.find(user=>user.id===userId)

selectedUser.name=name? name : selectedUser.name
selectedUser.contact=contact? contact :selectedUser.contact
selectedUser.address=address ? address :selectedUser.address
res.send(selectedUser)


// ? name : ''
// selectedUser.contract=contract? contract :
// selectedUser.address=address? address :
// selectedUser.photoUrl=photoUrl ? photoUrl :



// console.log(selectedUser);
// res.send('')
}