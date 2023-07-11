const express = require('express');
const router = express.Router();
const userSchema = require('../model/userSchema');


const db_handler=require('./db_handler')
//http://localhost:4500/student/create-student

router.get('/',(req,res)=>{
    //console.log(req.body)
    //res.send("Connected to user")
})


router.get('/sample-user',(req,res)=>{
    /*userSchema.create(req.query,(error,data)=>{
        if(error){
            return next(error);
        }
        else{
            res.json(data);
        }
    })*/
    //res.send("Data inserted"+req.body)
    console.log(req)
    res.send("Connected to sample user")
})



//create new user from admin
router.post('/create-user',(req,res)=>{
    console.log(req.body)
    /*userSchema.create(req.body,(error,data)=>{
        if(error){
            return next(error);
        }
        else{
            res.json(data);
        }
    })*/
    //res.send("Connected to login user: ")
    let user_data=req.body
    db_handler.insertData(user_data,res,userSchema)
})


//get user data from database
router.get('/user-list',(req,res)=>{
    console.log("Getting user list")
    db_handler.getAllData(req,res,userSchema)

})


//get specific fields of all user data from datatbase
router.route('/restricted-user-list/:fields')
.get((req,res)=>{
    db_handler.getAllRestrictedData(req,res,userSchema)
})

//delete user data
router.delete('/delete-user/:id',(req,res)=>{
    console.log("Delete user data")
   db_handler.deleteDataById(req,res,userSchema)
})

//find and update user data
router.route('/update-user/:id')
.get((req,res)=>{
    console.log("request id: "+req.params.id)
    db_handler.getDataById(req,res,userSchema)
})
.put((req,res)=>{
    console.log("request id: "+req.params.id)
    let schema_data=req.body
    db_handler.updateDataById(schema_data,req,res,userSchema)
})



//check login info
router.post('/login',(req,res)=>{
    console.log(req.body)
    //res.send("Connected to login user: ")

    userSchema.exists(req.body, function (err, doc) {
        if (err){
            console.log(err)
            res.status(404)
            res.send("false")
        }else if(doc==null){
            res.status(513)
            res.send("false")
        }
        else{
            console.log("Result :", doc)
            console.log("doc id :", doc["_id"])
            req.params={id:doc["_id"]}
            db_handler.getDataById(req,res,userSchema)
        }
    });
})


module.exports = router;

