const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({

    student_id:{type: String,unique:true,required:true},
    name:{type: String},
    age:{type: Number},
    gender:{type: String},

    class_id:{ 
    class:{type: Number},
    section:{type:String}
    },

   
    address:{type: String},
    phone_no:{type: String},
    email:{type: String},
    marks: {type: Object},

    grade:{type:String},
},
{
    collection: "StudentList"
});
/*
Schema({obj},{collection})
*/
module.exports = mongoose.model('StudentList',studentSchema);