class Ambiente {

	// Método para validar um ambiente dentro das especificações mínimas de quantidade de agentes.
	validarAmbiente(ambiente) {
		if ( ambiente.qntReciclador < 2 ||
			 ambiente.qntLixeiraO   < 1 ||
			 ambiente.qntLixeiraS   < 1 ||
			 ambiente.qntLixoO      < 6 ||
			 ambiente.qntLixoS      < 6  )
		{
			throw new Error("Nao foi respeitado o número mínimo de agentes");
		}

	}

	// Método para printar todos os atributos de um ambiente.
	printarParametros(ambiente) {
		console.log(`Eixo x: ${ambiente.x} 
					 Eixo y: ${ambiente.y} 
					 qntLixeiraO: ${ambiente.qntLixeiraO} 
					 qntLixeiraS: ${ambiente.qntLixeiraS} 
					 qntLixoO : ${ambiente.qntLixoO} 
					 qntLixoS : ${ambiente.qntLixoS} 
					`);
	}


	/* Geração de todos os objetos que estarão presentes na matriz. 
	   Estes objetos serão armazenados em arrays (um array para cada tipo de objeto). */

    geraMatriz() {
		this.criaMatriz();
        this.geraObjetos();
	}

    criaMatriz() {
        this.matriz = [];
        for (var i = 0; i < this.x; i++) {
            this.matriz[i] = new Array(this.y);
        }
    }
    geraObjetos() {
        let row, col;
        while(
            this.qunR > 0            ||
            this.qntLixoO > 0        ||
            this.qntLixoS > 0        ||
            this.qntLixeiraO > 0     ||
            this.qntLixeiraS > 0
        ) {
            col = Math.floor(Math.random() * this.x);
            row = Math.floor(Math.random() * this.y);
            if (!this.matriz[col][row])
                this.matriz[col][row] = this.getObjeto(col, row);
        }
    }
    getObjeto(pos) {
        if (this.qunR) {
            this.qunR--;
            return new Reciclador(pos);
        }
		if (this.qntLixoO) {
            this.qntLixoO--;
            return new Lixo("Organico");
        }
		if (this.qntLixoS) {
            this.qntLixoS--;
            return new Lixo("Seco");
        }
		if (this.qntLixeiraO) {
            this.qntLixeiraO--;
            return new Lixeira(pos, "Organico");
        }
		if (this.qntLixeiraS) {
            this.qntLixeiraS--;
            return new Lixeira(pos, "Seco");
        }
    }
}