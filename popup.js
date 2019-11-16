//----------Variables
//Usually 25 minutes each Pormodoro process
var focusTimeElement = document.querySelector('#focusTime');
var focusTime = focusTimeElement.innerText;

//Usually 3-5 minutes break after each Pormodoro process
var breakTimeElement = document.querySelector('#breakTime');
var breakTime = breakTimeElement.innerText;
var numberOfPormodoroProcess = 0;


//Store time in array with maximum length 3
var focusTimeArray = [], breakTimeArray = [];
// window.focusTimeArray = "global";
// window.breakTimeArray = "global";
//--------------------------------


//-----------Implement
window.onload = function() {
//     let focusTime = document.querySelector('#focusTime').innerText;
//     log("focusTime",focusTime)

// //Usually 3-5 minutes break after each Pormodoro process
//     let breakTime = document.querySelector('#breakTime').innerText;
//     log("breakTime",breakTime)
//     let numberOfPormodoroProcess = 0;
    
// //Store time in array with maximum length 3
//     let focusTimeArray = [], breakTimeArray = [];
    getTime(focusTime, breakTime, focusTimeArray, breakTimeArray);
    // log("focusTime",focusTime)
    // log("breakTime",breakTime)
}
//----------- Utilities Functions
const minusOne = time => {return --time;}

const isZero = time => {return (time == 0) ? true : false};

const log = (a=null,message =" ") => console.log(message , a);

//----------- End of Utilities Functions

//-------------------------Redraw function
const delayOneSecond = () =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{resolve('1 seconds passed')},1000)
    })
}

const countNumberDonwToZeroInThatTimeInterval = (timeArray) => {
    for (i = 0; i < timeArray.length; ++i)
    {
        let time = timeArray[i]; //The curent time value (minute,second)
        time = convertToInteger(time); //in Int
        console.log(time) // see on browser

        if (isZero(time)) continue;
        else 
        {
            while (!isZero(time))
            {
                console.log('In this countNumberDonwToZeroInThatTimeInterval')
                log('time', time);
                let promise = delayOneSecond();
                promise.then(resolve=>console.log(resolve),reject=>console.log(reject));
                --time;
                // let updateLoop;
                // updateLoop = setInterval(
                //     updateTime, 1000,time,i);
                // clearInterval(updateLoop);    
                console.log('End of this loop in, begin with', time);
            }
        }
    }
    return true;
}


const updateTime = (time, indexInTimeArray)=>{
    focusTimeArray[indexInTimeArray] = time;
    console.log('in update time');
    // focusTimeElement.innerText = time;
    while (!isZero(time))
            {
                time = minusOne(time);
                console.log(time)
                focusTimeArray[indexInTimeArray] = time;
                console.log(focusTimeArray[indexInTimeArray]);      
            }  
    return;
}   
//-------------------------End of Redraw function

//-------------------Time processing function
const convertToInteger = (timeInString) =>
{
   return parseInt(timeInString);
}

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


//------------------------
const getTime = (focusTime,breakTime, focusTimeArray, breakTimeArray) =>{
    log( focusTimeArray,"f");
    log( breakTimeArray, "b");
    focusTimeArray = splitTimetoTimeArray(focusTime);
    breakTimeArray = splitTimetoTimeArray(breakTime);
    log( focusTimeArray,"f");
    log( breakTimeArray, "b");
    //Limited the length to 3 elements for hours, minutes, second
    focusTimeArray = limitTimeArrayLength(focusTimeArray);
    breakTimeArray = limitTimeArrayLength(breakTimeArray);

    //------------
    reverseTimeArray(focusTimeArray);
    reverseTimeArray(breakTimeArray);
    log( focusTimeArray,"f");
    log( breakTimeArray, "b");

    //---
    x = countNumberDonwToZeroInThatTimeInterval(focusTimeArray);
    //log( focusTime,"f");
    //updateTime("9:000",focusTime);
    log( x,"x");
}



