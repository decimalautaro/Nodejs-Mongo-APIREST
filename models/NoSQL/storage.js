const mongoose = require('mongoose')
const mongooseDelete = require('mongoose-delete')

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

StorageScheme.plugin(mongooseDelete, {overrideMethods: 'all'})
module.exports = mongoose.model('storages',StorageScheme)