const express = require('express');
const router = express.Router();
const studentSchema = require('../model/studentSchema');


const db_handler=require('./db_handler')


//http://localhost:5500/student/create-student


//create new student
router.post('/create-student',(req,res)=>{
    console.log(req.body)
    let student_data=req.body
    db_handler.insertData(student_data,res,studentSchema)
})


//get student data from database
router.get('/student-list',(req,res)=>{
    console.log("Getting Student list")
    db_handler.getAllData(req,res,studentSchema)

})

//find specific student datas
router.post('/specific-student-list',(req,res)=>{
    console.log("request fields: ",req.body)
    db_handler.getData(req,res,studentSchema)
})


//get specific fields of all student data from datatbase
router.route('/restricted-student-list/:fields')
.get((req,res)=>{
    db_handler.getAllRestrictedData(req,res,studentSchema)
})


//delete student data
router.delete('/delete-student/:id',(req,res)=>{
    console.log("Delete student data")
   db_handler.deleteDataById(req,res,studentSchema)
})

//find and update student data
router.route('/update-student/:id')
.get((req,res)=>{
    console.log("request id: "+req.params.id)
    db_handler.getDataById(req,res,studentSchema)
})
.put((req,res)=>{
    console.log("request id: "+req.params.id)
    let schema_data=req.body
    db_handler.updateDataById(schema_data,req,res,studentSchema)
})


module.exports = router;

