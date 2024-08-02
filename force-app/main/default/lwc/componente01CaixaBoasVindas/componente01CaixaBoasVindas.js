import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {

    /* cria variável para guardar input */
        nomeInserido;

    /* limpa a barra de input quando clica sobre ela */
        limpaInput(event) {
            this.nomeInserido = null;
        }

    /* captura tudo o que é escrito no input em tempo real */
        capturaInput(event) {
            this.nomeInserido = event.target.value; 
            
            /* 
            O termo "event" carrega um monte de informações do elemento no momento que o evento está acontecendo
            como o valor do elemento na linha acima 
            basta usar "event.target.[atributo que você quer capturar]
            */
           
        }
}