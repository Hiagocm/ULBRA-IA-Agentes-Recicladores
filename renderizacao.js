var 
    CANVAS_WIDTH = window.innerWidth - 100,
    CANVAS_HEIGHT = window.innerHeight - 100,
    c = document.getElementById("visual"),
    canvas = c.getContext("2d"),
    count = 0;

c.width  = CANVAS_WIDTH;
c.height = CANVAS_HEIGHT;
c.style.backgroundColor = 'black';

setInterval(function () {
    'use strict';
    canvas.clearRect(0, 0, 500, 400);
    canvas.fillStyle = "red";
    canvas.fillRect(Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), 10, 10);
    document.getElementById("ciclo").innerHTML = count;
    count++;
}, 1000);