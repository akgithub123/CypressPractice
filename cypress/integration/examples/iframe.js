///<reference types="Cypress"/>
///<reference types="cypress-iframe"/>
import 'cypress-iframe'

describe('iframe handling',function(){
    beforeEach('visiting page',()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    })
    it('iframe test',function(){
        //1.Load the frame so that cypress will look into the iframe only
        cy.frameLoaded('#courses-iframe')
        //2.switch to iframe by cy.iframe(), then perform actions
        cy.iframe().find('a[href*="mentorship"]').eq(0).click()
        cy.iframe().find('h1[class*="pricing-title"]').should('have.length',2)
    })
})