//----------- Utilities Functions
const minusOne = time => {return --time;}

const isZero = time => {return (time == 0) ? true : false};

const log = (a=null,message =" ") => console.log(message , a);

const convertToInteger = (timeInString) => parseInt(timeInString);

//-------------------Time processing function
const splitTimetoTimeArray = (time) =>{
    return time.split(":")
}

const limitTimeArrayLength = (timeArray) => {
    let arrLength = timeArray.length;
    log("arr length", arrLength)
    //this time array should only have hour:minute:second
    let maxLength = 3;
    console.log(timeArray);
    if(arrLength > maxLength) 
        timeArray.splice( 0, arrLength - maxLength);
    return timeArray;
}
const reverseTimeArray = (timeArray) => timeArray = timeArray.reverse();
//------------------- ENd of Time processing function

export {minusOne, isZero, log, convertToInteger, splitTimetoTimeArray, limitTimeArrayLength, reverseTimeArray}