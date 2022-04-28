// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add("selectProduct", (prodName) => { 
    cy.get('h4.card-title').each(($el,index,list)=>{
        //var tex="Nokia Edge"
        if($el.text().includes(prodName)){
            cy.log(index)
            //click on add button for that particular product
            cy.get('.btn.btn-info').eq(index).click()
        }
      
    })
 })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
