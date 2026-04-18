let count = 0;

function increment() {
    count ++;
    document.getElementById("score").innerHTML = count;
}

function reset() {
    count = 0;
    document.getElementById("score").innerHTML = count;
}
