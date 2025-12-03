describe('ilk dersimiz', function () {

    it('TC01 ilk test senaryomuz', function () {

        cy.visit('https://www.edu.goit.global/account/login')
        cy.contains('Log in').should('be.visible')
    })

    it('TC02 login butonu doğrulanmasi', function () {

        cy.viewport(1000, 600)

        cy.visit('https://www.edu.goit.global/account/login')

        // Login butonunun text ve background-color kontrolü
        cy.get('.eckniwg2')
            .should('have.text', 'Log in')
            .and('have.css', 'background-color', 'rgb(255, 107, 10)')
            .and('be.visible')

        // Email doldurma
        cy.get('#user_email').type('user888@gmail.com')

        // Password doldurma
        cy.get('#user_password').type('1234567890')
        cy.get('#user_password').screenshot();
        cy.screenshot();
        // Login butonuna tıkla
        cy.get('.next-1jphuq5').click()

        // scrollIntoView() --> bir element görünür olana kadar sayfayı kaydırır.
        // cy.get ('#go-to-the-course-homepage-widget > .next-1jphuq5').scrollIntoView();

        //sctollTo (0, 1000); // sayfayı 1000px aşağı kaydırır. 
        cy.scrollTo('bottom'); // sayfanın en altına kaydırır 
        cy.scrollTo('center'); // sayfanın ortasına  kaydırır
        cy.wait(5000);

        //cy.screenshot();
        cy.screenshot();
    })

})
