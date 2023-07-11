const mongoose = require("mongoose");
const Schema = mongoose.Schema;





const class_id_Schema=new Schema({
    class:{type: Number,  required:true},
    section:{type:String,  required:true}
})

class_id_Schema.index({class:1,section:1}, {unique: true,});

const classSchema = new Schema({

    class_id:class_id_Schema,
    
    subjects:{type:Array,default:undefined},
    schedule:{type:Object},

},
{
    collection: "ClassList"
});
/*
Schema({obj},{collection})
*/




module.exports = mongoose.model('ClassList',classSchema);