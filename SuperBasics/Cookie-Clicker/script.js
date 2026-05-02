function increment() {
    count ++;
    document.getElementById("score").innerHTML = count;
}

let count = 0;
function reset() {
    count = 0;
    document.getElementById("score").innerHTML = count;
}
