express=require('express');
path=require('path');
userRoute=require('./model/user.js')

app=express()
app.listen(4000,()=>{console.log('port:4000');});

app.use('view engine','ejs');
app.use('views',path.join(__dirname,views));

app.use(express.urlencoded({extended:false}));

mongoose.connect(' mongodb://127.0.0.1:27017',
{useNewUrlParser:true,useUnifiedTopology:true},
(e)=>{console.log(e?e:"connected")});

app.use('/user',userRoute);





