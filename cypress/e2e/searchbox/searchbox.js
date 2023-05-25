const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor')

Given ('I navigate to the website', function () {
    cy.visit('http://zero.webappsecurity.com/') 
})

When ('I type some text into Searchbox and click enter', function () {
    cy.get('#searchTerm').type('online {enter}')
})
        
Then ('I should see Search Result:', function () {
    cy.get('h2').click()
});
           
                
            
               
        
