express=require('express');
mongoose=require('mongoose')
userRoutes=require('./routes/userRoutes');

app=express();
app.listen(4000,()=>{console.log("Port:4000");});

app.use(express.urlencoded({extended:true}));

app.use('/user',userRoutes)