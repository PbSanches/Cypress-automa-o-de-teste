describe('login e registro de usuario alura', () =>{

    beforeEach(()=>{
        cy.visit('https://alura-fotos.herokuapp.com')
        
        cy.intercept('POST','https://alura-fotos.herokuapp.com')
    })

    it('fazer login de usuario valido', () => {
        cy.login(Cypress.env('userName'), Cypress.env('password'));
        
    })

    it('fazer login de usuario invalido', () => {
        cy.login('jacqueline', '1234');
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Invalid user name or password');
        })
    })
})