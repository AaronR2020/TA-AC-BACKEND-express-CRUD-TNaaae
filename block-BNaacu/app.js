//requires->express,path
express=require('express');
path=require('path');
mongoose=require('mongoose');

//mongoDb connect
mongoose.connect(' mongodb://127.0.0.1:27017',{useNewUrlParser:true,useUnifiedTopology:true},(e)=>{console.log(e?e:"connected")});

//set and listen in app.
app=express();
app.listen(4000,()=>{
    console.log("port:4000");
});

//view engine
app.set("view engine",'ejs');
app.set("views",path.join(__dirname,"views"));

//form
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//routes student
app.use('/students',require('./route/student.js'));
