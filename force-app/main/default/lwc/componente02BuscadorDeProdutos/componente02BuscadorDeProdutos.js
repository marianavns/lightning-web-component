import { LightningElement, api } from 'lwc';

export default class BuscadorDeProdutos extends LightningElement {

    // declaração variáveis
    listaProdutos = ['camiseta', 'calça', 'bolsa', 'meia', 'sapato', 'cinto', 'boné', 'pijama', 'casaco', 'jaqueta']
    @api produtoBuscado = ''
    @api produtosRetornados = []


    procuraProdutosNaLista(event){
        
        this.produtoBuscado = event.target.value // captura do input
        this.produtosRetornados = ['']
              
        if (this.produtoBuscado != ''){
            this.produtosRetornados = this.listaProdutos.filter(item => item.includes(this.produtoBuscado)); // busca de acordo com input
        }

        if (this.produtosRetornados.length == 0){
            this.produtosRetornados = ['Nenhum produto encontrado!']
        }
        
    }
}