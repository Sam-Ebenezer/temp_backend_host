const express = require('express');
const router = express.Router();
const teacherSchema = require('../model/teacherSchema');
const { db } = require('../model/userSchema');


const db_handler=require('./db_handler')


//http://localhost:5500/teacher/create-teacher
//checking
router.get('/new-teacher',(req,res)=>{
    res.send("Working")
})

//create new teacher
router.post('/create-teacher',(req,res)=>{
    console.log(req.body)
    let teacher_data=req.body
    db_handler.insertData(teacher_data,res,teacherSchema)
})


//get teacher data from database
router.get('/teacher-list',(req,res)=>{
    console.log("Getting teacher list")
    db_handler.getAllData(req,res,teacherSchema)

})

//find specific teacher datas
router.post('/specific-teacher-list',(req,res)=>{
    console.log("request fields: ",req.body)
    db_handler.getData(req,res,teacherSchema)
})


//get specific fields of all teacher data from datatbase
router.route('/restricted-teacher-list/:fields')
.get((req,res)=>{
    db_handler.getAllRestrictedData(req,res,teacherSchema)
})


//delete teacher data
router.delete('/delete-teacher/:id',(req,res)=>{
    console.log("Delete teacher data")
   db_handler.deleteDataById(req,res,teacherSchema)
})

//find and update teacher data
router.route('/update-teacher/:id')
.get((req,res)=>{
    console.log("request id: "+req.params.id)
    db_handler.getDataById(req,res,teacherSchema)
})
.put((req,res)=>{
    console.log("request id: "+req.params.id)
    let schema_data=req.body
    db_handler.updateDataById(schema_data,req,res,teacherSchema)
})




module.exports = router;

