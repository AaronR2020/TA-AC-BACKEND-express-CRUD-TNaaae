express=require('express');
path=require('path')
app=express();
app.listen(4000);

//setup view engine
app.set("view engine","ejs");
app.set("views", path.join(__dirname,"views"));
console.log(path.join(__dirname,"views"));
app.get('/',(req,res)=>{
    
    res.render('school',{nameOfSchool:'manovikas',batch:2012})
})