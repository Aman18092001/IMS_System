const mongoose=require('mongoose');

const itemSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    supplierInfo:{
        type:String,
        required:true
    },
    mfgDate:{
        type:Date,
        required:true
    },
    category:{
        ref:'category',
        type:mongoose.Types.ObjectId
    }
})

const items=mongoose.model('items',itemSchema);
module.exports=items;