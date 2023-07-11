const express = require('express');
const router = express.Router();
const classSchema = require('../model/classSchema');
const studentSchema = require('../model/studentSchema');
const userSchema=require('../model/userSchema')

const db_handler=require('./db_handler')


//http://localhost:5500/class/create-class


//create new class
router.post('/create-class',(req,res)=>{
    console.log(req.body)
    let class_data=req.body
    db_handler.insertData(class_data,res,classSchema)
})


//get class data from database
router.get('/class-list',(req,res)=>{
    console.log("Getting class list")
    db_handler.getAllData(req,res,classSchema)

})

//get specific fields of all class data from datatbase
router.route('/restricted-class-list/:fields')
.get((req,res)=>{
    db_handler.getAllRestrictedData(req,res,classSchema)
})



//delete class data
router.delete('/delete-class/:id',(req,res)=>{
    console.log("Delete class data")
   db_handler.deleteDataById(req,res,classSchema)
})

//find and update class data
router.route('/update-class/:id')
.get((req,res)=>{
    console.log("request id: "+req.params.id)
    db_handler.getDataById(req,res,classSchema)
})
.put((req,res)=>{
    console.log("request id: "+req.params.id)
    let schema_data=req.body
    db_handler.updateDataById(schema_data,req,res,classSchema)
})

//find specific class datas
router.post('/student-list',(req,res)=>{
    console.log("request fields: ",req.body)
    db_handler.getData(req,res,studentSchema)
})

module.exports = router;

