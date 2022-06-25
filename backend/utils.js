function createResult(error,data){
    result={};
    if(error){
        result[`status`]=`error`;
        result[`error`]=error;
        console.log(error)
    }
    else if(data.length==0){
        result[`status`]=`notMatch`;
        result[`error`]=`does not exists`;
        console.log(error)
    }
    else 
    {
        result[`status`]=`success`;
        result[`data`]=data
    }
    return result;
}
module.exports={
    createResult,
}