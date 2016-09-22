class Lixeira {

	constructor(col, row, tipo) {
		this._capacidade = 6;
		this._qntLixo 	 = 0;
		this._tipo		 = tipo; // O tipo pode ser "Organico" ou "Seco".
		this._posicaoX   = col;
		this._posicaoY   = row;
	}

	get tipo() {
		return this._tipo;
	}


	// Método que faz a lixeira receber o lixo do Reciclador.
	recebeLixo() {

		// Se há capacidade na lixeira...
		if (this._qntLixo < this._capacidade) {

			this._qntLixo++; // Adiciona o lixo na lixeira

			return 1; // Retorna 1 caso foi possível jogar o lixo na lixeira.

		} else {
			return 0; // Retorna zero caso a lixeira esteja cheia.
		}
	}

}