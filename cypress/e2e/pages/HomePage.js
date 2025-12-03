// cypress/e2e/pages/HomePage.js

class HomePage {
    burgerMenu() {
        //  element gelene kadar 20 sn bekle
        return cy.get('#open-navigation-menu-mobile', { timeout: 20000 });
    }

    logoutButton() {
        return cy.contains('Log out');
    }

    openMenu() {
        this.burgerMenu().click();
    }

    logout() {
        this.logoutButton().click();
    }
}

export const homePage = new HomePage();
