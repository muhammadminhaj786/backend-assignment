const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    product_name:{
        type: String,
        required:true
    },
    product_id:{
        type: Number,
        required: true
    },
    product_price:{
        type: Number,
        required: true
    },
    product_description:{
        type: String,
        required: true
    }

})

const productModel = mongoose.model('products',schema)
module.exports = productModel