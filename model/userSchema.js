const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username:{type: String,unique:true,required:true},
    password: {type: String,required:true},
    user_type: {type: String,required:true},
    teacher_id:{type: String},
    class_id:{
        class:{type:Number},
        section:{type:String}        
    },
    student_ids:{type:Array,default: undefined},
    student_id:{type:String}
},
{
    collection: "UserList"
});
/*
Schema({obj},{collection})
*/
module.exports = mongoose.model('UserList',userSchema);