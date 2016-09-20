/* Este método herda as características da classe pai (Ambiente),
   possuindo seus atributos e métodos. Nesta classe, é designado
   os parâmetros necessários para a geração de um ambiente. */
   
class AmbientePequeno extends Ambiente {
	
	constructor() {
		super.x           = 10;
		super.y           = 10;
		super.qunR        = 2;
		super.qntLixeiraO = 1;
		super.qntLixeiraS = 1;
		super.qntLixoO    = 6
		super.qntLixoS    = 6;
	}

}