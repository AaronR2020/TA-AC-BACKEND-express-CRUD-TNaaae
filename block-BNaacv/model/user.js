express=require('express');
route=express.Router()

route.get('/',(req,res)=>{
    req.render('users');
})

//single user
route.get('/:id',(req,res)=>{
    id=req.param.id;
    //val=find({id}) from database
    //res.render(index,{val})
})

route.get('/new',(req,res)=>{
    res.render(`userForm.ejs`);
});
