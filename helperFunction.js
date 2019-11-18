//----------- Utilities Functions
const minusOne = time => {return --time;}

const isZero = time => {return (time == 0) ? true : false};

const log = (value=null,message =" ") => console.log(message , value);

const convertToInteger = (timeInString) => parseInt(timeInString);

const timeInSecond = (timeArray) =>{
    let sum = 0;
    for (var i=0; i < timeArray.length; ++i)
        sum += timeArray[i]*Math.pow(60,i);
    return sum;
}
//----------- ENd of Utilities Functions

//-------------------Time processing function
const  convertTimeArrayToInteger = (timeArray) => {
    for (var i=0; i < timeArray.length; ++i)
            timeArray[i] = convertToInteger(timeArray[i]);

    return timeArray;
}
const splitTimetoTimeArray = (time) =>{
    return time.split(":")
}

const limitTimeArrayLength = (timeArray) => {
    let arrLength = timeArray.length;
    log("arr length", arrLength)
    //this time array should only have hour:minute:second
    let maxLength = 2;
    console.log(timeArray);
    if(arrLength > maxLength) 
        timeArray.splice( 0, arrLength - maxLength);
    return timeArray;
}
const reverseTimeArray = (timeArray) => timeArray = timeArray.reverse();
//------------------- ENd of Time processing function

export {minusOne, isZero, log, convertToInteger, splitTimetoTimeArray, limitTimeArrayLength, reverseTimeArray, convertTimeArrayToInteger,timeInSecond}