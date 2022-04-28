
//API calling(API request(XHR) after performing some action) => obtaining response

//We can obtain data by mocking API responses in cypress(in case when response/data is changing every time on APP UI)
//mock response and intercept it based on your requirements
//! using cypress we can mock responses, modify HTTP response, 

describe('API testing',()=>{
    beforeEach("start",()=>{
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")
    })
    it('test',()=>{
        // basic syntax for intercept method
        cy.intercept({requestObject},{responseObject})
        
    })

    it('test2',()=>{
       
        cy.window().then((win)=>{
            cy.stub()
        })
        
    })

})