var amb = new AmbientePequeno();

amb.geraMatriz();

setInterval(function () {
    'use strict';
    
    // ignore metodos de desenho
    draw(amb);
}, 1000);
// ignore metodos de desenho
firstDraw(amb);