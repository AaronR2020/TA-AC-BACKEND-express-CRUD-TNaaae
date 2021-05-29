const Mongoose = require('mongoose');
router=Mongoose.Router();
User=require('./model/user');

//create
router.post('/',(req,res)=>{
    User.create(req.body,(e,d)=>{console.log(e?e:d);})
    res.redirect('/users');
});

//read
router.get('/',(req,res)=>{
    User.find({},(e,d)=>{
        if(e){next(e)}
        else{res.render('index',{userList:d})}
    })
});

router.get('/:id',(req,res)=>{
    id=req.params.id;
    User.find({_id:id},(e,d)=>{
        if(e){next(e)}
        else{res.render('index',{userList:d})}
    })
});

//update
route.post('/:id',(req,res)=>{

    id=req.params.id;
    User.findByIdAndUpdate(id,(e,d)=>{
        if(e){next(e)}
        else{res.render('index',{userList:d});}
    })
})

//delete
route.delete('/id',(req,res)=>{
    User.findByIdAndDelete(id);
});

module.exports=router;
