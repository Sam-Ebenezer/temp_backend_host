const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teacherSchema = new Schema({

    teacher_id:{type: String,unique:true,required:true},
    class_id:{ 
        class:{type: Number},
        section:{type:String}
        },
    name:{type: String},
    age:{type: Number},
    gender:{type: String},
    address:{type: String},
    phone_no:{type: String},
    email:{type: String},
    

},
{
    collection: "TeacherList"
});

module.exports = mongoose.model('TeacherList',teacherSchema);