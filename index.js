

const secondHand=document.querySelector('.clock-second')
const minuteHand=document.querySelector('.clock-minute')
const hourHand=document.querySelector('.clock-hour')

function setSecond(){
    const date=new Date();
    const seconds=date.getSeconds();
    const minutes=date.getMinutes();
    const hours=date.getHours();

     
    const secondDegrees=((seconds/60)*360) +90
    const minuteDegree=((minutes/60)*360)+90
    const hoursDegree=((hours/12)*360)+90

    secondHand.style.transform=`rotate(${secondDegrees}deg)`; 
    minuteHand.style.transform=`rotate(${minuteDegree}deg)`;
    hourHand.style.transform= `rotate(${hoursDegree}deg)`;

    // console.log(seconds)
}

setInterval(setSecond,1000)
