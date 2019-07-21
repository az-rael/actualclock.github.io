const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate(){
    const now = new Date;
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg`;
    console.log(seconds);

    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minutesDegrees}deg`;
    console.log(minutes);

    const hours = now.getHours(); 
    const hourDegrees = ((hours / 12) * 360) +90;
    hourHand.style.transform = `rotate(${hourDegrees}deg`;
    console.log(hours);

     
    
}
setInterval(setDate, 1000);

const secondHand2 = document.querySelector('.second-hand2');
const minHand2 = document.querySelector('.min-hand2');
const hourHand2 = document.querySelector('.hour-hand2');

function setDate2(){
    const now = new Date;
    const seconds2 = now.getSeconds();
    const secondsDegrees2 = ((seconds2 / 60) * 360) + 90;
    secondHand2.style.transform = `rotate(${secondsDegrees2}deg`;
    console.log(seconds2);

    const minutes2 = now.getMinutes();
    const minutesDegrees2 = ((minutes2 / 60) * 360) + 90;
    minHand2.style.transform = `rotate(${minutesDegrees2}deg`;
    console.log(minutes2);

    const hours2 = now.getHours() - 6; 
    const hourDegrees2 = ((hours2 / 12) * 360) +90;
    hourHand2.style.transform = `rotate(${hourDegrees2}deg`;
    console.log(hours);
}

setInterval(setDate2, 1000);

const secondHand3 = document.querySelector('.second-hand3');
const minHand3 = document.querySelector('.min-hand3');
const hourHand3 = document.querySelector('.hour-hand3');

function setDate3(){
    const now = new Date;
    const seconds3 = now.getSeconds();
    const secondsDegrees3 = ((seconds3 / 60) * 360) + 90;
    secondHand3.style.transform = `rotate(${secondsDegrees3}deg`;
    console.log(seconds3);

    const minutes3 = now.getMinutes();
    const minutesDegrees3 = ((minutes3 / 60) * 360) + 90;
    minHand3.style.transform = `rotate(${minutesDegrees3}deg`;
    console.log(minutes3);

    const hours3 = now.getHours() + 7; 
    const hourDegrees3 = ((hours3 / 12) * 360) +90;
    hourHand3.style.transform = `rotate(${hourDegrees3}deg`;
    console.log(hours3);
}

;
setInterval(setDate3, 1000);

