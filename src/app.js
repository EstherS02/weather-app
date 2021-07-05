const add =(a,b,cb) =>{
    if(typeof(a) != 'number' || typeof(b) != 'number'){
        cb("Value should be a number", undefined);
        return;
    }
    setTimeout(()=>{
        cb(undefined, a+b);
    },3000)
}

const sub =(a,b,cb) =>{
    if(typeof(a) != 'number' || typeof(b) != 'number'){
        cb("Value should be a number", undefined);
        return;
    }
    setTimeout(()=>{
        cb(undefined, a-b);
    },3000)
}

add(3,8,function(err, result){
    if(err){
        console.log("Error add",err);
        return;
    }
    console.log("Testing....")
    console.log("Add", result)
    sub(5, "gfghfghfgh", function(err, result2){
        if(err){
            console.log("Error sub",err);
            return;
        }
        console.log("sub result",result2)
    })
})
