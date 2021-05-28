express=require('express');
mongoose=require('mongoose')
userRoutes=require('./route/userRouts');

app=express();
app.listen(4000,()=>{console.log("Port:4000");});

mongoose.connect(' mongodb://127.0.0.1:27017/userInfo',{useNewUrlParser:true,useUnifiedTopology:true},(e)=>{console.log(e?e:"connected")});

app.use(express.urlencoded({extended:true}));

app.use('/user',userRoutes)

app.use((err,req,res)=>{
    res.send(err);
});