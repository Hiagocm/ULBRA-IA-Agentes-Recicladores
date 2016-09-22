class Reciclador {

	constructor(col, row) {
		// define limites
		this._capacidadeLO  = 3;
		this._capacidadeLS  = 3;

		// atual quantidades
		this.qntLS          = 0;
		this.qntLO          = 0;

		// define atual posicao
		this._posicaoX     = col;
		this._posicaoY     = row;

		// define ciclos sem lixos
		this._cicloSemLixo = 0;

		// status do agente
		this._status = 'lixos';
	}

	_armazenaLixo(lixo) {
		if (lixo._tipo === 'Seco')
			if (this.qntLS < this._capacidadeLS)
				this.qntLS++;
			else
				this._procuraLixeira('Seco');
		else
			if (this.qntLO < this._capacidadeLO)
				this.qntLO++;
			else
				this._procuraLixeira('Organicos');

	}

	_caminhar(matriz) {
		if (this._status === 'lixeira')
			this._procuraLixeira(matriz);
		else
			this._procuraLixo(matriz);
	}

	_procuraLixeira(matriz) {
		this._status = 'lixeira';
		console.log('procurando lixeira...');
	}

	_procuraLixo(matriz) {
		var 
			decisao = false;

		for (var numCasas = 1; decisao === false && numCasas <= 2 ; numCasas++ ) {
			
			// Pega posicao da matriz e valida se eh lixeira
			// Lixo em cima
			if (this._pegaPosicao(matriz, this._posicaoX, this._posicaoY - numCasas) instanceof Lixo)
				decisao = this._andaParaCima(matriz);

			// Lixo a direita
			else if (this._pegaPosicao(matriz, this._posicaoX + numCasas, this._posicaoY) instanceof Lixo)
				decisao = this._andaParaDireita(matriz);

			// Lixo em baixo
			else if (this._pegaPosicao(matriz, this._posicaoX, this._posicaoY + numCasas) instanceof Lixo)
				decisao = this._andaParaBaixo(matriz);

			// Lixo a esquerda
			else if (this._pegaPosicao(matriz, this._posicaoX - numCasas, this._posicaoY) instanceof Lixo)
				decisao = this._andaParaEsquerda(matriz);

			// Lixo em cima direita
			else  if (this._pegaPosicao(matriz, this._posicaoX + numCasas, this._posicaoY - numCasas) instanceof Lixo)
				decisao = this._andaParaCima(matriz);

			// Lixo a direita baixo
			else if (this._pegaPosicao(matriz, this._posicaoX + numCasas, this._posicaoY + numCasas) instanceof Lixo)
				decisao = this._andaParaDireita(matriz);

			// Lixo em baixo esquerda
			else if (this._pegaPosicao(matriz, this._posicaoX - numCasas, this._posicaoY + numCasas) instanceof Lixo)
				decisao = this._andaParaBaixo(matriz);

			// Lixo a esquerda cima
			else if (this._pegaPosicao(matriz, this._posicaoX - numCasas, this._posicaoY - numCasas) instanceof Lixo)
				decisao = this._andaParaEsquerda(matriz);

		}

		// se não encontrou lixo anda aleatoriamente em busca
		if (!decisao)
			this._andaAleatorio(matriz);

		this._cicloSemLixo = 0;

		return decisao;
	}

	_andaAleatorio(matriz) {
		var disponivel = [], i;// vetor
		
		// grava posicoes que estao vazias para andar
		if (!this._pegaPosicao(matriz, this._posicaoX, this._posicaoY - 1))
			disponivel.push("cima");

		else if (!this._pegaPosicao(matriz, this._posicaoX + 1, this._posicaoY))
			disponivel.push("direita");

		else if (!this._pegaPosicao(matriz, this._posicaoX, this._posicaoY + 1))
			disponivel.push("baixo");

		else if (!this._pegaPosicao(matriz, this._posicaoX - 1, this._posicaoY))
			disponivel.push("esquerda");

		// se passou do limite cicloSemLixo deixa apenas as opcoes esquerda e direita
		if (this._cicloSemLixo >= 3 && (disponivel.indexOf("esquerda") > -1 || disponivel.indexOf("esquerda") > -1)) {
			disponivel.remove("cima");// remove posicao de cima
			disponivel.remove("baixo");// remove posicao de baixo
		}

		// gera posicao aleatória com base no tamanho do array
		i = Math.floor(Math.random() * disponivel.length);

		if (disponivel[i] === 'cima')
			this._andaParaCima(matriz);
		else if (disponivel[i] === 'baixo')
			this._andaParaBaixo(matriz);
		else if (disponivel[i] === 'esquerda')
			this._andaParaEsquerda(matriz);
		else if (disponivel[i] === 'direita')
			this._andaParaDireita(matriz);
		// se não andou é pq está cercado...
	}

	/* funcoes que andam na matriz */
	_andaParaCima(matriz) {
		return this._atualizaPosicao(matriz, this._posicaoX, this._posicaoY - 1);
	}

	_andaParaDireita(matriz) {
		return this._atualizaPosicao(matriz, this._posicaoX + 1, this._posicaoY);
	}

	_andaParaBaixo(matriz) {
		return this._atualizaPosicao(matriz, this._posicaoX, this._posicaoY + 1);
	}

	_andaParaEsquerda(matriz) {
		return this._atualizaPosicao(matriz, this._posicaoX - 1, this._posicaoY);
	}

	/* Permite atualizar posição apenas para cima, baixo, esquerda ou direita */
	_atualizaPosicao(matriz, x, y) {

		// limpa
		matriz[this._posicaoX][this._posicaoY] = undefined;

		// se possui lixo para onde está indo
		if (matriz[x][y] instanceof Lixo)
			this._armazenaLixo(matriz[x][y]);

		// atualiza posição e já limpa se tiver lixo
		this._posicaoX = x;
		this._posicaoY = y;
		matriz[this._posicaoX][this._posicaoY] = this;

		return true;
	}

	/* pega a posicao sem errar em um indice fora da matriz */
	_pegaPosicao(matriz, x, y) {
		if (x >= matriz.length || x < 0) return null;
		if (y >= matriz[0].length || y < 0) return null;
		return matriz[x][y];
	}
}

/*- Ele é um agente reativo que se movimenta no ambiente, uma célula em qualquer direção a cada ciclo.
- Sua trajetória é por linha ou por coluna conforme a percepção de sujeira.
- Possui uma percepção de duas células também em qualquer direção e sempre está à procura de sujeira para
eliminar.

- Se não encontrar sujeira, anda aleatoriamente.

- Para aumentar a eficiência do agente, se durante 3 ciclos consecutivos não encontrar sujeira, ele passa a se
mover em linha (a escolha da orientação esquerda ou direita deve ser aleatória).

- Ao encontrar sujeira novamente, volta a andar conforme a percepção de sujeira.

- Possui dois sacos de lixo, um para armazenar lixo orgânico e outro para armazenar lixo seco, cada saco
possui uma determinada capacidade (ele é também um parâmetro) que quando enche deve ser esvaziado em
uma das lixeiras do ambiente (lixo orgânico é descartado na lixeira de lixo orgânico e lixo seco é descartado
na lixeira de lixo seco).

- O agente sempre procura a lixeira mais próxima para descarregar o lixo.

- O agente possui uma pequena memória de controle, na qual ele guarda as coordenadas das lixeiras do
ambiente.

- Agentes não podem ocupar a mesma célula que lixeiras e outros agentes, deve desviar.

- O agente recolhe o lixo ao ir para célula em que o lixo está.*/