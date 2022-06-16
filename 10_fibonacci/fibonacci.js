const fibonacci = function(nbr) {

    let Fn0 = 0;
    let Fn1 = 1;
    if(nbr < 0) return "OOPS";
    else if(nbr == 0) return 0;
    else if(nbr == 1) return 1;
    else{
        Fn1 = fibonacci(nbr - 1);
        Fn0 = fibonacci(nbr - 2);
        return Fn0 + Fn1;
    }

};

// Do not edit below this line
module.exports = fibonacci;
