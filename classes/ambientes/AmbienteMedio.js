/* Este método herda as características da classe pai (Ambiente),
   possuindo seus atributos e métodos. Nesta classe, é designado
   os parâmetros necessários para a geração de um ambiente. */
   
class AmbienteMedio extends Ambiente {
	
	constructor() {
		super.x           = 20;
		super.y           = 12;
		super.qunR        = 3;
		super.qntLixeiraO = 2;
		super.qntLixeiraS = 2;
		super.qntLixoO    = 12;
		super.qntLixoS    = 15;
	}

}