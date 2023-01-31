const mongoose= require("mongoose")

const contactshchema= new mongoose.schema(
    {
      name : String,
      age : Number,
      email: { type: String , unique: true , required : true}
    }
)

module.exports =mongoose.model('Contact',contactshchema)