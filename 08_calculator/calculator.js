const add = function(nbr1, nbr2) {
	return nbr1 + nbr2;
};

const subtract = function(nbr1, nbr2) {
	return nbr1 - nbr2;
};

const sum = function(array) {
	return array.reduce(function (total, currentValue) {
    return total + currentValue
  },0);
};

const multiply = function(array) {
  return array.reduce(function(multiplies, currentValue){
    return multiplies * currentValue;
  },1);
};

const power = function(nbr1, nbr2) {
	return Math.pow(nbr1, nbr2);
};

const factorial = function(number) {
	if(number === 0) return 1;
  else if( number === 1) return 1;
  else{
    let fact = 1;
    for(let i = number ; i > 1 ; i--){
      fact = fact * i;
    }
    return fact;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
