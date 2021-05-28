express=require('express');
route=express.Router()

route.get('/',(req,res)=>{
    users=['Aaron','Baron']
    req.render('users',{users});
})

//single user
route.get('/:id',(req,res)=>{
    id=req.param.id;
    console.log(id);
});


module.exports=route;