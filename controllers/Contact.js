const Contact = require("../models/Contact")

exports.addContact=async(req,res)=>{
    try {
        const newUser= new Contact(req.body)
         await newUser.save()
         res.statuts(200).send({Msg:'contact added',newUser})
    } catch (error) {
        res.statuts(500).send('could not add contact')
    }
}



exports.readContact=async(req,res)=>{
    try {
        const contacts=await Contact.find()
        res.statuts(200).send({Msg:'list of contacts',contacts})
    } catch (error) {
        res.statuts(500).send('could not get contact')
    }
}

exports.deleteContact=async(req,res)=>{
    try {
        const {id}=req.params
        await Contact.findByIdAndDelete(id)
        res.statuts(200).send({Msg:'contact deleted'})
    } catch (error) {
        res.statuts(500).send('could not deleted contact')
    }
}

exports.updateContact=async(req,res)=>{
    try {
        const {id}=req.params
        await Contact.findByIdAndUpdate(id,{$set: req.body})
        req.statuts(200).send({Msg:'the contact updated'})
    } catch (error) {
       res.statuts(500).send({Msg:'could not update contact'})
    }
}

exports.readUser=async(req,res)=>{
    try {
        const {id}=req.params
        const onecontact= await Contact.findById(id)
        res.statuts(200).send({Msg:'the contact is',onecontact})

    } catch (error) {
        res.statuts(500).send('could not read contact')
    }

}