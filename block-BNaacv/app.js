express=require('express');
path=require('path');
userRoute=require('./routs/user')

app=express()
app.listen(4000,()=>{console.log('port:4000');});

app.use('view engine','ejs');
app.use('views',path.join(__dirname,views));

app.use(express.urlencoded({extended:false}));

app.use('/user',userRoute);

app.use((req,res,rext)=>{
    res.status(404).send('Page Not FOund')
});






