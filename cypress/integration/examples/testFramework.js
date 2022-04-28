///<reference types="Cypress"/>

describe('framework structure',function(){

    before(function(){
        //fixtures are always used in before hook
        cy.fixture('example').then(function(data){
            //as here data object cannot be used outside then loop,
            // we globalise it accross whole class using this keyword
            this.data=data
        })
    })
    it('test to understand framework',function(){
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get('input[name="name"]:nth-child(2)').type(this.data.name)
        cy.get('input[name="name"]:nth-child(1)').should('have.value',this.data.name)
        // cy.get('input[name="name"]:nth-child(1)').then((tex)=>{
        //     const val=tex.text()
        //     cy.wrap(val).should('have.value',this.data.name)
            //expect(val).to.be.equal(this.data.name)
        // })
        //using have.attr assertion we can check attribute value for any element
        cy.get('input[name="name"]:nth-child(2)').should('have.attr','minlength','2')
        cy.get('a.nav-link').eq(1).click()
        //custom command to select product
        cy.selectProduct("Nokia Edge")
        
        cy.get('.nav-link.btn.btn-primary').should('include.text',"Checkout ( 1 )")
        .click()
    })
})