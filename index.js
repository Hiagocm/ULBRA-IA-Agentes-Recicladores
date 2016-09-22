var 
	amb = new AmbientePequeno(), x, y, item;

amb.geraMatriz();

// ignore metodos de desenho
firstDraw(amb);

setInterval(function () {
    'use strict';

    for (x = 0; x < amb.x; x++) {
        for (y = 0; y < amb.y; y++) {
        	item = amb.matriz[x][y];
        	if (item && item instanceof Reciclador) {
                item._caminhar(amb.matriz);
        	}
        }
    }
    
    // ignore metodos de desenho
    draw(amb);
}, 2000);