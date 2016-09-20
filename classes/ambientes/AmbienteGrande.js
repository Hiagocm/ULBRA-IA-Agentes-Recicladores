/* Este método herda as características da classe pai (Ambiente),
   possuindo seus atributos e métodos. Nesta classe, é designado
   os parâmetros necessários para a geração de um ambiente. */

class AmbienteGrande extends Ambiente {
	
	constructor() {
		super.x           = 30;
		super.y           = 30;
		super.qunR        = 5;
		super.qntLixeiraO = 7;
		super.qntLixeiraS = 6;
		super.qntLixoO    = 35;
		super.qntLixoS    = 30;
	}

}