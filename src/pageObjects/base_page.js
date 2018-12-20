class base_page{

    constructor(){
        this.txtUsername="#username";
        this.txtPassword="#password";
        this.btnSubmit="#kc-login";
        this.hdrUserAccounts=":nth-child(2) > #header-menu";
        this.hdrLnkManageUserAccounts=".open > .dropdown-menu > :nth-child(2) > a";
        this.lblUserCreation="div[role='alert'] h5";
    }

    login(){
        cy.visit("/");
        cy.get(this.txtUsername).type(Cypress.env('username'));
        cy.get(this.txtPassword).type(Cypress.env('password'));
        cy.get(this.btnSubmit).click();
    }

    navigateToManageUserAccountsAction(button){
        cy.get(this.hdrUserAccounts).click();
        cy.get(this.hdrLnkManageUserAccounts).click();
        cy.get("button").contains(button).click();
    }

    clickButton(action){
        cy.get("button").contains(action).click();
    }

}

module.exports = new base_page();