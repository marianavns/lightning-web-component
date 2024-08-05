public with sharing class AccountController {

    // declarar construtor
        public AccountController() {
        }

    // declarar assinatura que permite visualização no lwc.
        @AuraEnabled (cacheable=true)
    // capturar os registros necessários.
        public static List<Account> getAccounts(){
                List<Account> AcctList = [
                    SELECT Id, Name, AnnualRevenue
                    FROM Account
                    ORDER BY AnnualRevenue DESC
                    NULLS LAST
                    LIMIT 9
                ];
                return AcctList;
        }

}