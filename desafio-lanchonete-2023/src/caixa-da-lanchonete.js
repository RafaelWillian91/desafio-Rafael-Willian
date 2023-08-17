import entrada from 'readline-sync';
import { Cardapio } from './cardapio-da-lanchonete.js';

class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {

        var cardapio = new Cardapio();
        let valor = 0;

        for (let item of itens) {
            item = item.split(',');
            let itemEscolhido = item[0];

            for (let i = 0; i < item[1]; i++) {
                let codigo = itemEscolhido.toLowerCase();
                let valorItem = cardapio.getItemPorCodigo(codigo);

                if (valorItem === undefined) {
                    console.log("Existe intens inválidos no carrinho!");
                    return "Item inválido!";
                }

                valor += Number(valorItem);
            }
        }


        if (valor === 0) {
            console.log("Não há itens no carrinho de compra");
            return "Não há itens no carrinho de compra!";
        }

        switch (metodoDePagamento) {
            case 'dinheiro':
                valor *= 0.95;
                console.log("Forma escolhida foi dinheiro. Total da compra: " + valor);
                break;
            case 'credito':
                valor *= 1.03;
                console.log("Forma escolhida foi Credito. Total da compra: " + valor);
                break;
            case 'debito':
                // Nada a fazer
                console.log("Forma escolhida foi debito. Total da compra: " + valor);
                break;
            default:
                return "Forma de pagamento inválida!";
        }
       

        return `Total da Compra: R$ ${valor.toFixed(2)}`;
    }

}

export { CaixaDaLanchonete };


