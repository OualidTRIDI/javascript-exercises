const repeatString = function(strVar, num) {
    let strVarConcat = ""
    if(num < 0 ){
       strVarConcat = "ERROR"
    }else{
        for(let i=0; i<num;i++){
            strVarConcat = strVarConcat.concat(strVar);
        }
    }
    return strVarConcat ;
};

// Do not edit below this line
module.exports = repeatString;
