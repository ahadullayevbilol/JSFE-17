let milliseconds = document.querySelector(".millisecond_time")
let convert = document.querySelector('.convert')
let close =document.querySelector('.close')
let convert2 = document.querySelector('.convert2')
let close2 =document.querySelector('.close2')
let table = document.querySelector('table')
let table2 = document.querySelector('.table2')
let inp = document.querySelector('input')
let td = document.querySelector('.td')
let td1 = document.querySelector('.td1')
let td2 = document.querySelector('.td2')

function showTime(){
	let date = Date.parse(new Date()) / 1000
	milliseconds.innerText = date
}

setInterval(() =>{
	showTime()
}, 1000)

function time() {
    const date = new Date()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()
    document.querySelector('.hour').innerHTML = hour
    document.querySelector('.minute').innerHTML = minute
    document.querySelector('.second').innerHTML = second

    if(hour < 10){
        document.querySelector('.hour').innerHTML = '0'+hour
    }else if(minute < 10) {
        document.querySelector('.minute').innerHTML = '0'+minute
    }else if(second < 10) {
        document.querySelector('.second').innerHTML = '0'+second
    }
}

setInterval(time, 1000)

convert.addEventListener('click', () => {
	if(inp.value !== '') {
        let inp1 = new Date(+inp.value * 1000).toUTCString()
        let inp2 = new Date(+inp.value * 1000).toString()
        td.innerText = inp1
	    td1.innerText = inp2

	    table.style.display = 'flex';
    }
})

close.addEventListener('click', () => {
    table.style.display = 'none'
})




let firstInp = document.querySelector('.year')
let secondInp = document.querySelector('.month')
let thirdInp = document.querySelector('.day')
let fourthInp = document.querySelector('.hour')
let fifthInp = document.querySelector('.minutes')
let sixInp = document.querySelector('.seconds')
let unixTime = document.querySelector('.unix-time')
let gmt = document.querySelector(".gmt")
let timeZone = document.querySelector('.time_zone')

convert2.addEventListener('click', () => {
    let date = Date.parse(new Date(+firstInp.value, +secondInp.value, +thirdInp.value, +fifthInp.value, +sixInp.value,)) / 1000;
    let date2 = new Date(firstInp.value, secondInp.value, thirdInp.value, fifthInp.value, sixInp.value,).toUTCString()
    let date3 = new Date(firstInp.value, secondInp.value, thirdInp.value, fifthInp.value, sixInp.value,).toString()
    unixTime.innerText = `${date}`
    gmt.innerText = `${date2}`
    timeZone.innerText = `${date3}`
	table2.style.display = 'flex'
})

close2.addEventListener('click', () => {
    table2.style.display = 'none'
})