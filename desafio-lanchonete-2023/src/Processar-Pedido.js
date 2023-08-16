import entrada from 'readline-sync';
import { CaixaDaLanchonete } from "./caixa-da-lanchonete.js";
import { Cardapio } from "./cardapio-da-lanchonete.js";

class CaixaController{
    
    constructor(){
        this.cardapio = new Cardapio();
        this.caixa = new CaixaDaLanchonete();
        this.pagamento = new CaixaDaLanchonete();
        
    }

    iniciarPedido(){
        
        this.cardapio.imprimirCardapio();

        const itensEscolhidos = this.coletarItens();
        
        const formaPagamento =  this.formaPagamento();
        this.pagamento.calcularValorDaCompra(formaPagamento, itensEscolhidos);
        
    }
    

    coletarItens() {

        var itensEscolhidos = [];
        let sair = false;
        let itemPrincipal = true;
        
        stopWhile:
        while(!sair){

        let item = entrada.question("Escolha um Item do Cardápio ou aperte (S) para sair: ");

            if(item.toLowerCase() === 's'){
                sair = true;
                break stopWhile;
            }
            
            //Verificando se existe o item principal cafe
            validacao:
            if(item.toLowerCase() === 'chantily'){
               
                for(let i = 0; i < itensEscolhidos.length; i++){
                    
                        if (typeof itensEscolhidos[i] === 'string' && itensEscolhidos[i].includes('cafe')){
                            break validacao;
                        }
                        
                    }
                    itemPrincipal = false;
            }

            //Verificando se existe o item principal sanduiche
            validacao:
            if(item.toLowerCase() === 'queijo'){
                
                for(let i = 0; i < itensEscolhidos.length; i++){
                  
                        if (typeof itensEscolhidos[i] === 'string' && itensEscolhidos[i].includes('sanduiche')){
                            break validacao;
                        }
                        
                    }
                    itemPrincipal = false;
            }

                if (!itemPrincipal){
                    console.log("Item extra não pode ser pedido sem o principal");
                    itemPrincipal = true;
                    continue;
                }

                let quantidade = null;
                while(true){
                quantidade = parseInt(entrada.question(`Escolha uma quantidade do item ${item}: `));
                    if (quantidade === 0){
                        console.log("Quantidade inválida!");
                    }else{
                        break;
                    }
                }

        let escolha = `${item},${quantidade}`;  

        itensEscolhidos.push(escolha);  

        }

        return itensEscolhidos;
    
    }  

        formaPagamento(){

            return entrada.question("Aceitamos pagamento em dinheiro(5% de desconto), debito e credito(acréscimo de 3%)\n");
           
    }
}
    export { CaixaController };