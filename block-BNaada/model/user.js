const Mongoose = require("mongoose");
Schema=Mongoose.Schema;

userSchema=new Schema({
    name:String,
    age:Number,
});

module.exports=Mongoose.model('User',userSchema);