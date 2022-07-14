const mongoose = require('mongoose')
const validator = require('validator')

var schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email");
            }
        }
    },
    gender:String,
    status:String
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;