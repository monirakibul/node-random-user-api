const express=require("express")
const router=express.Router()
const { getAllUsers } = require("../controller/allUsers.controller")
const { randomUser } = require("../controller/random.controller")
const { saveUser } = require("../controller/saveUser.controller")
const { updateUser } = require("../controller/update.controller")
const { deleteUser } = require("../controller/delete.controller")
const { updateMultiple } = require("../controller/multiple.controller")


router.route('/all')
.get(getAllUsers)

router.route('/random')
.get(randomUser)

router.route('/save')
.post(saveUser)

router.route('/update/:id')
.patch(updateUser)

router.route('/bulk-update')
.patch(updateMultiple)

router.route('/delete/:id')
.delete(deleteUser)

module.exports=router