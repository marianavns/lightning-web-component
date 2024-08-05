import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts'

export default class Componente10ManipularDadosApex extends LightningElement {

    // declarar as variaveis que receberão os registros e os erros
        accounts;
        error;

    // invocar a função de captura das contas
        @wire (getAccounts)

    // capturar o retorno da função
    // a função sempre será assim
        respostaDoServicoWireGetAccounts({ error, data }) { 
            if (data) {
                this.accounts = data;
                this.error = undefined;
                console.log("Registros retornados: " + JSON.stringify(this.accounts))
            } else if (error) {
                this.error = error;
                this.accounts = undefined;
                console.log('Erro encontrado: ' + error.body.message)
            }
        }
}