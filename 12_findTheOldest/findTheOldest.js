const findTheOldest = function(people) {

    return people.reduce((theOldest, person) =>{
        if(theOldest.hasOwnProperty('yearOfDeath') && person.hasOwnProperty('yearOfDeath')){
            if(
                (theOldest.yearOfDeath - theOldest.yearOfBirth) < 
                (person.yearOfDeath - person.yearOfBirth)
            ) theOldest = person;
        }else if(!theOldest.hasOwnProperty('yearOfDeath')){
             if(
                ((new Date()).getFullYear() - theOldest.yearOfBirth) < 
                (person.yearOfDeath - person.yearOfBirth)
            ) theOldest = person;
        }else if(!person.hasOwnProperty('yearOfDeath')){
             if(
                (theOldest.yearOfDeath - theOldest.yearOfBirth) < 
                ((new Date()).getFullYear() - person.yearOfBirth)
            ) theOldest = person;
        }


        return theOldest;

    }, people[0]);

    
};

// Do not edit below this line
module.exports = findTheOldest;
