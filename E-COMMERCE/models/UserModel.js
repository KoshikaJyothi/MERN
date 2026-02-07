import {Schema,model} from 'mongoose'
  const cartSchema= new Schema({
        product:{
            type:Schema.Types.ObjectId,
            ref:'product'//name od product model
        },
        quantity: {                 //add quantity here
        type: Number,
        required: true,
        min: [1, "quantity must be at least 1"],
        default: 1
    }
    })
const UserModel=new Schema({

    name:{
        type:String,
        required:[true,"name is required"],
                minlength:[5,"min 5"],
                maxlength:[10,"max 10"]
    },
    email:{
        type:String,
        required:[true,"email req"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"password is req"]
    },
    cart:{
        type:[cartSchema]
    }
})
const User=model('users',UserModel)
export default User