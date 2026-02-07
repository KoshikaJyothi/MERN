import { Schema, model } from "mongoose";

// create user schema
const userSchema = new Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
        minlength: [4, "Min length should be 4"],
        maxlength: [7, "Max length should be 7"]
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    age: {
        type: Number,
        required: [true, "Age is required"],
        min: [18, "Age should be above 18"],
        max: [25, "Age should be below 25"]
    }
});

// create user model
const UserModel = model("User", userSchema);

export default UserModel;
