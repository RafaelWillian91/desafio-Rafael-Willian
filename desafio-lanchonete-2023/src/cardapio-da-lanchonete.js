class Cardapio{

    constructor() {
        this.cardapio = [
            {codigo: 'cafe', descricao: 'Café', valor: 3.00 },
            {codigo: 'chantily', descricao: 'Chantily (extra do Café)', valor: 1.50 },
            {codigo: 'suco', descricao: 'Suco Natural', valor: 6.20},
            {codigo: 'sanduiche', descricao: 'sanduiche', valor: 6.50},
            {codigo: 'queijo', descricao: 'Queijo (extra do Sanduíche)', valor: 2.00},
            {codigo: 'salgado', descricao: 'Salgado', valor: 7.25},
            {codigo: 'combo1', descricao: '1 Suco e 1 Sanduíche', valor: 9.50},
            {codigo: 'combo2', descricao: '1 Café e 1 Sanduíche', valor: 7.50},

        ];
    }

    getItemPorCodigo(codigo){
        for (let codClasse of this.cardapio){
            if(codClasse.codigo === codigo){
                return codClasse.valor;
            }
        }

    }

    validarCodigoItem(codigo){
        return this.cardapio.some(item  => item.codigo === codigo);
    }


    imprimirCardapio() {
        console.log("\n\n\n" + "***** Bem vindo ao MasterChef DB ****** \n\n".padStart(80, " "));
        console.log('Cardápio:');
        this.cardapio.forEach(item => {
            console.log(`${item.codigo}: ${item.descricao} - R$ ${item.valor.toFixed(2)}`);
        });
        console.log('');
    }

}

export { Cardapio };