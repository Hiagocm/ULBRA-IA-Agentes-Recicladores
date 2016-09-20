class Lixeira {

	constructor(tipo) {
		this._capacidade = 6;
		this._qntLixo 	 = 0;
		this._tipo		 = tipo;
	}

	get tipo() {
		return this._tipo;
	}

	recebeLixo() {
		if (this._qntLixo < this._capacidade) {
			this._qntLixo++;
			return 1;
		} else {
			return 0;
		}
	}

}