///<reference types='Cypress'/>

describe('use of mouserover and show method',function(){
    
    beforeEach('visiting url',()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    })

    it('test for showing hidden elements',function(){
        //here invoke is used to show(jQuery method) immediate child hidden elements 
        //jQuery method is always used on immediate child elements only
        cy.get('.mouse-hover-content').invoke('show').should('include.text','Top')
        cy.contains('Top').click()
        cy.url().should('include','top')
    })

})