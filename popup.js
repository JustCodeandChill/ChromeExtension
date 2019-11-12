//----------Variables
//Usually 25 minutes each Pormodoro process
let focusTime = document.querySelector('#focusTime').innerText;

//Usually 3-5 minutes break after each Pormodoro process
let breakTime = document.querySelector('#breakTime').innerText;

let numberOfPormodoroProcess = 0;

//Store time in array with maximum length 3
let focusTimeArray = [], breakTimeArray = [];
// focusTimeArray = focusTime.split(":");
// breakTimeArray = breakTime.split(":");

// //Limited the length to 3 elements for hours, minutes, second
// let  arrLength = focusTimeArray.length;
// if(arrLength > 3){
//     focusTimeArray.splice( 0, arrLength - 3);
// }

// //------------
// focusTimeArray = focusTimeArray.reverse();
// breakTimeArray = breakTimeArray.reverse();
//console.log(focusTimeArray);
//----------- Functions
const minusOne = time => {return --time;}

const isZero = time => {return (time == 0) ? true : false};

const log = (a=null,message =" ") => console.log(message , a);

const countDownToZero = (timeArray) => 
{
    for (i = 0; i < timeArray; ++i)
    {
        let time = timeArray[i];
        if (isZero(time)) continue;
        else 
        {
            while (!isZero(time))
                time = minusOne(time);
        }
    }
    return true;
}

const splitTimetoTimeArray = (time, timeArray) =>{
    timeArray = time.split(":")
    console.log(timeArray);
}

const limitTimeArrayLength = (timeArray) => {
    let  arrLength = timeArray.length;
    //this time array should only have hour:minute:second
    let maxLength = 3;
    console.log(timeArray);
    if(arrLength > maxLength) 
        timeArray.splice( 0, arrLength - maxLength);
    
        console.log(timeArray);
}
const reverseTimeArray = (timeArray) => timeArray = timeArray.reverse();

const getTime = (focusTime,breakTime) =>{
    // //
    // focusTimeArray = focusTime.split(":");
    // breakTimeArray = breakTime.split(":");
    splitTimetoTimeArray(focusTime, focusTimeArray);
    splitTimetoTimeArray(breakTime, breakTimeArray);

    //Limited the length to 3 elements for hours, minutes, second
    limitTimeArrayLength(focusTimeArray);
    limitTimeArrayLength(breakTimeArray);

    //------------
    // focusTimeArray = focusTimeArray.reverse();
    // breakTimeArray = breakTimeArray.reverse();
    reverseTimeArray(focusTimeArray);
    reverseTimeArray(breakTimeArray);
    log( focusTimeArray,"f");
    log( breakTimeArray, "b");
}


//-----------Implement
window.onload = () =>{
    let focusTime = document.querySelector('#focusTime').innerText;
    log("focusTime",focusTime)

//Usually 3-5 minutes break after each Pormodoro process
    let breakTime = document.querySelector('#breakTime').innerText;
    log("breakTime",breakTime)
    let numberOfPormodoroProcess = 0;
    
//Store time in array with maximum length 3
    let focusTimeArray = [], breakTimeArray = [];
    getTime(focusTime, breakTime);
    // log("focusTime",focusTime)
    // log("breakTime",breakTime)
}
