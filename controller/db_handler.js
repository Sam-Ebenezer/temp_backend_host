
function errorHandler(res,error){

    switch(error.code){
        case 11000 :
            res.status(409);
            res.send("Duplicate key error");break;
        default:
            console.log(error.name)
            res.status(204)
            res.send([error.code,error.name])
    }


}


function insertData(schema_data,res,schema){
    schema.create(schema_data,(error,data)=>{
        if(error){
            errorHandler(res,error)
        }
        else{
            console.log(schema_data)
            res.json(data);
        }
    })
}



function getAllData(req,res,schema){
    schema.find((error,data)=>{
        if(error){
            errorHandler(res,error)
        }
        else{
            console.log(data)
            res.json(data);
        }
    })
}

function getAllRestrictedData(req,res,schema){
    schema.find({},req.params.fields,(error,data)=>{
        if(error){
            errorHandler(res,error)
        }
        else{
            console.log(data)
            res.json(data);
        }
    })
}


function getData(req,res,schema){
    schema.find(req.body,(error,data)=>{
        if(error){
            errorHandler(res,error)
        }
        else if(data.length==0){
            errorHandler(res,error={code:1234,name:"Empty list"})
        }
        else{
            console.log("Data Sent: ",data)
            res.json(data);
        }
    })
}


function getDataById(req,res,schema){
    schema.findById(req.params.id,(error,data)=>{
        if(error)
        {
            errorHandler(res,error)
        }
        else{
            console.log("sent data",data)
            res.json(data);
        }
    })
}





function updateDataById(schema_data,req,res,schema){
    schema.findByIdAndUpdate(
        req.params.id,
        {
        $set: schema_data
        },
        (error,data)=>{
        if(error){
            errorHandler(res,error)
            //console.log(error);

        }
        else{
            res.json(data);
            console.log(req.body, req.params.id);
        }
    })
}



function deleteDataById(req,res,schema){
    schema.findByIdAndRemove(req.params.id,(error,data)=>{
        if(error)
        {
            errorHandler(res,error)
        }
        else{
            res.json(data);
        }
    })
}




module.exports={insertData,getData,getAllData,getDataById,deleteDataById,updateDataById,getAllRestrictedData,errorHandler}