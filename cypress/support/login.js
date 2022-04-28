///<reference types="Cypress"/>

Cypress.Commands.add('login',()=>{
    cy.request({
        method:'POST',
        url:'/AutomationPractice/',
        // body: {
        //     loginUserName: email,
        //     loginPassword: password,
        // }
    });
    //cy.getCookie('project-cookies').should('exist')
})