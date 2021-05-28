var express = require('express');
var router = express.Router()
Student=require('../models/student');

//student>GET:/students/new
router.get('/new',(req,res)=>{
    res.render('form');
});

//student>POST:/students/route
router.post('/route',(req,res)=>{
    console.log(req.body);
studentInfo=req.body;
//problem here>not saving in db
Student.create(studentInfo);
res.redirect('/route')
});

//student>GET:/students/route
router.get('/route',(req,res)=>{
Student.find({},(e,d)=>{
    if(e){console.log(e);}
    else{
        res.render('index',{d});
        //d is a collection of students.
    }
})
});

module.exports=router;

