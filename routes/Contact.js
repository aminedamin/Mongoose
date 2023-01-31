const express=require('express')
const { addContact, readContact, deleteContact, updateContact, readUser } = require('../controllers/Contact')

const contactRouter=express.Router()

contactRouter.post('/addcontact',addContact)

contactRouter.get('/readcontact',readContact)

contactRouter.delete('/deleteContact/:id',deleteContact)

contactRouter.put('/updateContact/:id',updateContact)

contactRouter.get('/readUser/:id',readUser)

module.exports =contactRouter