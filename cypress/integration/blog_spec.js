describe('Page Test', () => {
  beforeEach(() => {
    cy.wait(300);
  })
    it('Visits the Academy Blog', () => {
        cy.visit({
            method:'GET',
            url:'/',
            failOnStatusCode: false
          })
        cy.get('h1').contains('Views From The Academy')
    })

    it('Checks content of blog card' , () => {
        cy.visit({
            method:'GET',
            url:'/',
            failOnStatusCode: false
          })
          cy.get(':nth-child(1) > .card-body > .card-subtitle').contains('Academy blog')
    })
})

