const { Schema } = require("mongoose");

const userSchema = new Schema({
    fullName: String, 
    email: String, 
    userGroup: String,
    password: String
})

const User = model('User', userSchema);
export default User;