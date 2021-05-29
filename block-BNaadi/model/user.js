const { Mongoose, Schema } = require("mongoose");
Schema=Mongoose.Schema;

userSchema=new Schema({
    name:String,
    email:String,
    age:String,
    bio:String,
});

module.exports=Mongoose.model('User',userSchema);