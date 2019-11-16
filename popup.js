import {minusOne , isZero, log, convertToInteger, splitTimetoTimeArray, limitTimeArrayLength, reverseTimeArray} 
from  './helperFunction.js';

//--------------------------------


//-----------Implement
window.onload = function() {
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
//     let focusTime = document.querySelector('#focusTime').innerText;
//     log("focusTime",focusTime)

// //Usually 3-5 minutes break after each Pormodoro process
//     let breakTime = document.querySelector('#breakTime').innerText;
//     log("breakTime",breakTime)
//     let numberOfPormodoroProcess = 0;
    
// //Store time in array with maximum length 3
//     let focusTimeArray = [], breakTimeArray = [];
    getTime(focusTime, breakTime, focusTimeArray, breakTimeArray);
    countNumberDonwToZeroInThatTimeInterval(focusTimeArray)
    let x = delayOneSecond();
    x.then((resolve)=>{updateTimeElement(focusTimeElement,"34");})
}


//----------- End of Utilities Functions

//-------------------------Redraw function
const delayOneSecond = () =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{resolve('1 seconds had passed')},1000)
    })
}

const countNumberDonwToZeroInThatTimeInterval = (timeArray) => {
    for (let i = 0; i < timeArray.length; ++i)
    {
        let time = timeArray[i]; //The curent time value (minute,second)
        time = convertToInteger(time); //in Int
        console.log(time, 'asdasd') // see on browser

        if (isZero(time)) continue;
        else 
        {
            {
                while (!isZero(time))
                {
                    console.log('In this countNumberDonwToZeroInThatTimeInterval')
                    log('time', time);
                    --time;  
                    updateTimeArray(focusTimeArray, i, time)
                    log(focusTimeArray,"dcT");
                    console.log('End of this loop in, begin with', time);
                }
            }
        }
    }
    return true;
}

const updateTimeArray = (timeArray,indexInTimeArray, updateTime)=>{
    log('In update tiem array');
    return timeArray[indexInTimeArray] = updateTime;
}

const updateTimeElement = (timeElement, time)=>{
    log('In update time element', time);
    timeElement.innerText = time;
    return;
}   
//-------------------------End of Redraw function


//------------------------
const getTime = (focusTime,breakTime, focusTimeArray, breakTimeArray) =>{
    log("Initilization");
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
    // x = countNumberDonwToZeroInThatTimeInterval(focusTimeArray);
   
    // //log( focusTime,"f");
    
    // log( x,"x");
}



//---Testing
// function createBlok(){
//     p = document.createElement('p');
//     p.innerText = 5;
//     document.body.append(p);
//     console.log('asd');
// }

// setTimeout(createBlok, 3000);

// let timerElement = document.getElementById('timer1');
// let timerInText = timerElement.innerText;
// setTimeout(()=>{
//     console.log(timerInText);
//     timerInText--; 
//     timerElement.innerText = timerInText; //updateTime
//     console.log('1s passed');
// }, 2000)
