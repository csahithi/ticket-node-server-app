import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: String,
    email: { type: String, unique: true },
    lastName: String,
    location: String,
    role: {
    type: String,
    enum: ["BUYER", "SELLER"],
    default: "BUYER" },
},
{ collection: "users" });
export default userSchema;