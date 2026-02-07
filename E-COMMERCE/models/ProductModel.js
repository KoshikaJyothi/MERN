import { Schema,model } from "mongoose";
const ProductModel = new Schema({
    productName:{
        type:String,
        required:[true,"Pname req"],
        minlength:[5,"min 5"],
        maxlength:[14,"max 14"]
    },
    price:{
        type:Number,
        required:[true,"price req"],
        min:[0,"price cant be -ve"]
    },
    brand:{
        type:String,
        required:[true,"brand req"],
    }
},
{
    timestamps:true,
    versionKey:false,
    strict:'throw'
})
const Product=model('product',ProductModel)
export default Product