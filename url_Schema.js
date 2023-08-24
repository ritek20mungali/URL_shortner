const mongoose=require('mongoose');

const URLSchema = new mongoose.Schema({
    redirectUrl:{
        type:String,
        required:true,
    },
    shortUrl:{
        type : String ,  default:'', unique: true},
    clicks: {
    type: Number,
    default:0
    }
    }
)

module.exports = mongoose.model('Url',URLSchema);