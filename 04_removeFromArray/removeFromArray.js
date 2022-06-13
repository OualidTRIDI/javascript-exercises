const removeFromArray = function(listElements, ... element) {
    let returnedLsit = []
    for(let i=0; i<listElements.length; i++){
        if( !element.includes(listElements[i])){
            returnedLsit.push(listElements[i]);
        }
    }

    return returnedLsit;

};

// Do not edit below this line
module.exports = removeFromArray;
