var c = document.getElementById("visual"),
    canvas = c.getContext("2d"),
    count = 0;

setInterval(function () {
    'use strict';
    canvas.clearRect(0, 0, 500, 400);
    canvas.fillStyle = "red";
    canvas.fillRect(Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), 10, 10);
    document.getElementById("ciclo").innerHTML = count;
    count++;
}, 1000);