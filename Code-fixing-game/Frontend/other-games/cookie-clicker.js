let count = 0;
let saveCount = 0;

function up() {
    count ++;
    document.getElementById("score").innerText = count;
}

function save() {
    saveCount = count;
}

function selSave() {
}
