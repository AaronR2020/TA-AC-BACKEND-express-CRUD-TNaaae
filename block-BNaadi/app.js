express=require('express');
mongoose=require('mongoose');
path=require('path');
User=require('./model/user')

app=express();
app.listen(4000,()=>{console.log("Port:4000");});

//connect database
mongoose.connect(' mongodb://127.0.0.1:27017/userInfo',
{useNewUrlParser:true,useUnifiedTopology:true},(e)=>{console.log(e?e:"connected")});

//form
app.use(express.urlencoded({extended:true}));

//views
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,"views"));

//routes
app.use('/users',userRoutes);

//static files
app.use(express.static('public'));

//routes
app.use('/user',require('./routes/userRoute'));

//error
app.use('',(req,res)=>{
    res.send("404 File not found")
})
app.use((err,req,res)=>{
    console.log(err);
});

