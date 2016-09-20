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

	// Métodos Getters da classe

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

	_geraRecicladores(ambiente) {
		let arrayRecicladores = [];
		for (let i = 1 ; i <= ambiente.qntRecicladores ; i++) {
			arrayRecicladores.push(new Reciclador(i));
		}
		return arrayRecicladores;
	}

	_geraLixeirasOrganico(ambiente) {
		let arrayLixeiraO = [];
		for (let i = 1 ; i <= ambiente.qntLixeiraO ; i++) {
			arrayLixeiraO.push(new Lixeira(i, "Organico"));
		}
		return arrayLixeiraO;
	}

	_geraLixeirasSeco(ambiente) {
		let arrayLixeiraS = [];
		for (let i = 1 ; i <= ambiente.qntLixeiraS ; i++) {
			arrayLixeiraS.push(new Lixeira(i, "Seco"));
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





	// Método para embaralhar objetos dentro de um array.
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

	// Método para transformar um array unidimensional em uma matriz bidimensional.
	_listToMatrix(list, elementsPerSubArray) {
	    let matrix = [], i, k; // Cria uma matriz junto a outras variáveis auxiliares...

	    // Enquanto o array não foi percorrido por completo...
	    for (i = 0, k = -1; i < list.length; i++) {

	    	// Se indexador do array for 0 ou divisível pelo número de colunas por linha...
	        if (i % elementsPerSubArray === 0) {
	            k++;
	            matrix[k] = []; // A matriz cria uma nova linha...
	        }

	        matrix[k].push(list[i]); // A matriz adiciona na linha os elementos do array.
	    }

	    return matrix;
	}

	geraMatriz(ambiente) {
		
		// Calcula quantos espaços vazios haverá na matriz.
		let espacosVazios = (ambiente.x * ambiente.y) - (  ambiente.qntR 
														 + ambiente.qntLixeiraO 
														 + ambiente.qntLixeiraS
														 + ambiente.qntLixoO
														 + ambiente.qntLixoS );

		// Cria um array com os espaços vazios.
		let arrayEspacosVazios = new Array(espacosVazios);


		// Cria um array com a junção de todos os arrays existentes.
		let arrayFinal = espacosVazios.concat( _geraRecicladores     (ambiente),
											   _geraLixeirasOrganico (ambiente),
											   _geraLixeirasSeco     (ambiente),
											   _geraLixosOrganico    (ambiente),
											   _geraLixosSeco        (ambiente) ) ;


		// Embaralha os agentes dentro do array aleatóriamente.
		arrayFinal = _shuffle(arrayFinal);


		// Transforma o array em uma matriz.
		arrayFinal = _listToMatrix(arrayFinal, ambiente.x);
	}

}