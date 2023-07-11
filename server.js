const express =  require('express');
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

//routers
const userRoute=require('./controller/userRoute')
const studentRoute=require('./controller/studentRoute')
const classRoute=require('./controller/classRoute')
const teacherRoute=require('./controller/teacherRoute')

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/SampleDB');

//web connection: mongodb+srv://samebenezerd:vfBbKHsm9HL7UpDP@cluster0.7ghaoni.mongodb.net/


var db = mongoose.connection;
db.on('error',()=>{console.log("Error occured")});
db.once('open',()=>console.log("Connected to database"));

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use('/user',userRoute);
app.use('/student',studentRoute);
app.use('/class',classRoute)
app.use('/teacher',teacherRoute)

app.use('/',(req,res)=>{
    //res.send("HELLO WORLD!")
})

app.listen(5500,()=>console.log("Server started at 5500"))