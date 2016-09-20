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

	_geraLixeirasOrganico(ambiente) {
		let arrayLO = [];
		for (let i = 0 ; i < ambiente.qntLixeiraO ; i++) {
			arrayLO.push(new Lixeira("Organico"));
		}
		return arrayLO;
	}

	_geraLixeirasSeco(ambiente) {
		let arrayLS = [];
		for (let i = 0 ; i < ambiente.qntLixeiraS ; i++) {
			arrayLS.push(new Lixeira("Seco"));
		}
		return arrayLS;
	}

	geraMatriz(ambiente) {
		

	}

}