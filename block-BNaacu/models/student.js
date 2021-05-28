mongoose=require('mongoose');
Schema=mongoose.Schema;
var studentSchema=new Schema({
    name:String,
    age:Number,
});
module.export=mongoose.model('Student',studentSchema);