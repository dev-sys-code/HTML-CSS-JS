colours = ["#ffffff", "#000000", "#727272"]
let colourIndex = 0;

function background() {
    let btn = document.body.style.background = colours[colourIndex]
    colourIndex = (colourIndex + 1) % colours.length;
}
