const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

var btn = document.querySelector('.btn-hero');
var color = document.querySelector('.color');

btn.onclick = function() {
    var hexColor = '#';
    for (var i = 0; i < 6; i++) {
        hexColor += hex[getRandomColor()];
    }

    color.innerHTML = hexColor;
    document.body.style.backgroundColor = hexColor;
}



function getRandomColor() {
    return Math.floor(Math.random() * (hex.length))
}


