class Reciclador {

	constructor() {
		
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