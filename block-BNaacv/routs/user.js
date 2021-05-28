express=require('express');
route=express.Router()

//list users
route.get('/',(req,res)=>{
res.render(users,{['aaron','baron','caron']})
})



//go to form page form
route.get('/new',(req,res)=>{
     
});

//save data to database from form
route.post('/',(req,res)=>{

});


//single user > always at the end 
/* route.get('/:id', (req,res)=>{
res.render(singleUser);
}); */

//edit user
route.get('/:id/edit',(req,res)=>{

});

//update
route.put('/:id',(req,res)=>{

});

//delete user
route.delete('/:id');

module.exports=route;