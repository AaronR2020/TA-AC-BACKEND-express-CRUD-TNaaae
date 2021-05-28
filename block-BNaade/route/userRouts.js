User=require('../model/user');
express=require('express')
router=express.Router();

//data to database
router.post('/',(req,res,next)=>{
    console.log(req.body);
    User.create(req.body,(e,d)=>{console.log(e?next(e):d)});
})

//read data from database
router.get('/',(req,res)=>{  
   User.find({},(e,d)=>{
        e?next(e):console.log(d);
   })
   });

//display based on id
router.get('/:id',(req,res)=>{
    id=req.params.id
User.find({_id:id},(e,d)=>{console.log(e?e:d);});
})

//update
router.post('/:id/edit',(req,res)=>{
    id=req.params.id;
    User.findByIdAndUpdate(id,req.body,(e,d)=>{
        console.log(e?e:d);
    })
})
module.exports=router;
