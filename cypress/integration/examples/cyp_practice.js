/// <reference types="Cypress"/>

describe("practice suit",function(){
beforeEach("start",()=>{
    cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")
})
it("test case 1",function(){

    const element = '.radioButton'
    //find method searches for webelement inside the parent method element scope only
    cy.get('#radio-btn-example').find(element).then((web_ele)=>{
        cy.wrap(web_ele).should('have.length',3)
        cy.wrap(web_ele).eq(1).click()
    })
    //using each method to perform action using cypress command
    cy.get('#radio-btn-example').find(element).each((ele)=>{
        cy.wrap(ele).click()
    })
    cy.get('#dropdown-class-example').select('option1')
    //iterating over table using each
    cy.get('tbody > tr').each((pro , index, $list)=>{  
         const ex=pro.find('td').text()
         if(ex.includes('Advanced Selenium Framework Pageobject, TestNG, Maven, Jenkins,C')){
            cy.log(ex)
         }else{
             cy.log('does not contains')
         }
    })
    //we cannot concatinate jquery commands with cypress commands(e.g cy.get('ex').text()),we can use then to concatinate
    cy.get('h1').then((ex)=>{
        cy.log(ex.text())
    })
    //it prints text on developer tool i.e console of browser
    //it is JS printing option, not a cypress command
   console.log('hiiiiiiii')
   // checkbox operations
   cy.get('#checkBoxOption1').check().should('have.value','option1')
   // checking multiple checkboxes by passing value into action command
   cy.get('input[type="checkbox"]').check(['option2','option3'])

   //handling dynamic dropdowns
   cy.get('#autocomplete').type('ind')
   cy.get('.ui-menu-item > div').each((some,index,$list)=>{
       if(some.text()==='India'){
//here used trigger('click') instead of click() because we cannot concatinate jquerry element with cypress command
        some.trigger('click')
       }
   })

})

})