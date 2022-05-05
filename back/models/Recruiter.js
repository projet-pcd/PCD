const mongoose =require('mongoose')
const RecruiterSchema = new mongoose.Schema ({

    nom:{
        type:String,
        required:true,
        trim: true

    },
    prenom:{
        type:String,
        required:true,
        trim: true

    },

    email:{
        type:String,
        required:true,
        trim: true,
        unique: true


    },
    password:{
        type:String,
        required:true,

    },
    phone:{
        type:String,
        trim: true

    },
  



})
module.exports = mongoose.model("Recruiter",RecruiterSchema)