import {minusOne , isZero, log, convertToInteger, splitTimetoTimeArray, limitTimeArrayLength, reverseTimeArray} 
from  './helperFunction.js';

//--------------------------------


//-----------Implement
window.onload = function() {
    //----------Variables
//Usually 25 minutes each Pormodoro process
    let focusTimeElement = document.querySelector('#focusTime');
    let focusTime = focusTimeElement.innerText;

    //Usually 3-5 minutes break after each Pormodoro process
    let breakTimeElement = document.querySelector('#breakTime');
    let breakTime = breakTimeElement.innerText;
    let numberOfPormodoroProcess = 0;


//Store time in array with maximum length 3
    let focusTimeArray = [], breakTimeArray = [];
    [focusTimeArray,breakTimeArray] = getTime(focusTime, breakTime, focusTimeArray, breakTimeArray);
    countNumberDonwToZeroInThatTimeInterval(focusTimeArray, focusTimeElement)
    // let x= 10;
    // while (x > 0)
    // {
    //     delayOneSecond().then((resolve)=>this.console.log(resolve));
    //     x--;
    // }
    delayOneSecond()
        .then((resolve)=>{this.console.log(resolve)
            return new Promise((resolve, reject)=>{
                setTimeout(()=>{resolve('1 seconds had passed')},2000)
            })
        })
        .then((resolve)=>this.console.log(resolve))
        .then((resolve)=>this.console.log(resolve));
    this.console.log('After 10 sec')
    // let x = delayOneSecond();
    // x.then((resolve)=>{updateTimeElement(focusTimeElement,"34");})
}


//----------- End of Utilities Functions

//-------------------------Redraw function
const delayOneSecond = () =>{
    console.log('in delay 1 sec')
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{resolve('1 seconds had passed')},2000)
    })
}


const countNumberDonwToZeroInThatTimeInterval = (timeArray,timeElement) => {
    for (let i = 0; i < timeArray.length; ++i)
    {
        let time = timeArray[i]; //The curent time value (minute,second)
        time = convertToInteger(time); //in Int
        console.log(time, 'asdasd') // see on browser

        if (isZero(time)) {updateTimeArray(timeArray, i, time);continue}
        else 
        {
            {
                while (!isZero(time))
                {
                    console.log('-----In this countNumberDonwToZeroInThatTimeInterval')
                    log('time', time);
                    --time;  
                    updateTimeArray(timeArray, i, time)
                    log(timeArray,"dcT");
                    
                    delayOneSecond().then((resolve)=>{updateTimeElement(timeElement,time)})
                    updateTimeElement(timeElement,time)
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
    return [focusTimeArray, breakTimeArray];
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
