class Ambiente {

	constructor() {
		this.x;
		this.y;
		this.qunR;
		this.qntLixeiraO;
		this.qntLixeiraS;
		this.qntLixoO;
		this.qntLixoS;
	}

	get x() {
		return this.x;
	}

	get y() {
		return this.y;
	}

	get qntR() {
		return this.qntReciclador;
	}

	get qntLixeiraO() {
		return this.qntLixeiraO;
	}

	get qntLixeiraS() {
		return this.qntLixeiraS;
	}

	get qntLixoO() {
		return this.qntLixoO;
	}

	get qntLixoS() {
		return this.qntLixoS;
	}


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

	printarParametros(ambiente) {
		console.log(`Eixo x: ${ambiente.x} 
					 Eixo y: ${ambiente.y} 
					 qntLixeiraO: ${ambiente.qntLixeiraO} 
					 qntLixeiraS: ${ambiente.qntLixeiraS} 
					 qntLixoO : ${ambiente.qntLixoO} 
					 qntLixoS : ${ambiente.qntLixoS} 
					`);
	}

	_geraRecicladores(ambiente) {
		let arrayRecicladores = [];
		for (let i = 0 ; i < ambiente.qntRecicladores ; i++) {
			arrayRecicladores.push(new Reciclador());
		}
		return arrayRecicladores;
	}

	_geraLixeirasOrganico(ambiente) {
		let arrayLixeiraO = [];
		for (let i = 0 ; i < ambiente.qntLixeiraO ; i++) {
			arrayLixeiraO.push(new Lixeira("Organico"));
		}
		return arrayLixeiraO;
	}

	_geraLixeirasSeco(ambiente) {
		let arrayLixeiraS = [];
		for (let i = 0 ; i < ambiente.qntLixeiraS ; i++) {
			arrayLixeiraS.push(new Lixeira("Seco"));
		}
		return arrayLixeiraS;
	}

	_geraLixosOrganico(ambiente) {
		let arrayLixoO = [];
		for (let i = 0 ; i < ambiente.qntLixoO ; i++) {
			arrayLixoO.push(new Lixo("Organico"));
		}
		return arrayLixoO;
	}

	_geraLixosSeco(ambiente) {
		let arrayLixoS = [];
		for (let i = 0 ; i < ambiente.qntLixoS ; i++) {
			arrayLixoS.push(new Lixo("Seco"));
		}
		return arrayLixoS;
	}

	_shuffle(array) {
		let currentIndex = array.length, temporaryValue, randomIndex;

		// Enquanto ainda há elementos para embaralhar...
		while (0 !== currentIndex) {

	    	// Pega um elemento sobrando...
	    	randomIndex = Math.floor(Math.random() * currentIndex);
	    	currentIndex -= 1;

	    	// E o troca pelo elemento atual.
	    	temporaryValue = array[currentIndex];
	    	array[currentIndex] = array[randomIndex];
	    	array[randomIndex] = temporaryValue;
		}

	  	return array;
	}

	_listToMatrix(list, elementsPerSubArray) {
	    let matrix = [], i, k;

	    for (i = 0, k = -1; i < list.length; i++) {
	        if (i % elementsPerSubArray === 0) {
	            k++;
	            matrix[k] = [];
	        }

	        matrix[k].push(list[i]);
	    }

	    return matrix;
	}

	geraMatriz(ambiente) {
		
		let espacosVazios = (ambiente.x * ambiente.y) - (  ambiente.qntR 
														 + ambiente.qntLixeiraO 
														 + ambiente.qntLixeiraS
														 + ambiente.qntLixoO
														 + ambiente.qntLixoS );
		let arrayEspacosVazios = new Array(espacosVazios);

		let arrayFinal = espacosVazios.concat( _geraRecicladores,
											   _geraLixeirasOrganico,
											   _geraLixeirasSeco,
											   _geraLixosOrganico,
											   _geraLixosSeco ) ;

		arrayFinal = _shuffle(arrayFinal);

		arrayFinal = _listToMatrix(arrayFinal, ambiente.x);
	}

}