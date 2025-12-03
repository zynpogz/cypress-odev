describe("standart Test Yazma", () => {

    it("tc01 Standart Test", () => {
        // 1. url git
        //2.title'ın görünür olup olmadığını kontrol et ve text in login olup olmadığını kontrol et
        //3. email alanının görünür olup olmadığını kontrol et ve var olup olmadığını kontrol et 
        //4. password alanının görünür olup olmadığını kontrol et ve var olup olmadığını kontrol et 
        //5.login butonunun görünür olup olmadığını kontrol et ve var olup olmadığını kontrol et 
        // 6. şifremi hatırlamıyorum alanının görünür olup olmadığını kontrol et ve var olup olmadığını kontrol et
        cy.visit("https://www.edu.goit.global/account/login");
        cy.get('.next-10stgr7 > .next-c1vj7d').should("be.visible").and("have.text", "Login");
        cy.get('#user_email').should("be.visible").and("exist")
        cy.get('#user_password').should("be.visible").and("exist")
        cy.get('.next-1jphuq5').should("be.visible").and("exist")
        cy.get('.next-1f1fv1i > .next-1qrvie4').should("be.visible").and("have.text", "I can't remember the password");

    });

});
