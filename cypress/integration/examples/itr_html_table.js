///<reference types='Cypress'/>

describe('iteration over web table',function(){
    beforeEach("start",()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    })
    it('test for iteration',function(){
        cy.get('tbody:nth-child(1) > tr > td:nth-child(2)').each(($el, index, $list)=>{
            const text = $el.text()
            if(text.includes('Mobile Automation')){
            
                cy.get('tbody:nth-child(1) > tr > td:nth-child(2)').eq(index).next().then((ex)=>{
                    //cy.log(ex.text())
                    expect(ex.text()).to.be.equal('30')
                })
                cy.log(text)
            }
            // else{
            //     cy.log('not found')
            // }
            //'Appium (Selenium) - Mobile Automation Testing from Scratch'
        })

    })
})