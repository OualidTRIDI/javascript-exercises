const reverseString = function(strVar) {

    let listStr = []
    let endLoop = strVar.length; 

    for(let i=1; i<=endLoop; i++){
        listStr.push(strVar.slice(i-1, i));
    }

    listStr = listStr.reverse()

    return listStr.join("");
};

// Do not edit below this line
module.exports = reverseString;
