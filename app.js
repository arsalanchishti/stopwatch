var min = 0;
var sec = 0;
var msec = 0;
var minhed = document.getElementById('min');
var seched = document.getElementById('sec');
var mseched = document.getElementById('msec');
var interval;


function timer(){
        msec++
    mseched.innerHTML = msec;
    if(msec >= 100){
        sec++
        seched.innerHTML = sec;
        msec = 0;
    }else if(sec >= 60){
        min++
        minhed.innerHTML = min;
        sec = 0;
    }
}

function start(){
    interval = setInterval(timer,10)
}


function stop(){
    clearInterval(interval)
}

function reset(){
    stop()
    min = 0;
    sec = 0;
    msec = 0;
    minhed.innerHTML = min
    seched.innerHTML = sec
    mseched.innerHTML = msec
}