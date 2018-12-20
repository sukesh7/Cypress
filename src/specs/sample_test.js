let userActions = require("../pageObjects/sample_page");
let basePage = require("../pageObjects/base_page");


describe("Verify google search", function(){
    it("Google search test", function(){
        cy.visit(baseUrl);
        cy.get(userActions.search).type("name");
        cy.get(userActions.searchButton).click();
    });

});