var express = require('express')
var router = express.Router()

Student=require('../models/student');

//student>GET:/students/new
router.get('./new',(req,res)=>{
    res.render('form');
});

//student>POST:/students/route
router.post('./route',(req,res)=>{
studentInfo=req.body;
Student.create(studentInfo,(e,d)=>{
    console.log(e?e:d);
});
});

//student>GET:/students/route
router.get('./route',(req,res)=>{
Student.find({},(e,d)=>{
    if(e){console.log(e);}
    else{
        res.render('index',{d});
        //d is a collection of students.
    }
})
});

module.export=router;

