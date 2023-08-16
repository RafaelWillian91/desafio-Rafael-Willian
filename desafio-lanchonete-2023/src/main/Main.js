import { CaixaController } from "../Processar-Pedido.js";
import { CaixaDaLanchonete } from "../caixa-da-lanchonete.js";
import { Cardapio } from "../cardapio-da-lanchonete.js";


class Main{

    constructor(){

        this.caixaController = new CaixaController();
        
    }

    iniciar(){
        this.caixaController.iniciarPedido();
    }

}
    const main = new Main();
    main.iniciar();