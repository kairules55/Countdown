var count = 15;
var displayTimer = document.getElementById('display');

function timer() {
    if (count == 0) {
        displayTimer.innerText = "Timeout";
        clearInterval(id);
        return;
    }
    displayTimer.innerText = count;
    count--;
}

var id = setInterval(timer, 1000);