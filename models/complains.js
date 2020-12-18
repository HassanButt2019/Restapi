const mongoose = require('mongoose');

const complainSchema = new mongoose.Schema({
        title:{
            type:String,
        },
        email:{
            type:String,
         },

        name:{
            type:String,
        },
        building:{
            type:String,
        },
        flat:{
            type:Number,
        },
        createdAt:{
            type:Date,
            default:Date.now
        },
        status:{
            type:String,
            enum:['Not Listened', 'In Progress', 'Listened'],
        },
        description:{
            type:String,
            required:[true,'Please add your complain'],
        }
});


module.exports = mongoose.model('complains',complainSchema);