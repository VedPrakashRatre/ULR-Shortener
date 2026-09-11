const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    url:{
        type:String,
        required:[true ,'URL must be provided'],
    },
    code:{
        type:String,
        required:[true ,'short URL must be provided'],
    }
})

module.exports = mongoose.model('URL', productSchema);