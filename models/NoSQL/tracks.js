const mongoose = require('mongoose')

const TracksScheme = new mongoose.Schema(
    {
        //declaracion estructura del objeto
        name:{
            type: String,
        },
        album:{
            type: String,
        },
        cover:{
            type: String,
            validate:{
                validator: (req)=>{
                    return true
                },
                message: 'ERROR_URL'
            }
        },
        artist:{
            name:{
                type: String,
            },
            nickname:{
                type: String,
            },
            nationality:{
                type: String,
            }
        },
        duration:{
            start: {
                type: Number,
            },
            end: {
                type: Number,
            }
        },
        mediaId: {
             type:mongoose.Types.ObjectId// String 
        }
    },
    {
        timestamps: true,  //createAt, updateAt
        versionKey: false,
        
        
    }
)

module.exports = mongoose.model('tracks',TracksScheme)