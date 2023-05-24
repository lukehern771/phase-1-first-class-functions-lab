// Code your solution in this file!
const returnFirstTwoDrivers = function (){
    return ['Antonia', 'Nuru']
}

const returnLastTwoDrivers = function (){
    return ['Amari', 'Mo']
}

const selectingDrivers  = [returnFirstTwoDrivers, returnLastTwoDrivers] ;

const createFareMultiplier = function (fareMultiplier){
    return function(value) {
        return fareMultiplier * value;
    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, functions){
    return functions(drivers)
    
}