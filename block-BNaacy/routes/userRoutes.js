User=require('../models/users');
express=require('express')
router=express.Router();

router.get('/',(req,res)=>{
    console.log(req.url,req.method);
});

//data to database
router.post('/',(req,res)=>{
    console.log(req.body);
    User.create(req.body,(e,d)=>{console.log(e?e:d)});
})
module.exports=router;