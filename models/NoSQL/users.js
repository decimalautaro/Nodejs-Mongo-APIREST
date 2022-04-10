const mongoose = require('mongoose')

const UserScheme = new mongoose.Schema(
    {
        //declaracion estructura del objeto
        name:{
            type: String
        },
        age:{
            type: Number
        },
        email:{
            type: String,
            unique: true
        },
        password:{
            type: String
        },
        role:{
            type: ['user','admin'],
            default: 'user'
        }
    },
    {
        timestamps: true,  //createAt, updateAt
        versionKey: false
    }
)

module.exports = mongoose.model('users',UserScheme)