class LoginPage {

    emailInput() {
        return cy.get('input[name="email"]');
    }

    passwordInput() {
        return cy.get('input[name="password"]');
    }

    loginButton() {
        return cy.get('button[type="submit"]');
    }

    visit() {
        cy.visit('https://www.edu.goit.global/account/login');
    }

    login(email, password) {
        this.emailInput().type(email);
        this.passwordInput().type(password);
        this.loginButton().click();
    }
}

export const loginPage = new LoginPage();
