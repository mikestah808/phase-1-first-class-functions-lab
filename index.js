// Code your solution in this file!

    const returnFirstTwoDrivers = function (arrayOfDrivers) {
        
        return arrayOfDrivers.slice(0,2);
    };


const returnLastTwoDrivers = function (arrayOfDrivers) {
    
    return arrayOfDrivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


function createFareMultiplier(multiply) {
    return function(value) {
        return value * multiply
    };
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);


const selectDifferentDrivers = (selectingDrivers, returnFirstTwoDrivers) => {
    return returnFirstTwoDrivers(selectingDrivers, returnFirstTwoDrivers);
}


// const selectDifferentDrivers = (selectingDrivers) => {
//     return selectingDrivers(returnFirstTwoDrivers, returnLastTwoDrivers);
// }


// console.log(selectingDifferentDrivers);

