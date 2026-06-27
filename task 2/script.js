let seconds = 0;
let minutes = 0;
let hours = 0;

let timer = null;

const display = document.getElementById("display");

function updateDisplay() {

    let h = String(hours).padStart(2,'0');
    let m = String(minutes).padStart(2,'0');
    let s = String(seconds).padStart(2,'0');

    display.innerHTML = h + ":" + m + ":" + s;
}

function stopwatch(){

    seconds++;

    if(seconds == 60){
        seconds = 0;
        minutes++;
    }

    if(minutes == 60){
        minutes = 0;
        hours++;
    }

    updateDisplay();
}

document.getElementById("start").onclick = function(){

    if(timer !== null){
        clearInterval(timer);
    }

    timer = setInterval(stopwatch,1000);
};

document.getElementById("pause").onclick = function(){
    clearInterval(timer);
};

document.getElementById("reset").onclick = function(){

    clearInterval(timer);

    seconds = 0;
    minutes = 0;
    hours = 0;

    updateDisplay();
};
document.getElementById("lap").onclick = function(){

    let li = document.createElement("li");

    li.innerHTML = display.innerHTML;

    document.getElementById("laps").appendChild(li);
};