/// <reference types="Cypress"/>

describe('2nd suit',function(){
    beforeEach("start",()=>{
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")
    })
    it('2nd test case',function(){
        cy.get('#alertbtn').click()
        //to trigger any event like alert cypress uses command
        cy.on('window:alert',(Str)=>{
            expect(Str).to.equal('Hello , share this practice page and share your knowledge')
        })
        // similarly for confirm event = window:confirm
        // cypress automatically click for ok  on alerts 
        cy.get('#confirmbtn').click()
        cy.on('window:confirm',(Str)=>{
            expect(Str).be.equal('Hello , Are you sure you want to confirm?')
        })

        //we can open a page in same tab (instead of opening it in child tab, 
        //beacause cypress does not support it) by removing target attribute from DOM using jquerry function
        cy.get('#opentab').invoke('removeAttr','target').click()
        //to check whether url on which page is navigated should include text '....'
        cy.url().should('include','index')
        //to navigate to previous page or back action in browser
        cy.go(-1)

        
    })
})