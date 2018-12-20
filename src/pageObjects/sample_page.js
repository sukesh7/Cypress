class create_user_page{

    constructor(){
        this.hdrUserAccounts=":nth-child(2) > #header-menu";
        this.hdrLnkCreateUserAccounts=".open > .dropdown-menu > :nth-child(1) > a";
        this.txtUsername="#username";
        this.txtDocumentType="#documentType";
        this.txtPassword="#password";
        this.txtAAAUserId="#aaaUserID";
        this.txtT24UserId="#t24UserID";
        this.ddlCountry="select#country";
        this.ddlChannel="select#channel";
        this.btnCreateUser="button.btn-success";
        this.lblUserCreation="div[role='alert'] h5";
    }

    navigateToCreateUserPage(){
        cy.get(this.hdrUserAccounts).click();
        cy.get(this.hdrLnkCreateUserAccounts).click();
    }

    fillNewUserDetailsAndSubmit(username,documentType,password,aaaUserId,t24UserId,country){
        cy.get(this.txtUsername).type(username);
        cy.get(this.txtDocumentType).type(documentType);
        cy.get(this.txtPassword).type(password);
        cy.get(this.txtAAAUserId).type(aaaUserId);
        cy.get(this.txtT24UserId).type(t24UserId);
        cy.get(this.ddlCountry).select(country);
        cy.get(this.btnCreateUser).click();
    }

    fillNewUserDetailsServiceDocAndSubmit(username,documentType,password,country,channel){
        cy.get(this.txtUsername).type(username);
        cy.get(this.txtDocumentType).type(documentType);
        cy.get(this.txtPassword).type(password);
        cy.get(this.ddlCountry).select(country);
        cy.get(this.ddlChannel).select(channel);
        cy.get(this.btnCreateUser).click();
    }
}

module.exports = new create_user_page();