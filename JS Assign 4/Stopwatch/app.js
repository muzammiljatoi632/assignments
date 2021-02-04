var hour = 0;
var min = 0;
var sec = 0;
var milli = 0;

var displayhour = document.getElementById("hour");
var displaymin = document.getElementById("min");
var displaysec = document.getElementById("sec");
var displaymilli = document.getElementById("milli");
var timerplay;

function timer() {
    milli++
    displaymilli.innerHTML = milli
    if (milli == 100) {
        sec++
        displaysec.innerHTML = Sec
        milli = 0
    } else if (sec == 60) {
        min++
        displaymin.innerHTML = min
        sec = 0
    } else if (min == 60) {
        hour++
        displayhour.innerHTML = hour
        min = 0

    }
}
timer();

    function start() {
        timerplay = setInterval(timer, 10)
    }

    function pause() {
        clearInterval(timerplay)
    }

    function reset() {
        milli = 0
        sec = 0
        min = 0
        hour = 0
        displayhour.innerHTML = hour
        displaymin.innerHTML = min
        displaysec.innerHTML = sec
        displaymilli.innerHTML = milli
    }