const mongoose = require('mongoose')

const StorageScheme = new mongoose.Schema(
    {
        //declaracion estructura del objeto
        url:{
            type: String
        },
        filename:{
            type: String
        }
        
    },
    {
        timestamps: true,  //createAt, updateAt
        versionKey: false
    }
)

module.exports = mongoose.model('storages',StorageScheme)