const days = document.querySelector(".days1")
const hours = document.querySelector(".hours1")
const minutes = document.querySelector(".minutes1")
const seconds = document.querySelector(".seconds1")


function showTime(){
    const nextYear = new Date('2023-03-21')

    const currentTime = new Date()
    const diff = nextYear - currentTime
    
    const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24)
    const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;  
    const minutesLeft = Math.floor(diff / 1000 / 60) % 60;  
    const secondsLeft = Math.floor(diff / 1000) % 60;
    
    if(diff > 0) {
        days.innerText = daysLeft;
        hours.innerText = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft;
        minutes.innerText = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft;
        seconds.innerText = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;
    }else {
        days.innerText = '00'
        hours.innerText = '00'
        minutes.innerText = '00'
        seconds.innerText = '00'
    }    
}

showTime()

setInterval(showTime, 1000)