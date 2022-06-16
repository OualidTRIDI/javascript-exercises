const palindromes = function (str) {

    const strArray = str.toLowerCase().split('');
    const specialCar = ['!',',','.',' '];
    for(let i = specialCar.length ; i >= 0 ; i--){   
        let index = strArray.indexOf(specialCar[i]);
        while(index !== -1){
            strArray.splice(index, 1);
            index = strArray.indexOf(specialCar[i]);
        }
    }

    if(strArray.join('') === strArray.reverse().join('')) return true;
    else return false;
};

// Do not edit below this line
module.exports = palindromes;
